import { AutoComplete, Input, SelectProps } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category: string = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

type Props = {
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  openSearch: boolean;
};

const MobileSearch = ({ setOpenSearch, openSearch }: Props) => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: "100%", padding: "0px 10px 10px 10px" }}
      className="inline-block xl:hidden"
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="middle" placeholder="Type to search..." allowClear />
    </AutoComplete>
  );
};

export default MobileSearch;

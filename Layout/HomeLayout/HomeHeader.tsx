import {
  AutoComplete,
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  MenuProps,
  SelectProps,
} from "antd";
import { useState } from "react";
import {
  CiDiscount1,
  CiBellOn,
  CiHeart,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

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

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

type Props = {};

const HomeHeader = ({}: Props) => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  return (
    <header className="p-3  bg-[#6c757d] text-white w-full flex justify-center items-center gap-32 ">
      <p className="font-extrabold text-2xl font-mono">Copyclone</p>
      <div className="w-[500px] ">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: "100%" }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search
            size="middle"
            placeholder="Type to search..."
            enterButton="Search"
            allowClear
          />
        </AutoComplete>
      </div>
      <div className="flex gap-6">
        <Dropdown menu={{ items }}>
          <Badge count={5} className="text-2xl text-white">
            <CiDiscount1 className="" />
          </Badge>
        </Dropdown>

        <Dropdown menu={{ items }}>
          <Badge count={5} className="text-2xl text-white">
            <CiBellOn />
          </Badge>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <Badge count={5} className="text-2xl text-white">
            <CiHeart />
          </Badge>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <Badge count={5} className="text-2xl text-white">
            <CiShoppingBasket />
          </Badge>
        </Dropdown>
      </div>
      <div className="flex gap-3">
        <Button type="primary" className="bg-blue-500 flex gap-1 items-center">
          <CiUser /> Login
        </Button>
        <Button type="primary" className="bg-blue-500 flex gap-1 items-center">
          <CiUser /> Help ?
        </Button>
        <Button type="primary" className="bg-blue-500 flex gap-1 items-center">
          <CiUser /> Sell on FabPik!
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;

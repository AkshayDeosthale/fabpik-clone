import { Button, Divider, Popover } from "antd";
import React from "react";

const text = <span>Title</span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

type Props = {};

const Categories = ({}: Props) => {
  return (
    <div className=" hidden w-full md:flex items-center justify-center shadow-lg ">
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="hover"
      >
        <Button type="text" size="middle">
          Category 1
        </Button>
      </Popover>
      <Divider type="vertical" />
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="hover"
      >
        <Button type="text" size="middle">
          Category 2
        </Button>
      </Popover>
      <Divider type="vertical" />
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="hover"
      >
        <Button type="text" size="middle">
          Category 3
        </Button>
      </Popover>
      <Divider type="vertical" />
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="hover"
      >
        <Button type="text" size="middle">
          Category 4
        </Button>
      </Popover>
      <Divider type="vertical" />
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="hover"
      >
        <Button type="text" size="middle">
          Category 5
        </Button>
      </Popover>
    </div>
  );
};

export default Categories;

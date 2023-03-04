import { Button, Drawer, Menu, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  AiOutlineFieldTime,
  AiOutlineFolderOpen,
  AiOutlineUser,
} from "react-icons/ai";
import { BiNote } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileInvoice, TbReportSearch } from "react-icons/tb";

type DialogueRoutes = {
  key: string;
  icon: JSX.Element;
  label: string;
};

const managerRoutes: DialogueRoutes[] = [
  {
    key: "/",
    icon: <AiOutlineFieldTime />,
    label: "Time",
  },
  {
    key: "clients",
    icon: <FiUsers />,
    label: "Clients",
  },
  {
    key: "projects",
    icon: <AiOutlineFolderOpen />,
    label: "Projects",
  },
  {
    key: "tasks",
    icon: <BiNote />,
    label: "Tasks",
  },
  {
    key: "employee",
    icon: <HiOutlineUserGroup />,
    label: "Employees",
  },
  {
    key: "reports",
    icon: <TbReportSearch />,
    label: "Reports",
  },
  {
    key: "invoices",
    icon: <TbFileInvoice />,
    label: "Invoices",
  },
  {
    key: "profile",
    icon: <AiOutlineUser />,
    label: "Profile",
  },
  {
    key: "login",
    icon: <FiLogOut />,
    label: "Logout",
  },
];

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router: NextRouter = useRouter();

  const { asPath } = router;

  const [current, setCurrent] = useState("/");

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "login") {
      localStorage.clear();

      window.location.replace("/");
    } else {
      setCurrent(e.key);
      router.push(`/${e.key}`);
      onClose();
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    asPath === "/"
      ? setCurrent("/")
      : asPath.includes("clients")
      ? setCurrent("clients")
      : asPath.includes("projects")
      ? setCurrent("projects")
      : asPath.includes("tasks")
      ? setCurrent("tasks")
      : asPath.includes("employee")
      ? setCurrent("employee")
      : asPath.includes("profile")
      ? setCurrent("profile")
      : asPath.includes("pending-approval")
      ? setCurrent("/")
      : asPath.includes("unsubmitted")
      ? setCurrent("/")
      : asPath.includes("approved")
      ? setCurrent("/")
      : asPath.includes("add-employee")
      ? setCurrent("employee")
      : asPath.includes("edit-employee")
      ? setCurrent("employee")
      : asPath.includes("reports")
      ? setCurrent("reports")
      : asPath.includes("invoices")
      ? setCurrent("invoices")
      : asPath.includes("") && setCurrent("");
  }, [asPath, current]);

  return (
    <>
      <div
        className="flex xl:hidden absolute items-center"
        style={{
          top: 20,
          left: 10,
        }}
      >
        <CiMenuBurger
          className="inline-block xl:hidden relative text-1xl"
          onClick={showDrawer}
        />
      </div>

      <Drawer
        width={300}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: "7px",
            }}
          >
            <Link href="/" className="df-logo"></Link>

            <Link href="/" className="df-logo">
              Time<span>Trak</span>
            </Link>
          </div>
        }
        placement={"left"}
        onClose={onClose}
        open={open}
        bodyStyle={{ padding: "0px" }}
      >
        <Menu
          mode="inline"
          selectedKeys={[current]}
          onClick={onClick}
          items={managerRoutes}
        />
      </Drawer>
    </>
  );
};

export default MobileNavbar;

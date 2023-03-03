import { ReactElement } from "react";
import Categories from "./Categories";
import HomeHeader from "./HomeHeader";

type HomeLayoutProps = {
  children: ReactElement;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <HomeHeader />
      <Categories />
      <div className="h-[calc(100vh-90px)] overflow-auto">{children}</div>
      <footer></footer>
    </>
  );
};

export default HomeLayout;

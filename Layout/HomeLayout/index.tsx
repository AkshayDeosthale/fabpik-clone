import MobileSearch from "@/Components/Homepage/MobileSearch";
import { ReactElement, useState } from "react";
import Categories from "./Categories";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

type HomeLayoutProps = {
  children: ReactElement;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  return (
    <>
      <HomeHeader openSearch={openSearch} setOpenSearch={setOpenSearch} />
      {openSearch && (
        <MobileSearch setOpenSearch={setOpenSearch} openSearch={openSearch} />
      )}
      <Categories />

      <div className="h-[calc(100vh-90px)] overflow-auto">
        {children}
        <HomeFooter />
      </div>
    </>
  );
};

export default HomeLayout;

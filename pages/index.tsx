import Carousal from "@/Components/Homepage/Carousal";
import ShopByCategories from "@/Components/Homepage/ShopByCategories";
import HomeLayout from "@/Layout/HomeLayout";
import Head from "next/head";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>CloneIt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Carousal />
        <ShopByCategories />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

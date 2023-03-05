import { Input } from "antd";
import React from "react";
import { IoIosPaperPlane } from "react-icons/io";

type Props = {};

const HomeFooter = ({}: Props) => {
  return (
    <footer className="hidden xl:block text-gray-600 body-font px-3">
      <div className="  py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 ">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            USEFUL LINKS
          </h2>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className=" py-8 flex flex-wrap mx-auto items-end">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label className="leading-7 text-sm text-gray-600">
                SIGN UP TO NEWSLETTER
              </label>
              <Input
                placeholder="Enter your email here..."
                size="large"
                className="focus:ring-2 focus:bg-transparent focus:ring-pink-200 focus:border-pink-500 hover:ring-pink-200 hover:border-pink-500"
              />
            </div>
            <button className="inline-flex text-white bg-pink-500 border-0 p-3 focus:outline-none hover:bg-pink-600 rounded-lg">
              <IoIosPaperPlane />
            </button>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 CopyClone —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @akshaydeosthale
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Enamel pin tousled raclette tacos irony
          </span>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;

import { Helmet } from "react-helmet";
import { Heading, Text, Img } from "../../component/Header";
import Header from "../../components/Header";
import Sidebar10 from "../../components/Sidebar10";
import HerpowerColumnrecommend from "./HerpowerColumnrecommmend";
import HerpowerColumntoptrendi from "./HerpowerColumntoptrendi";
import React from "react";

export default function HerpowerPage() {
  return (
    <>
      <Helmet>
        <title>Philemon Application</title>
        <meta name="description" content="web site created using creat-react-app" />
      </Helmet>
      <div className="relative h-[976px] w-full content-center overflow-x-scroll bg-[#ffffff] md:h-auto">
        <div className="flex-1">
          <div>
            <Header className="relative z-[1] bg-[#ffffff] shadow-[0_4px_4px_0_#0000000c]" />
            <div className="relative mt-[-38px] h-[832px] bg-[url(/public/images/img_group_13.png)] bg-no-repeat md:h-auto">
              <div className="flex h-[832px] items-start bg-[url(/public/images/img_component_69.png)] bg-cover bg-no-repeat py-14 pl-24 pr-14 md:h-auto md:p-5">
                <Sidebar10 />
              </div>
            </div>
            <div>
              <div className="container-sm relative mt-[-12px] px-5">
                <div className="flex gap-1.5 md:flex-col">
                  <div className="flex flex-1 flex-col items-end md:self-stretch">
                    <Img
                      src="images/img_rectangle_756.png"
                      alt="Image"
                      className="h-[100px] w-[32%] rounded-md object-contain"
                    />
                    <Text
                      as="p"
                      className="relative mb-2.5 mr-2.5 mt-[-2px] text-[14px] font-normal !text-[#ffffff] md:mr-0"
                    >
                      Architecture
                    </Text>
                  </div>
                  <div className="flex w-[14%] flex-col items-center md:h-full">
                    <Img
                      src="images/img_rectangle_756_100x134.png"
                      alt="Image"
                      className="ml-1.5 h-[100px] w-full rounded-md object-cover md:ml-0 md:h-auto"
                    />
                    <Text as="p" className="relative mb-2.5 mt-2.5 mt-[-2px] text-[14px] font-normal !text-[#ffffff]">
                      Arts
                    </Text>
                  </div>
                  <div className="flex w-[14%] flex-col items-center md:w-full">
                    <Img
                      src="images/img_rectangle_756_1.png"
                      alt="Image"
                      className="ml-1.5 h-[100px] w-full rounded-md object-cover md:ml-0 md:h-auto"
                    />
                    <Text as="p" className="relative mb-2.5 mt-[-2px] text-[14px] font-normal !text-[#ffffff]">
                      Plants
                    </Text>
                  </div>
                  <div className="flex w-[14%] flex-col items-center md:w-full">
                    <Img
                      src="images/img_rectangle_756_1.png"
                      alt="Image"
                      className="ml-1.5 h-[100px] w-full rounded-md object-cover md:ml-0 md:h-auto"
                    />
                    <Text as="p" className="relative mb-2.5 mt-[-2px] text-[14px] font-normal !text-[#ffffff]">
                      Science
                    </Text>
                  </div>
                  <div className="flex w-[14%] flex-col items-center md:w-full">
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank">
                      <Img
                        src="images/img_rectangle_756_1.png"
                        alt="Image"
                        className="ml-1.5 h-[100px] w-full rounded-md object-cover md:ml-0 md:h-auto"
                      />
                    </a>
                    <Text as="p" className="relative mb-2.5 mt-[-2px] text-[14px] font-normal !text-[#ffffff]">
                      Sports
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-[9%] m-auto flex w-[66%] flex-col items-start gap-11 bg-[#ebecee66] py-7 sm:py-5">
              <HerpowerColumnrecommend />
              <HerpowerColumntoptrendi />
              <Heading
                size="header__16px__text"
                as="h2"
                className="mb-[88px] ml-[22px] text-[16px] font-medium tracking-[=0.50px] !text-[#000000] md:ml-0"
              >
                Categories
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
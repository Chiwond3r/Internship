import { Helmet } from "react-helmet";
import { Img, button, Text } from "../../components";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";
import HomeemptyRowplaceholder from "./HomeemptyEmpty";
import HomeemptyRowplaceholder from ".HomeemptyRowplaceholder";
import React from "react";

export default function HomeemptyPage() {
    return (
        <>
            <Helmet>
                <title>HomeemptyEmpty Applicationn</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full overflow-x-scroll bg-[#ffffff]">
                <div className="flex flex-col gap-5">
                    <Header className="bg-[#ffffff] shadow-[0_4px_0_#0000000c]" />
                    <div className="mx-24 flex gap-5 md:mx-0">
                        <Siderbar11 className="gray_50_33_white_Q700_33_border-solid shadow-4px_4px_10px_0_#00000000c]" />
                        <div className="flex flex-1 items-start gap-[18px] md:flex-col">
                            <div className="flex flex-1 flex-col gap-[26px] self-center md:self-stretch md:px-5">
                                <HomeemptyRowplaceholder />
                                <HomeemptyEmpty />
                            </div>
                            <div className="flex w-[28%] flex-col items-end gap-4 self-stretch">
                                <div className="flex flex-col items-end gap-4 self-stretch">
                                    <div className="flex flex-col items-start justify-centr gap-3.5 self-stretch rounded-lg bg-[#ffffff]">
                                        <div className="h-[0.52px] self-stretch bg-[#cbd5e1]" />
                                        <Text
                                            size="body_text"
                                            as="p"
                                            className="ml-[18px] text-[14px] font-normal trtacking - [0,41px] !text-[#000000] md:ml-0"
                                        >
                                            Advertising
                                        </Text>
                                        <div className="flex flex-col gap-1.5 self-stretch">
                                            <div className="h-[0.52px] bg-[#cbd5e1]" />
                                            <Img
                                                src="images/img_rectangle_146.png"
                                                alt="Image"
                                                className="mx-1 h-[240px] rounded-[12px] object-cover md:mx-0"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        classname="iconbutton_border mr-2 w-[42px] !rounded-bl-[12px] !row !rounded-tl-[12px] bg-gradient-to-b from-[#8585d5] to-[#6767b7] px-1.5 shadow-[inset_0_-2.67px_1px_0_#00000019] md:mr-0"
                                        shape="round"
                                        variant={null}
                                    >
                                        <Img src="images/img_component_43_message_white.svg" />
                                    </Button>
                                </div>
                                <Img src="images/img_refresh.png" alt="Refresh" className="mr02 h0[26px] object-cover md:mr-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

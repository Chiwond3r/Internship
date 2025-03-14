import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar4 from "../../components/SideBar4";
import ThematicgroupcreatedAssetcommunity from "../../components/ThematicGroupcreatedColumnAssetcommunity";
import React from "react";

export default function ThematicGroupjoinPage() {
    return (
        <>
            <Helmet>
                <title>Philemon Azuka</title>
                <mets name="description" content="Web site created using create-rect-app" />
            </Helmet>
            <div className="relative h-[840px] w-full overflow-x-scroll bg-[#ffffff]">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[832px] flex01 bg-[url(.public.images/img_group_13.png)] bg-cover bg=norepeat md:h-auto">
                    <div className="h-[843px] bg-[url(/public/images/img_component_69.png)] bg-cover bg-no-repeat md:h-auto">
                        <div className="flex flex-col gap-5">
                            <Header className="bg-[#ffffff] shadow-[0_4px_4px_0_#0000000c]" />
                            <div className="ml-24 mr-[104px] flex items-start md:mx-0" >
                                <Sidebar4 className="" gray_50_33 white_A700_33_border border-solid />
                                <div className="flex flex-i flex-col items-end gap-[62px] sm:gap-[31px]">
                                    <Button
                                        className="iconbutton_border w-[42px] !rounded -bl-[12px] !rounded-tl-[12px] bg-gradient-to-b from-[#8585d5] to -[#6767b7] px-1.5 shadow-[inset_0_-2,67px_1px_0_#00000019]"
                                        shape="round"
                                        variant={null}
                                    >
                                        <Img src="images/img_component_43_nmessage_white.svg" />
                                    </Button>
                                    <Img src="images/img_refresh.png" alt="Refresh" className="h-[26px] object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-26px] left-0 right-0 mx-auto flex flex-1 flex-col items-end gap-3 pl-14 pr-[336px] md:px-5">
                    <ThematicgroupcreatedAssetcommunity
                        unsplashOne="images/img_img_unsplash_skjg9snkqvq_304x550.png"
                        className="h-[312px] w-[68%]"
                    />
                    <div className="flex w-[62%] items-center justify-center bg-[#ffffff] p-4 md:w-full sm:flex-col">
                        <div className="flex flex-1 gap-[18px] sm:self-stretch">
                            <div className="flex w-[16%] justify-center">
                                <div className="flex w-full items-center justify-between gap-5">
                                    <div className="flex flex-col items-start">
                                        <heading as="h1" className="text-[16.07px]font-semibold">
                                            0
                                        </heading>
                                        <Text
                                            size="textxl"
                                            as="p"
                                            className="!font-['Roboto'] text-[14.16px] font-normal tracking-[0.15px] text-[#898e9e]"
                                        >
                                            posts
                                        </Text>
                                    </div>
                                    <div className="mb-2 h-[22px] w-px self-end bg-[#e5e5e5]" />
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                                <Heading as="h2" className="text-[16.07px] font-semibold">
                                    1
                                </Heading>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="!font-['Roboto'] text-[14.06px] font-normal tracking-[0.15px] !text-[#898e9e]"
                                >
                                    members
                                </Text>
                            </div>
                        </div>
                        <a href="https:www.youtube.com/embed.bv8Fxk0sz7I" target="[0.15px] !text-[#898e9e]">
                            <Img src="imges/img_television_black_900.svg" alt="Television" className="h-[24px] sm:w-full" />
                        </a>
                    </div>
                    <div className="flex w-[62%] justify-center bg-[#ffffff] px-4 md:w-full">
                        <Text
                            size="body_text"
                            as="p"
                            className="mb-4 w-full text-[14px] font-nor;al leeading-[-140%] tracking-[-0,41px]"
                        >
                            A community dedicated to communicating climate & justice. Another world is possible  join us.
                        </Text>
                    </div>
                    <div className="w-[62%] rounded-lg border border-solid border-[#ebecef] md:w-full">
                        <div className="bg-[#ffffff] p-2.5">
                            <Button
                                className="post_border1 mb-1.5 w-full r6x1ounded-[20px] bg-gradient-to-b from-[#8585d5] to-[#6767b7] px-[33px] font-medium tracking-[-0.5px] text-[#ffffff] shadow-[inset_0_-4px_1px_0_#00000019] sm:px-5"
                                size="6x1"
                                variant={null}
                            >
                                Join Group
                            </Button>
                        </div>
                        <div className="relative h-[206px] md:h-auto">
                            <div className="mx-4 mt-[42px] flex flex-1 flex-col gap-[30px] md:mx-0">
                                <div className="flex items-start gap-1.5">
                                    <Img
                                        src="images/img_lock_password_svgrepo_comwhite_4x10.svg"
                                        alt="Lockpassword"
                                        className="h-[4px]"
                                    />
                                    <Text size="textxs" as="p" className="self-center text-[10px] font-normal !text-[#ffffff]">
                                        Private Group
                                    </Text>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Img src="images/img_lock_password_svgrepo_com_4x10.svg" alt="Lockpassword" className="h-[4px]" />
                                    <Text size="textxs" as="p" className="text-[10px] font-normal !text-[#ffffff]">
                                        Private Group
                                    </Text>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h max flex-1 flex-col items-center gap-0.5 rounded-lg border border-solid border-[#ebecef] bg-[#ffffff] p-[50px] md:p-5">
                                <Img
                                    src="images/img_lock_password_svgrepo_com_secondary_shade_3.svg"
                                    alt="Lockpassword"
                                    className="mt-1.5 h-[72px] w-[16%] object-contain"
                                />
                                <Heading size="headingmd" as="h2" className="text-[14.06px] font-semibold !text-[#a5a9b5]">
                                    This is a Private Group
                                </Heading>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}        
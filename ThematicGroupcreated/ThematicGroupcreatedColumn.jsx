import { Heading, Img, Button, Input, Text } from "../../components";
import ThematicGroupcreatedAssetcommunity from "../../components/ThematicGroupcreatedAssetcommunity";
import React from "react";

export default function ThematicGroupcreatedColumn() {
    return (
        <div className="mb-4 flex w-[62%] flex-col gap-3 md:w-full">
            <div className="flex flex-col gap-3">
                <div className="rounded-lg border border-solid border-[#ebecef]">
                    <ThematicGroupcreatedAssetcommunity className="h-[312px]" />
                    <div>
                        <div className="flex items-center justify-center bg-[#ffffff] p-4 sm:flex-col">
                            <div className="flex flex-1 gap-[18px] sm:self-stretch">
                                <div className="flex w-[16%] justify-center">
                                    <div className="flex w-full items-center justify-between gap-5">
                                        <div className="flex flex-col items-start">
                                            <Heading as="h1" className="text-[16.07px] font-semibold">
                                                0
                                            </Heading>
                                            <Text
                                                size="body_text"
                                                as="p"
                                                className="text-[14px] font-normal tracking-[-0.41px] !text-[#898e9e]"
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
                                    <Text size="body_text" as="p" className="text-[14px] font-normal tracking-[-0.41px] !text-[#898e9e]">
                                        members
                                    </Text>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <Img src="images/img_television_black_900.svg" alt="Television" className="h-[24px] sm:w-full" />
                            </a>
                        </div>
                        <div className="bg-[#ffffff] px-4">
                            <Text size="body_text" as="p" className="mb-4 text-[14px] font-normal tracking-[-0.41px]">
                                A community dedicated to communicating climate & justice. Another world is possible. Join us.
                            </Text>
                        </div>
                        <div className="bg-[#ffffff] p-2.5">
                            <Button
                                color="secondary_shade_3"
                                size="6x1"
                                className="mb-1.5 w-full rounded !border px-[33px] font-semibold tracking-[-0.24px] sm:px-5"
                            >
                                Edit profile
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mr-1 flex items-start justify-between gap-5 rounded-md border border-solid border-[#ebecef] bg-[#ffffff] px-2.5 py-3.5 md:mr-0 sm:flex-col">
                    <div className="flex flex-col justify-center rounded-[18px] bg-[#f253f7] sm:px-5">
                        <Img
                            src="images/img_581.png"
                            alt="Image"
                            className="h-[38px] rounded-tl-[18px] object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-2.5 self-center sm:self-stretch">
                        <Input
                            color="white"
                            size="xl"
                            shape="round"
                            name="placeholder"
                            placeholder={`What's going on...`}
                            className="rounded border border-solid border-[#ebecef] px-2.5 tracking-[-0.41px]"
                        />
                        <div className="flex items-center justify-center">
                            <div className="flex flex-1 gap-[9px]">
                                <Img src="images/img_user.svg" alt="User" className="h-[30px]" />
                                <Img src="images/img_clock.svg" alt="Clock" className="h-[30px]" />
                                <Img src="images/img_attach.svg" alt="Attach" className="h-[30px]" />
                            </div>
                            <Button
                                className="post_border1 min-w-[64px] rounded-[20px] bg-gradient-to-b from-[#8585d5] to-[#6767b7] px-[15px] font-medium tracking-[-0.50px] text-[#ffffff] shadow-[inset_0_-4px_1px_0_#00000019]"
                                size="6x1"
                                variant={null}
                            >
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-1 flex flex-col items-center justify-center gap-2.5 rounded-md border-[0.95px] border-solid border-[#ebecef] bg-[#ffffff] p-[54px] md:mr-0 md:p-5">
                <Img
                    src="images/img_settings_blue_gray_100_02.svg"
                    alt="Settings"
                    className="h-[64px] w-[14%] object-contain"
                />
                <Heading size="web_16_title" as="h3" className="text-[16px] font-semibold !text-[#a5a9b5]">
                    Your board is empty
                </Heading>
            </div>
        </div>
    )
}
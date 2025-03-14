import { Helmet } from "react-helmet";
import { Img, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar4 from "../../components/SideBar4";
import ThematicgroupcreatedColumn from "./ThematicGroupcreatedColumn";
import React from "react";

export default function ThematicGroupcreatedPage() {
    return (
        <>
            <Helmet>
                <title>Philemon Application</title>
                <meta name="description" content="Web site created using creat-react-app" />
            </Helmet>
            <div className="relative h-[1022px] w-full overflow-x-scroll bg-[#ffffff]">
                <div className="absloute left-0 right-0 top-0 mx-auto h-[832px] flex-1 bg-[url(/public/images/img_group_13.png)] bg-cover bg-no-repeat md:h-auto">
                    <div className="h-[832px] bg-[url(/public/images/img_component_69.png)] bg-cover bg-no-repeat md:h-auto">
                        <div className="flex flex-col gap-5">
                            <Header className="bg-[#ffffff] shadow-[0_4px_4px_0#0000000c]" />
                            <div className="ml-24 mr-[104px] flex items-start md:mx-0">
                                <Sidebar4 className="gray_50_33white_Q700_33_border border-solid" />
                                <div className="flex flex-1 flex=col items-end gap-[62px] sm:gap-[31px]">
                                    <Button
                                        className="iconbutton_birder w-[42px] !rounded-bl-[12px] !rounded-tl-[12px] bg-gradient-to-b from-[#8585d5] to-[#6767b7] px-1.5 shadow-[inset_0_-2.67px_1px_0_#00000019]"
                                        shape="round"
                                        variant={null}
                                    >
                                        <Img src="images/img_component_43_message_white.svg" />
                                    </Button>
                                    <Img src="images/img_img_refresh.png" alt="Refresh" className="h-[26px] object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[6%] left-0 right-0 mx-auto flex flex-1 flex-col items-end pl-14 pr-[336px] md:px-5">
                    <ThematicgroupcreatedColumn />
                </div>
            </div>
        </>
    );
}
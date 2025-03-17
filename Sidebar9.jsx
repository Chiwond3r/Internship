import { Img, Text, Heading } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar9({ ...props }) {
    const [collapsed, setCollapsed] = React.useState(false);

    //use this function to collapse/expand the sidebar
    //function collapsed() {
    //    setCollapsed(!collapsed)
    //}

    return (
        <Sidebar
            {...props}
            width="1282px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className={`${props.className} flex flex-col h-screen pt-[18px] top-0 px-24 md:px-5 bg-[#ffffff] shadow-[1.2px_0_#0000000f] !sticky overflow-auto`}
        >
            <div className="container-md self-stretch">
                <div className="relative z-[1] px-1.5">
                    <div>
                        <div className="flex flex-col items-end gap-2.5">
                            <div className="flex w-[72%] bg-[#8787cb] px-5 py-[18px] md:w-full">
                                <Heading
                                    size="header__16px__text"
                                    as="p"
                                    className="text-[16px] font-medium traacking-[-0.50px] !text-[#ffffff]"
                                >
                                    cookies
                                </Heading>
                            </div>
                            <Text
                                size="body_text"
                                as="p"
                                className="mb-[27-px] mr-[22px] q-[70%] text-[14px] font-normal leading-[140%] tracking-[-0.141px] !text-[#3a3a3a] md:mr-0 md:w-full"
                            >
                                <span>
                                    <>
                                        Last updated November 19, 2023
                                        <br />
                                        This Cookie Policy explains how Better Women Better World, Inc ("Company," "we,"
                                        "us," and "our") uses cookies and similar technologies to recognize you when you
                                        visit our website at&nbsp;
                                    </>
                                </span>
                                <span>
                                    <>
                                        https://bw2club.com ("Website"). It explains what these technologies are and why we use
                                        them, as well as your rights to control our use of them.
                                        <br />
                                        What are cookies?
                                        <br />
                                        Cookies are small data files that are placed on your computer when you visit a website. Cookies are
                                        widely used by website owners in order to make their websites work, or to work efficiently, as
                                        well as to provide reporting information.
                                        <br />
                                        Cookies set by the website owner (in this case, Better Women Better World, Inc) are called
                                        "first-party cookies." Cookies set by parties other than the website's owner are called
                                        "third-party cookies." Third-party cookies enable third-party features or functionality to
                                        be provided on or through the website and only for the desktop users (e.g., advertising,
                                        interactive content, and analytics). The parties that set these third-party cookies can recognize
                                        your computer both when it visits the website in question and also when it visits certain other
                                        websites.
                                        <br />
                                        Why do we use cookies?
                                        <br />
                                        We use first- and third-party cookies for several reasons. Some cookies are required for technical
                                        reasons in order for our website to operate, and we refer to these as "essential" or
                                        "strictly necessary" cookies. Other cookies enable us to track and target the
                                        interests of our users to enhance the experience on our online properties (these cookies are
                                        implemented only on desktop users). Third parties serve cookies through our website for advertising,
                                        analytics, and other purposes. This is described in more detail below.
                                    </>
                                </span>
                            </Text>
                        </div>
                    </div>
                </div>
                <Menu
                    menuItemsStyles={{
                        button: {
                            padding: "14px",
                            color: "#292b32",
                            fontWeight: 400,
                            fontSize: "16px",
                            gap: "16px",
                            [`&:hover, &.ps-active`]: { backgroundColor: "#d9e5fc4c !important" },
                        },
                    }}
                    className="relative mb-[322px] mt-[-700px] flex flex-col items-center"
                >
                    <div className="flex w-[26%] items-start justify-center md:w-full md:flex-col">
                        <div className="mb-[352px] flex w-full flex-col items-center gap-3 px-14 md:px-5">
                            <div className="flex w-[48%] flex-col gap-3 md:w-full">
                                <MenuItem
                                    Icon={
                                        <Img src="images/img_gavel_svgrepo_com1.svg" alt="Gavelsvgrepo" className="h-[36px] w-[36px]" />
                                    }
                                    suffix={
                                        <div className="flex w-[18%] flex-col self-and text-[16px] font-medium tracking-[-0.50px] text-[#ffffff]">
                                            Cookies
                                        </div>
                                    }
                                >
                                    Terms and Conditions
                                </MenuItem>
                                <MenuItem
                                    icon={
                                        <Img
                                            src="images/img_contact_message_svgrepo_com.svg"
                                            alt="Contactmessage"
                                            className="h-[30px] w-[20px]"
                                        />
                                    }
                                >
                                    Contact us
                                </MenuItem>
                                <MenuItem
                                    icon={
                                        <Img
                                            src="images/img_privacy_tips_svgrepo_com.svg"
                                            alt="Privacytips"
                                            className="h-[20px] w-[20px]"
                                        />
                                    }
                                >
                                    Privacy Policy
                                </MenuItem>
                                <MenuItem
                                    icon={
                                        <Img src="images/img_cookies_svgrepo_com.svg" alt="Cookiessvgrepo" className="h-[22px] w-[22px]" />
                                    }
                                >
                                    Cookies
                                </MenuItem>
                            </div>
                            <div className="flex w-[48%] flex-col gap-3 md:w-full">
                                <MenuItem
                                    icon={
                                        <Img
                                            src="images/img_help_outline_svgrepo_com.svg"
                                            alt="Helpoutline"
                                            className="h-[20px] w-[20px]"
                                        />
                                    }
                                >
                                    FAQ
                                </MenuItem>
                                <MenuItem
                                    icon={
                                        <Img src="images/img_settings_blue_gray_900.svg" alt="Settings" className="h-[16px] w-[16px]" />
                                    }
                                >
                                    Log Out
                                </MenuItem>
                            </div>
                        </div>
                        <div className="h-[156px] w-[156px] self-end rounded-[78px] bg-gradient-to-b from-[#ffffff] to-[#7171c1] shadow-[10.84px_7.74px_15px_0_#c171b18c]" />
                    </div>
                </Menu >
            </div >
        </Sidebar >
    );
}
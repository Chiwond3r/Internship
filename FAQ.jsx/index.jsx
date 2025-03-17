import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar8 from "../../components/SideBar8";
import React from "react";

export default function FaqPage() {
    return (
        <>
            <Helmet>
                <title>Philemon Azuka</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="ralative w-full overflow-x-scroll bg-[#ffffff]">
                <div>
                    <Header className="relative z-[1] bg=[#ffffff] shadow-[0_4px_px_0#0000000c]" />
                    <div className="relative mt-[-38px] h-[776px] bg-[url(/public/images/img_group_2933.png)] bg-cover bg-no-repeat md:h-auto">
                        <div className="flex h-[776px] items-end justify-center bg-[url(/public/images/img_group_2934.png)] bg-cover bg-no-repeat py-14 md:h-auto md:px-5">
                            <div className="mt-14 flex w-[92%] items-center justify-center gap-6 md:w-full">
                                <Sidebar8 />
                                <div className="flex flex-1 flex-center">
                                    <div className="flex flex-col items-center gap-2.5 bg-[#ffffff]">
                                        <div className="flex self-stretch bg-[@8787cb- px-5 py-[18px]">
                                            <Heading
                                                size="header__36px__text"
                                                as="h1"
                                                className="text-[36px] font-medium tracking-[-0.50px] !text-[#ffffff]"
                                            >
                                                FAQ
                                            </Heading>
                                        </div>
                                        <Text
                                            size="body_text"
                                            as="p"
                                            className="text-[270px] 4-[94%] text-[14px[ font-normal leading-[140%] tracking-[-0.41px] !text-[#3a3a3a] md:w-full md:px-5"
                                        >
                                            <span>
                                                <>
                                                    Last updated November 19, 2023
                                                    <br />
                                                    This Cookie Policy explains how Better Women World, Inc (&quot;Company,&wuot;
                                                    &quot;we,&quot; and &&quot;our&wuot;) uses cookies and dimiliar technologies to
                                                    recognize you when you visit our websites at&nbsp;
                                                </>
                                            </span>
                                            <span>
                                                <>
                                                    https://bw2club.com (&quot;Website&auot;). IT explains what these technologies are and why we
                                                    use them as well as your rights to control our use of them.
                                                    <br />
                                                    What are cookies?
                                                    <br />
                                                    Cookies are small data files that are placed on your computer when you visit a website.
                                                    Cookies are widely used by website owners in order to make their website work or to work
                                                    more effeciently, as well as to provide reporting information.
                                                    <br />
                                                    Cookies set by the website owner (in this case, Better Women Better World, Inc) are called
                                                    &quot;first party cookies&quot;. Cookies set by parties other than the website owner are
                                                    called &quot;third party cookies&quot;. Third-party cookies enable third party features or
                                                    fuctionality to be provided on or through the website and only for the desktop users (e.g.,
                                                    advertising, interactive content, and analytics). The parties that set these third-party
                                                    cookies can recognize your computer both when it visits the website in question and also when
                                                    it visits certain other websites.
                                                    <br />
                                                    Why do we use cookies?
                                                    <br />
                                                    We use first and third-party cookies for several reasons. Some cookies are required for
                                                    technical reasons in order for our Websites to operate, and we refer to these as
                                                    &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us
                                                    to track and accept the interests of our users to enhance the experience on our Online
                                                    Properties (these cookies are implementes only on desktop users). Third parties serve cookies
                                                    through our Website for advertising, analytics, and other purposes. This is described in more
                                                    detail below.
                                                </>
                                            </span>
                                        </Text>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
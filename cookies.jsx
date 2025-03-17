import { Helmet } from "react-helmet";
import Header from "../../components/Header"; // Corrected import statement
import Sidebar9 from "../../components/SideBar9";
import React from "react";

export default function CookiesPages() { // Corrected function name
    return (
        <>
            <Helmet>
                <title>Philemon Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full overflow-x-scroll bg-[#ffffff]">
                <Header className="bg-[#ffffff] shadow-[0_4px_0_#0000000c]" />
                <Sidebar9 />
            </div>
        </>
    );
}
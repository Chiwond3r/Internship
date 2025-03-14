import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar4({ ...props }) {
    const [collasped, setColapsed] = React.useState(false);

    //use this function to collapse/expand the sidebar
    //function collapsed() {
    //    setCollapsed(!collapsed)
    //}

    return (
        <Sidebar
            {...props}
            width="280px !important"
            collapsedWidth="80px !important"
            collasped={collapsed}
            className={`${props.className} flex flex-col h-screen pt-[50px] top-0 nd:pt-5 bg-[#fff2f966] !sticky overflow-auto`}
        >
            <Menu
                menuItemStyle={{
                    button: {
                        padding: "16px",
                        gap: "10px",
                        color: "#292b32",
                        fontWeight: 600,
                        fontSize: "16px",
                    },
                }}
                rootStyles={{ ["&>ul"]: { gap: "0.18px" } }}
                className="flex w-full flex-col self-stretch"
            >
                <MenuItem
                    icon={<Img src="images/img_gender_female_1.svg" alt="Genderfemaleone" className="h-[28px] w-[28px]" />}
                >
                    HerPower
                </MenuItem>
                <MenuItem icon={<Img src="images/img_users_three_2.svg" alt="Usersthreetwo" className="h-[28px] w-[28px]" />}>
                    Thematic Group
                </MenuItem>
                <MenuItem icon={<Img src="images/img_calender_1.svg" alt="Calendarone" className="h-[28px] w-[28px]" />}>
                    Events
                </MenuItem>
                <MenuItem icon={<Img src="images/img_trophy_2.svg" alt="Trophytwo" className="h-[28px] w-[28px]" />}>
                    Competitions
                </MenuItem>
                <MenuItem icon={<Img src="images/img_leaf_2.svg" alt="Leaftwo" className="h-[28px] w-[28px]" />}>
                    Initiatives
                </MenuItem>
                <MenuItem icon={<Img src="images/img_gear_1.svg" alt="Gearone" className="h-[28px] w-[28px]" />}>
                    EmpowerSphere
                </MenuItem>
                <MenuItem icon={<Img src="images/img_gear_1_black_900.svg" alt="Gearone" className="h-[28px] w-[28px]" />}>
                    Settings & Privacy
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}        
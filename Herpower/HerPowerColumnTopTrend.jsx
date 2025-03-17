import { Heading } from "../../components";
import UserProfileCard from "../../components/UserProfileCard";
import React, { Suspense } from "react";

const data = [
    {
        userImage: "images/img_rectangle_761.png",
        userId: "01",
        userTitle: "Sisterhood",
        userCategory: "K-POP",
        prop: ".",
        userMemberCount: "15k members",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis scelerisque pellentesque.",
    },
    {
        userImage: "images/img_rectangle_761_126x98.png",
        userId: "02",
        userTitle: "Sisterhood",
        userCategory: "Movies",
        prop: ".",
        userMemberCount: "98 members",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis scelerisque pellentesque.",
    },
    {
        userImage: "images/img_rectangle_761_1.png",
        userId: "03",
        userTitle: "Sisterhood",
        userCategory: "Lifestyle",
        prop: ".",
        userMemberCount: "98 members",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis scelerisque pellentesque.",
    },
];

export default function HerPowerColumnTopTrend() {
    return (
        <div className="flex flex-col items-start gap-4 self-stretch px-5">
            <Heading size="header__16px__text" as="h2" className="text-[16px] font-medium  tracking-[-0.50px]">
                Top trending
            </Heading>
            <div className="grid grid-cols-2 gap-4 self-stretch md:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                        <UserProfileCard {...d} key={"gridone" + index} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
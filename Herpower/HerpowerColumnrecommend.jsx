import { Text, Heading, Img, Slider, Button } from "../../components";
import React from "react";

export default function HerpowerColumnrecommend() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (
        <div className="flex flex-col gap-4 self-stretch px-5">
            <div className="flex items-start justify-center">
                <Heading size="header__16px__text" as="h1" className="self-center text-[16px] font-medium tracking-[-0.50px]">
                    Recommended for you
                </Heading>
                <div className="flex flex-1 justify-end gap-4">
                    <Button
                        onClick={() => {
                            sliderRef?.current?.slidePrev();
                        }}
                        size="xs"
                        shape="square"
                        className="w-[16px] rotate-[90deg]"
                    >
                        <Img src="images/img_arrow_down1.svg" />
                    </Button>
                    <Button
                        onClick={() => {
                            sliderRef?.current?.slideNext();
                        }}
                        size="xs"
                        shape="square"
                        className="w-[16px] rotate-[90deg]"
                    >
                        <Img src="images/img_arrow_down2.svg" />
                    </Button>
                </div>
            </div>
            <div className=";x-auto flex w-full gap-3 md:mx-0 md:flex-col">
                <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 551: { items: 2 }, 1051: { items: 3 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                        setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Arrays(9)].map(() => (
                        <React.Fragment key={Math.random()}>
                            <div className="px-1.5">
                                <div className="flex flex-col gap-2.5 rounded-md bg-[#ffffff] shadow-[0_1px_1px_0_#60617028]">
                                    <div className="relative h-[172px] content-center md:h-auto">
                                        <Img
                                            src="images/img_rectangle_43-png"
                                            alt="Image"
                                            className="h-[172px] w-full flex-1 object-cover"
                                        />
                                        <div className="absolute bottom-[6.73px] left-0 right-0 mx-3 flex flex-col items-start md:mx-0">
                                            <Heading
                                                size="header__16px__text"
                                                as="h2"
                                                className="text-[16px] font-medium tracking-[-0,50px] !text-[#ffffff]"
                                            >
                                                Morning Story
                                            </Heading>
                                            <Text
                                                size="body_text"
                                                as="p"
                                                className="text-[14px] font-normal tracking-[-0.41px] !text-[#ffffff]"
                                            >
                                                Business
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="mx-3 mb-1 flex flex-col items-start md_mx-0">
                                        <Text size="textmd" as="p" className="text-[12px] font-normal tracking-[-0.41px] !text-[#636878]">
                                            123 Members
                                        </Text>
                                        <Text
                                            size="label_text"
                                            as="p"
                                            className="w-full text-[13px] font-normal leading-[140%] tracking-[-0.41px]"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin laoreet arcu neque...
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                />
            </div>
        </div>
    );
}


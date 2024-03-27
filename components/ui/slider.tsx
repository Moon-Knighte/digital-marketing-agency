import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ minWidth: 768 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplayspeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };
  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={"/images/small.webp"}
              alt="image-one"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;

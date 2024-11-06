import Glide from "@glidejs/glide";

import React, { useEffect } from "react";

import NanoId from "@/utils/nanoId";
import SubPostCard from "../cards/SubPostCard";
import Heading from "../heading/Heading";
import NextPrev from "../nextPrev/NextPrev";

const SectionSliderPosts = ({
  heading,
  subHeading,
  className = "",
  posts,
  postCardName = "card4",
  sliderStype = "style1",
  perView = 4,
  uniqueSliderClass,
}) => {
  const UNIQUE_CLASS = "SectionSliderPosts_" + NanoId(uniqueSliderClass);

  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    perView: perView,
    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        perView: perView - 1,
      },
      1023: {
        perView: perView - 2 || 1.2,
        gap: 20,
      },
      767: {
        perView: perView - 2 || 1.2,
        gap: 20,
      },
      639: {
        perView: 1.2,
        gap: 20,
      },
    },
  });

  useEffect(() => {
    if (!MY_GLIDE) return;
    MY_GLIDE.mount();
  }, [MY_GLIDE]);

  const getPostComponent = (item) => {
    switch (postCardName) {
      case "card1":
        return <SubPostCard post={item} />;

      default:
        return;
    }
  };

  const renderHeading = () => {
    if (sliderStype === "style1") {
      return (
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
      );
    } else {
      return (
        <Heading desc={subHeading} isCenter>
          {heading}
        </Heading>
      );
    }
  };

  return (
    <div className={`${className} overflow-hidden`}>
      <div className={`${UNIQUE_CLASS}`}>
        {renderHeading()}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides flex flex-wrap">
            {posts.map((item, index) => (
              <li
                key={index}
                className={`glide__slide h-auto ${
                  sliderStype === "style2" ? "pb-12 xl:pb-16" : ""
                }`}
              >
                {getPostComponent(item)}
              </li>
            ))}
          </ul>
        </div>
        {sliderStype === "style2" && (
          <NextPrev
            btnClassName="w-12 h-12"
            containerClassName="justify-center"
          />
        )}
      </div>
    </div>
  );
};

export default SectionSliderPosts;

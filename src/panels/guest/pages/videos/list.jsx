import BackgroundSection from "@/components/backgroundSection/BackgroundSection";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import CardAuthor from "@/components/cards/CardAuthor";
import VideoCard from "@/components/cards/VideoCard";
import Page from "@/components/Page";
import ModalCategories from "@/components/pagePodcast/ModalCategories";
import ModalTags from "@/components/pagePodcast/ModalTags";
import ArchiveFilterListBox from "@/components/pagePodcast/PodcastFilterBox";
import Pagination from "@/components/Pagination/Pagination";
import SectionGridCategoryBox from "@/components/sectionGridCategoryBox/SectionGridCategoryBox";
import SliderNewAuthors from "@/components/sliderNewAuthors/SliderNewAuthors";
import { DEMO_AUTHORS } from "@/data/authors";
import { DEMO_POSTS_VIDEO } from "@/data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";

import React from "react";

const posts = DEMO_POSTS_VIDEO.filter((_, i) => i < 12);

const VideoList = ({ className = "" }) => {
  const PAGE_DATA = DEMO_CATEGORIES[2];

  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];

  return (
    <Page
      className={`nc-VideoList overflow-hidden ${className}`}
      data-nc-id="VideoList"
    >
      <div className="dark bg-neutral-900 dark:bg-transparent text-white">
        <div className="container py-16 lg:py-28  px-20">
          {/* HEADER */}
          <h2 className="inline-block align-middle text-5xl font-semibold md:text-6xl ">
            {PAGE_DATA.name}
          </h2>
          <span className="block mt-4 text-neutral-300">
            {PAGE_DATA.count} Videos
          </span>
          {/* ====================== END HEADER ====================== */}
          <div className="mt-16 flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex gap-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <VideoCard key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:gap-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        <SliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          uniqueSliderClass="VideoList"
        />

        {/* === SECTION 5 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary>Show me more</ButtonSecondary>
          </div>
        </div>

        {/* SUBCRIBES */}
        {/* <SectionSubscribe2 /> */}
      </div>
    </Page>
  );
};

export default VideoList;

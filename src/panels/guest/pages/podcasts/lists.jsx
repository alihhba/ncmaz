import BackgroundSection from "@/components/backgroundSection/BackgroundSection";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import PodcastCard from "@/components/cards/podcastCard/PodcastCard";
import PodcastListenCard from "@/components/cards/podcastCard/PodcastListenCard";
import ModalCategories from "@/components/pagePodcast/ModalCategories";
import ModalTags from "@/components/pagePodcast/ModalTags";
import ArchiveFilterListBox from "@/components/pagePodcast/PodcastFilterBox";
import Pagination from "@/components/Pagination/Pagination";
import SectionGridCategoryBox from "@/components/sectionGridCategoryBox/SectionGridCategoryBox";
import SliderNewAuthors from "@/components/sliderNewAuthors/SliderNewAuthors";
import { DEMO_AUTHORS } from "@/data/authors";
import { DEMO_POSTS_AUDIO } from "@/data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import React from "react";

// Tag and category have same data type - we will use one demo data
const posts = DEMO_POSTS_AUDIO.filter((_, i) => i < 12);

const PodcastLists = ({ className = "" }) => {
  const PAGE_DATA = DEMO_CATEGORIES[1];

  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];

  const renderSection = (sectionPosts) => {
    const loopPosts = sectionPosts.filter((_, i) => i > 2);

    return (
      <div className="mt-8 lg:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <PodcastCard post={sectionPosts[0]} />
        <PodcastCard post={sectionPosts[1]} />
        <PodcastCard post={sectionPosts[2]} />
        <div className="md:col-span-2 lg:col-span-3">
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 `}>
            {loopPosts.map((p) => (
              <PodcastListenCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PageArchiveAudio overflow-hidden ${className}`}
      data-nc-id="PageArchiveAudio"
    >
      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 lg:aspect-h-6 xl:aspect-h-5 2xl:aspect-h-4 overflow-hidden ">
          <div className="h-[400px]">
            <img
              src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle ms-3 text-5xl font-semibold md:text-7xl ">
              {PAGE_DATA.name}
            </h2>
            <span className="block mt-4 text-neutral-300">
              {PAGE_DATA.count} Audio articles
            </span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row px-2">
            <div className="flex items-center gap-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          {renderSection(posts.filter((_, i) => i < 19))}

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:gap-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>

        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        <div className="relative py-16 rounded-[25px] overflow-hidden">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary>Show me more</ButtonSecondary>
          </div>
        </div>

        {/* === SECTION 5 === */}
        <SliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          uniqueSliderClass="PageArchiveAudio"
        />

        {/* SUBCRIBES */}
        {/* <SectionSubscribe2 /> */}
      </div>
    </div>
  );
};

export default PodcastLists;

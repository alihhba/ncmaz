import musicWave from "@/assets/images/musicWave.png";
import ButtonPlayMusicRunningContainer from "@/components/buttonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer";
import CategoryBadgeList from "@/components/categoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "@/components/postCardLikeComment/PostCardLikeComment";
import PostCardSaveAction from "@/components/postCardSaveActrion/PostCardSaveAction";
import React from "react";
import { Link } from "react-router-dom";

const PodcastCard = ({
  className = "h-full",
  post,
  ratio = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
}) => {
  const { title, href, categories, desc, featuredImage, postType } = post;
  const IS_AUDIO = postType === "audio";

  const renderIcon = (state) => {
    if (!state) {
      return (
        <svg className="ms-0.5 w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
          ></path>
        </svg>
      );
    }

    return (
      <svg className=" w-9 h-9" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 6.75V17.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.75 6.75V17.25"
        ></path>
      </svg>
    );
  };

  const renderListenButtonDefault = (state) => {
    return (
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer`}
      >
        {renderIcon(state)}
      </div>
    );
  };

  return (
    <div
      className={`nc-PodcastCard relative flex flex-col ${className}`}
      data-nc-id="PodcastCard"
    >
      <Link
        to={href}
        className={`flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${ratio}`}
      >
        <img
          src={featuredImage}
          className="max-h-[300px] h-[300px] w-full object-cover"
        />
        <span className="bg-neutral-900 bg-opacity-30"></span>
      </Link>

      {/* ABSOLUTE */}
      <Link to={href} className="absolute inset-0"></Link>
      <span className="absolute top-3 inset-x-3">
        <CategoryBadgeList categories={categories} />
      </span>

      {/* MAIN CONTENT */}
      <div className="w-11/12 ms-auto transform -mt-32 ">
        <div
          className={`px-5 flex items-center gap-x-4 ${
            !IS_AUDIO ? "relative opacity-0 z-[-1]" : ""
          }`}
        >
          <div className={`flex-grow `}>
            <img src={musicWave} alt="musicWave" />
          </div>
          <ButtonPlayMusicRunningContainer
            post={post}
            renderDefaultBtn={() => renderListenButtonDefault()}
            renderPlayingBtn={() => renderListenButtonDefault("playing")}
            renderLoadingBtn={() => renderListenButtonDefault("loading")}
          />
        </div>
        <div className="p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-te-none flex flex-col flex-grow ">
          <h2 className="nc-card-title text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
            <Link to={href} className="line-clamp-1" title={title}>
              {title}
            </Link>
          </h2>
          <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5">
            <span className="line-clamp-2">{desc}</span>
          </span>
          <div className="flex items-end justify-between mt-auto gap-3 ">
            <PostCardLikeAndComment className="relative" postData={post} />
            <PostCardSaveAction className="relative" postData={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;

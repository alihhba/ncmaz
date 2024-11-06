import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryBadgeList from "../categoryBadgeList/CategoryBadgeList";
import PostCardMeta from "../postCardMeta/PostCardMeta";
import PostCardSaveAction from "../postCardSaveActrion/PostCardSaveAction";
import PostFeaturedMedia from "../postFeatureMedia/PostFeatureMedia";

const VideoCard = ({ className = "h-full", post }) => {
  const { href, categories } = post;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-VideoCard relative flex flex-col ${className}`}
      data-nc-id="VideoCard"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setOIsHover(false)}
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden ">
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>

        <Link
          to={href}
          className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
        ></Link>
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start gap-x-4">
        <CategoryBadgeList categories={categories} />
        <PostCardSaveAction postData={post} />
      </div>

      <div className="space-y-2.5 mt-4 px-4">
        <PostCardMeta className="leading-none" meta={post} />
      </div>
    </div>
  );
};

export default VideoCard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryBadgeList from "../categoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "../postCardLikeComment/PostCardLikeComment";
import PostCardMeta from "../postCardMeta/PostCardMeta";
import PostCardSaveAction from "../postCardSaveActrion/PostCardSaveAction";
import PostFeaturedMedia from "../postFeatureMedia/PostFeatureMedia";

const RelatedPostCard = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  const { title, href, categories, date } = post;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-RelatedPostCard relative flex flex-col group bg-white rounded-2xl hover:shadow-xl transition-all duration-200  ${className}`}
      data-nc-id="RelatedPostCard"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
      </div>
      <Link to={href} className="absolute inset-0"></Link>
      <span className="absolute top-3 inset-x-3 z-10">
        <CategoryBadgeList categories={categories} />
      </span>

      <div className="p-4 flex flex-col flex-grow space-y-3">
        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )}
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
          <Link to={href} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />
          <PostCardSaveAction className="relative" postData={post} />
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;

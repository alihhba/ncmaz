import React from "react";
import { Link } from "react-router-dom";
import CategoryBadgeList from "../categoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "../postCardLikeComment/PostCardLikeComment";
import PostCardSaveAction from "../postCardSaveActrion/PostCardSaveAction";
import PostFeaturedMedia from "../postFeatureMedia/PostFeatureMedia";
import PostTypeFeaturedIcon from "../postTypeFeaturedIcon/PostTypeFeaturedIcon";

const MoreAuthorCard = ({
  className = "h-full",
  ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
  post,
  hoverClass = "",
}) => {
  const { title, href, featuredImage, categories, author, date, postType } =
    post;

  const renderMeta = () => {
    return (
      <div className="inline-flex items-center text-xs text-neutral-300">
        <div className="block ">
          <h2 className="block text-lg font-semibold text-white line-clamp-2 ">
            <p className="line-clamp-2" title={title}>
              {title}
            </p>
          </h2>
          <Link to={author.href} className="flex mt-2.5 relative">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {author.displayName}
            </span>
            <span className="mx-[6px] font-medium">·</span>
            <span className="font-normal truncate">{date}</span>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-MoreAuthorCard relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="MoreAuthorCard"
    >
      <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        <PostCardLikeAndComment className="relative" postData={post} />
        <PostCardSaveAction className="relative" postData={post} />
      </div>
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      {postType === "audio" ? (
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} fullImage />
        </div>
      ) : (
        <Link to={href}>
          <img
            className="object-cover w-full h-[400px] rounded-3xl "
            src={featuredImage}
          />
          <PostTypeFeaturedIcon
            className="absolute top-3 left-3 group-hover:hidden"
            postType={postType}
            wrapSize="w-7 h-7"
            iconSize="w-4 h-4"
          />
          <span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Link>
      )}
      <Link
        to={href}
        className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
      ></Link>
      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
        <Link to={href} className="absolute inset-0"></Link>
        <div className="mb-3">
          <CategoryBadgeList categories={categories} />
        </div>
        {renderMeta()}
      </div>
    </div>
  );
};

export default MoreAuthorCard;

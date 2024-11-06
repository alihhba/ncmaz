import React from "react";
import BookmarkContainer from "../bookMarkContainer/BookMarkContainer";

const PostCardSaveAction = ({
  className = "",
  hidenReadingTime = false,
  classBgIcon,
  readingTime,
  postData,
}) => {
  const { bookmark, id } = postData;

  return (
    <div
      className={`nc-PostCardSaveAction flex items-center gap-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
      data-nc-id="PostCardSaveAction"
    >
      {!hidenReadingTime && !!readingTime && (
        <span>{readingTime} min read</span>
      )}

      <BookmarkContainer
        initBookmarked={bookmark.isBookmarked}
        containerClassName={classBgIcon}
        postId={id}
      />
    </div>
  );
};

export default PostCardSaveAction;

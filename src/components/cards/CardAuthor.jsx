import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";

const CardAuthor = ({
  className = "",
  author,
  readingTime,
  date,
  hoverReadingTime = true,
}) => {
  return (
    <Link
      to={author?.author?.href || author?.href}
      className={`nc-CardAuthor2 relative inline-flex items-center ${className}`}
    >
      <Avatar
        sizeClass="h-10 w-10 text-base me-3"
        containerClassName="flex-shrink-0 me-3"
        radius="rounded-full"
        imgUrl={author?.author?.avatar || author?.avatar}
        userName={author?.author?.displayName || author?.displayName}
      />
      <div>
        <h2
          className={`text-sm   text-neutral-300 hover:text-white font-medium`}
        >
          {author?.author?.displayName || author?.displayName}
        </h2>
        <span className={`flex items-center mt-1 text-xs  text-neutral-400`}>
          <span>{author?.date}</span>
          {author?.readingTime && (
            <>
              <span
                className={`text-white lg:inline mx-1 transition-opacity  ${
                  hoverReadingTime
                    ? "opacity-1 group-hover:opacity-100"
                    : "opacity-0"
                }`}
              >
                ·
              </span>
              <span
                className={`hidden lg:inline transition-opacity ${
                  hoverReadingTime
                    ? "opacity-1 group-hover:opacity-100"
                    : "opacity-0"
                }`}
              >
                {author.readingTime} min read
              </span>
            </>
          )}
        </span>
      </div>
    </Link>
  );
};

export default CardAuthor;

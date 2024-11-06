import CategoryBadge from "@/panels/guest/pages/books/components/CategoryBadge";
import React from "react";
import { Link } from "react-router-dom";
import CardAuthor from "./CardAuthor";

const SubPostCard = ({ post, className }) => {
  const { author, title, href, id, date, categories, readingTime } = post;

  return (
    <div
      className={`nc-Card5 relative p-5 group ${className}`}
      data-nc-id="Card5"
    >
      <Link to={href} className="absolute inset-0 rounded-lg"></Link>

      <div className="flex flex-col">
        <CategoryBadge categories={categories} />
        <h2
          className="block text-base font-semibold text-neutral-800 dark:text-neutral-300 my-4"
          title={title}
        >
          <Link to={href} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <CardAuthor
          className="relative mt-auto"
          readingTime={readingTime}
          author={author}
          date={date}
        />
      </div>
    </div>
  );
};

export default SubPostCard;

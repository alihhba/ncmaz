import React from "react";
import CategoryBadge from "./CategoryBadge";
import SingleTitle from "@/components/singlePage/Singletitle";
import CardAuthor from "@/components/cards/CardAuthor";
import SingleMetaAction from "@/components/singlePage/SingleMetaAction";

const BookPageSingleHeader = ({
  pageData,
  titleMainClass,
  hiddenDesc = false,
  className = "",
  metaActionStyle = "style1",
}) => {
  const { categories, desc, title, author } = pageData;

  return (
    <>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          <CategoryBadge itemClass="!px-3 me-3" categories={categories} />
          <SingleTitle mainClass={titleMainClass} title={title} />
          {!!desc && !hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {desc}
            </span>
          )}
          <div className="w-full border-b border-neutral-600 dark:border-neutral-800"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:gap-x-5">
            <CardAuthor author={pageData} />
            <SingleMetaAction meta={pageData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPageSingleHeader;

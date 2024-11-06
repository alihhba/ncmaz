import React from "react";
import CardAuthor from "../cards/CardAuthor";
import WidgetHeading from "../widtetHeading/WidgetHeading";

const WidgetAuthors = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  authors,
}) => {
  return (
    <div
      className={`nc-WidgetAuthors rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetAuthors"
    >
      <WidgetHeading
        title="🎭 Discover Authors"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          {authors.map((author) => (
            <CardAuthor
              className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              key={author.id}
              author={author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetAuthors;

import React from "react";
import CardCategory from "../cards/CardCategory";
import WidgetHeading from "../widtetHeading/WidgetHeading";

const WidgetCategories = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  categories,
}) => {
  return (
    <div
      className={`nc-WidgetCategories rounded-3xl  overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      <WidgetHeading
        title="✨ Trending topic"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          {categories.map((category) => (
            <CardCategory
              className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              key={category.id}
              taxonomy={category}
              size="normal"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;

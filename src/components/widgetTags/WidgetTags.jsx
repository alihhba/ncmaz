import React from "react";

import WidgetHeading from "../widtetHeading/WidgetHeading";
import Tag from "../tag/Tag";

const WidgetTags = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  tags,
}) => {
  return (
    <div
      className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetTags"
    >
      <WidgetHeading
        title="🏷 Discover more tags"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flex flex-wrap p-4 xl:p-5">
        {tags.map((tag) => (
          <Tag className="me-2 mb-2" key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;

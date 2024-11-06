import React from "react";
import PostSmallCard from "../cards/PostSmallCard";
import WidgetHeading from "../widtetHeading/WidgetHeading";

const WidgetPosts = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  posts,
}) => {
  return (
    <div
      className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetPosts"
    >
      <WidgetHeading
        title="🎯 Popular Posts"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {posts.map((post) => (
          <PostSmallCard
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetPosts;

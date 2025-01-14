import React from "react";
import RelatedPostCard from "../cards/RelatedPostCard";
import Heading from "../heading/Heading";
import { DEMO_POSTS } from "@/data/posts";
import MoreAuthorCard from "../cards/MoreAuthorCard";

// DEMO DATA
const demoRelated = DEMO_POSTS.filter((_, i) => i >= 10 && i < 14);
const demoMoreFromAuthor = DEMO_POSTS.filter((_, i) => i >= 14 && i < 18);

const SingleRelatedPosts = ({
  relatedPosts = demoRelated,
  moreFromAuthorPosts = demoMoreFromAuthor,
}) => {
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
      {/* RELATED  */}
      <div className="container">
        <div>
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            Related posts
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ">
            {relatedPosts.map((post) => (
              <RelatedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* MORE FROM AUTHOR */}
        <div className="mt-20">
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            More from author
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {moreFromAuthorPosts.map((post) => (
              <MoreAuthorCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedPosts;

import SubPostCard from "@/components/cards/SubPostCard";
import Icon from "@/components/Icon";
import React from "react";

const HeroSection = ({ subPosts }) => {
  const renderMain = () => {
    //   const { featuredImage, title, desc, href } = posts[0];
    return (
      <div className=" bg-gray-500 rounded-[1.9rem] md:h-[600px] ">
        <div className="flex gap-2  flex-col p-4 md:p-16 max-w-2xl">
          <p className="text-xl sm:text-3xl lg:text-4xl font-semibold  text-white">
            Lenovo’s smarter devices stoke professional passions
          </p>
          <p className="block text-sm sm:text-base text-neutral-300 mt-3 sm:mt-5">
            Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci
            vehicula condimentum.
          </p>
          <button className={"bg-white px-3 py-2 rounded-full w-fit mt-6"}>
            <div className="flex items-center gap-2 w-fit">
              <p className="w-fit min-w-fit text-xs  ">Read more</p>
              <span className="">
                <Icon
                  type={"arrowRight"}
                  className={"min-w-5 w-5 rotate-180"}
                />
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  };

  const renderSubPosts = () => {
    const posts = subPosts.filter((_, i) => i >= 1 && i < 4);

    return (
      <div className="lg:px-14 xl:px-20 2xl:px-28 grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 transform mt-6 md:-mt-20 ">
        {posts.map((post) => {
          return (
            <SubPostCard
              post={post}
              className={"bg-white dark:bg-neutral-800 shadow-2xl rounded-3xl"}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {renderMain()}
      <div className="">{renderSubPosts()}</div>
    </div>
  );
};

export default HeroSection;

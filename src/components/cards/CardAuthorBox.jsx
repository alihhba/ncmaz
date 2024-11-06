import { ArrowRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import classNames from "@/utils/classNames";

const CardAuthorBox2 = ({ className = "", author, imageClass }) => {
  const { displayName, href = "/", avatar, jobName, count, bgImage } = author;
  return (
    <NavLink
      to={href}
      className={`nc-CardAuthorBox2 flex flex-col overflow-hidden border rounded-[20px] transition-all duration-200 bg-white hover:shadow-lg ${className}`}
      data-nc-id="CardAuthorBox2"
    >
      <div className="relative flex-shrink-0 bg-gray-200 ">
        <div className={classNames('min-h-[200px]'  , imageClass)}>
          <img
            className="flex aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-full"
            src={bgImage}
          />
        </div>
        <div className="absolute top-3 inset-x-3 flex">
          <div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
            {count}{" "}
            <ArrowRight className="w-5 h-5 text-yellow-600 ms-3 rtl:rotate-180" />
          </div>
        </div>
      </div>

      <div className="-mt-10 pb-8 text-center z-10 bg-white">
        <Avatar
          containerClassName="ring-2 ring-white -mt-[40px]"
          sizeClass="w-16 h-16 text-2xl"
          radius="rounded-full"
          imgUrl={avatar}
          userName={displayName}
        />
        <div className="mt-3">
          <h2 className={`text-base font-medium`}>
            <span className="line-clamp-1">{displayName}</span>
          </h2>
          <span
            className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
          >
            @{jobName}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default CardAuthorBox2;

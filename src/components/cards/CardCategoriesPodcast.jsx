import React from "react";
import { NavLink } from "react-router-dom";

const CardCategoriesPodcast = ({
  className = "",
  size = "normal",
  taxonomy,
}) => {
  const { count, name, href = "/", thumbnail } = taxonomy;
  return (
    <NavLink
      to={href}
      className={`nc-CardCategoriesPodcast flex items-center ${className}`}
      data-nc-id="CardCategoriesPodcast"
    >
      <img
        className={`flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg me-4 overflow-hidden`}
        src={thumbnail}
      />
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {name}
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          {count} Articles
        </span>
      </div>
    </NavLink>
  );
};

export default CardCategoriesPodcast;

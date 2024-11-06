import classNames from "@/utils/classNames";
import React, { FC } from "react";

const SingleTitle = ({ mainClass, className, title }) => {
  return (
    <h1
      className={classNames(
        " max-w-4xl text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 ",
        className,
        mainClass
      )}
      title={title}
    >
      {title}
    </h1>
  );
};

export default SingleTitle;

import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

export const ResourceButtonReturn = ({
  label = "بازگشت",
  children,
  className,
  ...restProps
}) => {
  return (
    <Button
      className={classNames(
        "w-[6.5rem] relative inline-flex -ms-px items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:z-10",
        className
      )}
      {...restProps}
    >
      {children || (
        <>
          <Icon
            type="arrow-uturn-start"
            shouldFlipBasedOnDirection
            className="me-2.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>{label}</span>
        </>
      )}
    </Button>
  );
};

export default ResourceButtonReturn;

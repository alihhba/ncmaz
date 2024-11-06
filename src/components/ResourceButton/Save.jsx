import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

export const ResourceButtonSave = ({
  label = "ذخیره",
  children,
  className,
  ...restProps
}) => {
  return (
    <Button
      className={classNames(
        "w-[6.5rem] relative inline-flex -ms-px items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-green-500 hover:bg-gray-50 focus:z-10",
        className
      )}
      {...restProps}
    >
      {children || (
        <>
          <Icon type="check" className="me-2.5 h-5 w-5" aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </Button>
  );
};

export default ResourceButtonSave;

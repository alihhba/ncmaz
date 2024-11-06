import React from "react";
import classNames from "@/utils/classNames";

export const Button = ({
  type = "default",
  htmlType = "button",
  component = "button",
  children,
  className,
  ...restProps
}) => {
  const Component = component;

  const types = {
    default: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    primary:
      "border-transparent bg-primary-600 text-white hover:bg-primary-700",
  };

  return (
    <Component
      className={classNames(
        "w-[5.5rem] inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2",
        types[type],
        className
      )}
      {...restProps}
      type={htmlType}
    >
      {children}
    </Component>
  );
};

export default Button;

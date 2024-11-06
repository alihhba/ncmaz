import React from "react";
import Button from "./Button";

const ButtonPrimary = ({ className = "", ...args }) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-600 hover:bg-primary-700 hover:text-neutral-50 text-neutral-100 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;

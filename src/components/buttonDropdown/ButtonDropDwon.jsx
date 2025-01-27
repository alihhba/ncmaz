import { ChevronDown } from "lucide-react";
import React from "react";
import Button from "../Button/Button";

const ButtonDropdown = ({ translate, children, ...args }) => {
  return (
    <Button
      className="text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700"
      sizeClass="px-4 py-2 sm:py-2.5"
      fontSize="text-sm"
      translate="hover:border-neutral-300 w-full justify-between"
      {...args}
    >
      {children}
      <ChevronDown
        className="w-4 h-4 ms-2 -me-1 opacity-70"
        aria-hidden="true"
      />
    </Button>
  );
};

export default ButtonDropdown;

import React from "react";

import twFocusClass from "@/utils/twFocusClass";
import { X } from "lucide-react";

const ButtonClose = ({
  className = "",
  onClick = () => {},
  iconSize = "w-5 h-5",
}) => {
  return (
    <button
      className={
        `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ` +
        twFocusClass()
      }
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <X className={iconSize} />
    </button>
  );
};

export default ButtonClose;

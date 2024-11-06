import React from "react";

import Icon from "@/components/Icon";
import Link from "@/components/Link";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/Tooltip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavigationItem = ({
  slug,
  name,
  label,
  route,
  icon,
  current,
  className,
  withLabel,
  ...restProps
}) => {
  return (
    <Tooltip placement="left">
      <TooltipTrigger>
        <Link
          to={route}
          className={classNames(
            current
              ? "bg-primary-400 text-white"
              : "text-primary-400 hover:bg-primary-400/20",
            "flex-shrink-0 inline-flex items-center h-12 rounded-lg",
            withLabel ? "px-3" : "justify-center w-12",
            className
          )}
        >
          {icon && typeof icon !== "string" ? (
            <icon.type className="h-6 w-6" aria-hidden="true" {...icon.props} />
          ) : null}

          {icon && typeof icon === "string" ? (
            <Icon type={icon} className="h-6 w-6" aria-hidden="true" />
          ) : null}

          {withLabel ? <div className="ms-4">{label}</div> : null}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <div className="relative flex items-center">
          <div className="w-0 h-0 border-t-8 border-r-8 border-gray-900/90 rotate-45 -ms-1.5" />
          <div className="bg-gray-900/90 text-white rounded-lg py-2 px-4 text-xs">
            {label}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default NavigationItem;

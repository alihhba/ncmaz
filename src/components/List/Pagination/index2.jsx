import React from "react";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";

export const Pagination = ({
  current,
  total,
  onPageChange,
  span = 3,
  className,
  ...restProps
}) => {
  const hasNext = current < total;
  const hasPrev = current > 1;

  const items = [];

  items.push({
    type: "page",
    number: 1,
  });

  if (current > 4) {
    items.push({
      type: "gap",
    });
  }

  for (
    let i = Math.max(2, current - 2);
    i <= Math.min(current + 2, total - 1);
    i++
  ) {
    items.push({
      type: "page",
      number: i,
    });
  }

  if (total - current > 3) {
    items.push({
      type: "gap",
    });
  }

  items.push({
    type: "page",
    number: total,
  });

  const renderGap = () => (
    <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
      ...
    </span>
  );

  const renderItem = ({ number }) => {
    const isCurrent = number === current;

    return (
      <a
        href="#"
        className={classNames(
          "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium",
          isCurrent
            ? "border-indigo-500 text-indigo-600"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        )}
        aria-current={isCurrent ? "page" : "false"}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(number);
        }}
      >
        <PersianNumber>{number}</PersianNumber>
      </a>
    );
  };

  const renderPrev = () => {
    return (
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent pt-4 pe-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        aria-disabled={hasPrev ? "false" : "true"}
        onClick={(e) => {
          e.preventDefault();
          if (hasPrev) {
            onPageChange(current - 1);
          }
        }}
      >
        {/*<ArrowLongLeftIcon className="me-3 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
        قبلی
      </a>
    );
  };

  const renderNext = () => {
    return (
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent pt-4 ps-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        aria-disabled={hasNext ? "false" : "true"}
        onClick={(e) => {
          e.preventDefault();
          if (hasNext) {
            onPageChange(current + 1);
          }
        }}
      >
        بعدی
        {/*<ArrowLongRightIcon className="ms-3 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
      </a>
    );
  };

  return (
    <nav
      className={classNames(
        "flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-5",
        className
      )}
      {...restProps}
    >
      <div className="-mt-px flex w-0 flex-1">{renderPrev()}</div>
      <div className="hidden md:-mt-px md:flex">
        {items.map(({ type, ...restItemProps }) =>
          type === "page" ? renderItem(restItemProps) : renderGap()
        )}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">{renderNext()}</div>
    </nav>
  );
};

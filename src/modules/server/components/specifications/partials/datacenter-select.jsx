import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import { flushSync } from "react-dom";

const defaultItems = [
  {
    id: 1,
    title: "آسیاتک",
    location: "ایران",
    icon: "flag-ir",
    disabled: false,
  },
  {
    id: 2,
    title: "آمستردام",
    location: "به زودی",
    icon: "flag-nl",
    disabled: true,
  },
  {
    id: 3,
    title: "هرتزنر",
    location: "به زودی",
    icon: "flag-de",
    disabled: true,
  },
  {
    id: 4,
    title: "پاریس",
    location: "به زودی",
    icon: "flag-fr",
    disabled: true,
  },
];

const DatacenterSelect = ({
  value,
  items: providedItems = [],
  onChange: providedOnChange,
}) => {
  const items = defaultItems;
  providedItems.forEach(({ id: title }, index) => {
    items[index] = {
      ...items[index],
      title,
      disabled: false,
      location: "ایران",
    };
  });
  const [selectedMailingLists, setSelectedMailingLists] = useState({});

  useEffect(() => {
    setSelectedMailingLists(value || items[0]);
  }, [items, value]);

  useEffect(() => {
    if (typeof providedOnChange === "function") {
      providedOnChange(selectedMailingLists);
    }
  }, [selectedMailingLists]);

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      {/*<RadioGroup.Label className="text-base font-medium text-gray-900">برای ساخت سرور، ابتدا یک دیتاسنتر را انتخاب نمایید.</RadioGroup.Label>*/}

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 max-w-2xl mx-auto">
        {items.map((region) => (
          <RadioGroup.Option
            key={region.id}
            disabled={region.disabled}
            value={region}
            className={({ checked, active, disabled }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "border-primary-600 ring-2 ring-primary-600" : "",
                disabled ? "bg-gray-50" : "",
                "relative flex cursor-pointer rounded-lg border bg-white p-5 shadow-sm focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary-50 me-4 flex items-center justify-center overflow-hidden">
                    <Icon type={region.icon} className="w-auto h-full" />
                  </div>
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-md font-medium text-gray-900"
                    >
                      {region.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-600"
                    >
                      <Icon type="location" className="w-4 h-4 me-1 -me-1" />
                      <div>{region.location}</div>
                    </RadioGroup.Description>
                  </span>
                </span>
                {/*<Icon*/}
                {/*    type="check-circle"*/}
                {/*    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600')}*/}
                {/*    aria-hidden="true"*/}
                {/*/>*/}
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-primary-600" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default DatacenterSelect;

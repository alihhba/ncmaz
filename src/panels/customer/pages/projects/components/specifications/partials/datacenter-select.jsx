import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

const mailingLists = [
  {
    id: 1,
    title: "آسیاتک",
    location: "ایران",
    icon: "flag-ir",
    description: "Last message sent an hour ago",
    users: "621 users",
  },
  {
    id: 2,
    title: "آمستردام",
    location: "فرانسه",
    icon: "flag-fr",
    description: "Last message sent 2 weeks ago",
    users: "1200 users",
  },
  {
    id: 3,
    title: "هرتزنر",
    location: "آلمان",
    icon: "flag-de",
    description: "Last message sent 4 days ago",
    users: "2740 users",
  },
  {
    id: 4,
    title: "پاریس",
    location: "هلند",
    icon: "flag-nl",
    description: "Last message sent 4 days ago",
    users: "2740 users",
  },
];

const DatacenterSelect = () => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-medium text-gray-900">
        برای ساخت سرور، ابتدا یک دیتاسنتر را انتخاب نمایید.
      </RadioGroup.Label>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 max-w-2xl mx-auto">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "border-primary-600 ring-2 ring-primary-600" : "",
                "relative flex cursor-pointer rounded-lg border bg-white p-5 shadow-sm focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary-50 me-4 flex items-center justify-center overflow-hidden">
                    <Icon type={mailingList.icon} className="w-auto h-full" />
                  </div>
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-md font-medium text-gray-900"
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-600"
                    >
                      <Icon type="location" className="w-4 h-4 me-1 -me-1" />
                      <div>{mailingList.location}</div>
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

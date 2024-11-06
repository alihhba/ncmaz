import React, { Fragment, useState } from "react";
import classNames from "@/utils/classNames";
import { Listbox, Menu, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";

export const PageHeading = ({ children, className, ...restProps }) => {
  const publishingOptions = [
    {
      name: "Published",
      description: "This job posting can be viewed by anyone who has the link.",
      current: true,
    },
    {
      name: "Draft",
      description: "This job posting will no longer be publicly accessible.",
      current: false,
    },
  ];

  const [selected, setSelected] = useState({});

  return (
    <header className={classNames("bg-gray-50 py-8", className)} {...restProps}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
        <div className="min-w-0 flex-1">
          {/*<nav className="flex" aria-label="Breadcrumb">*/}
          {/*    <ol role="list" className="flex items-center space-s-4">*/}
          {/*        <li>*/}
          {/*            <div>*/}
          {/*                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">*/}
          {/*                    Jobs*/}
          {/*                </a>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <div className="flex items-center">*/}
          {/*                <Icon type="chevron-end" shouldFlipBasedOnDirection className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
          {/*                <a href="#" className="ms-4 text-sm font-medium text-gray-500 hover:text-gray-700">*/}
          {/*                    Engineering*/}
          {/*                </a>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*    </ol>*/}
          {/*</nav>*/}
          <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {children}
          </h1>
          {/*<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:gap-x-8">*/}
          {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
          {/*        /!*<BriefcaseIcon className="me-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*!/*/}
          {/*        <div>BI</div>*/}
          {/*        Full-time*/}
          {/*    </div>*/}
          {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
          {/*        /!*<MapPinIcon className="me-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*!/*/}
          {/*        <div>MPI</div>*/}
          {/*        Remote*/}
          {/*    </div>*/}
          {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
          {/*        /!*<CurrencyDollarIcon className="me-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*!/*/}
          {/*        <div>CDI</div>*/}
          {/*        $120k &ndash; $140k*/}
          {/*    </div>*/}
          {/*    <div className="mt-2 flex items-center text-sm text-gray-500">*/}
          {/*        /!*<CalendarIcon className="me-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*!/*/}
          {/*        <div>CI</div>*/}
          {/*        Closing on January 9, 2020*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
        <div className="mt-5 flex xl:mt-0 xl:ms-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              <Icon
                type="pencil"
                className="-ms-1 me-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Edit
            </button>
          </span>

          <span className="ms-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {/*<LinkIcon className="-ms-1 me-2 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
              <div>LI</div>
              View
            </button>
          </span>

          <Listbox
            as="div"
            value={selected}
            onChange={setSelected}
            className="sm:ms-3"
          >
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">
                  {" "}
                  Change published status{" "}
                </Listbox.Label>
                <div className="relative">
                  <div className="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
                    <div className="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
                      <div className="inline-flex items-center rounded-s-md border border-transparent bg-purple-500 py-2 ps-3 pe-4 text-white shadow-sm">
                        {/*<CheckIcon className="h-5 w-5" aria-hidden="true" />*/}
                        <div>CI</div>
                        <p className="ms-2.5 text-sm font-medium">
                          {selected.name}
                        </p>
                      </div>
                      <Listbox.Button className="inline-flex items-center rounded-s-none rounded-e-md bg-purple-500 p-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                        <span className="sr-only">Change published status</span>
                        <Icon
                          type="chevron-down"
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </Listbox.Button>
                    </div>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute start-0 z-10 mt-2 -me-1 w-72 origin-top-end divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:start-auto sm:end-0">
                      {publishingOptions.map((option) => (
                        <Listbox.Option
                          key={option.name}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-purple-500"
                                : "text-gray-900",
                              "cursor-default select-none p-4 text-sm"
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <div className="flex flex-col">
                              <div className="flex justify-between">
                                <p
                                  className={
                                    selected ? "font-semibold" : "font-normal"
                                  }
                                >
                                  {option.name}
                                </p>
                                {selected ? (
                                  <span
                                    className={
                                      active ? "text-white" : "text-purple-500"
                                    }
                                  >
                                    {/*<CheckIcon className="h-5 w-5" aria-hidden="true" />*/}
                                    <div>CI</div>
                                  </span>
                                ) : null}
                              </div>
                              <p
                                className={classNames(
                                  active ? "text-purple-200" : "text-gray-500",
                                  "mt-2"
                                )}
                              >
                                {option.description}
                              </p>
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          {/* Dropdown */}
          <Menu as="div" className="relative ms-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              More
              <Icon
                type="chevron-down"
                className="-me-1 ms-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 -me-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default PageHeading;

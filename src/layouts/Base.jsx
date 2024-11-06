import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotificationContainer from "@/components/Notification/Container";
import Toaster from "react-hot-toast";
import Notification from "@/components/Notification";
import Icon from "@/components/Icon";

const BaseLayout = ({ children, ...restProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notifCount, setNotifCount] = useState(1);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="flex h-full min-h-0 flex-1 bg-[#f8fafb]">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full rtl:translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full rtl:translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 end-0 ltr:-me-12 rtl:-ms-12 pt-2">
                    <button
                      type="button"
                      className="ms-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <Icon
                        type="x-mark"
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/*<div className="flex-shrink-0 flex items-center px-4">*/}
                {/*    <img*/}
                {/*        className="h-8 w-auto"*/}
                {/*        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"*/}
                {/*        alt="Workflow"*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <Navigation className="px-2 space-y-1" withLabel />
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}

        <div className="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-primary-900 h-screen sticky top-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Sidebar />
        </div>
        <div className="min-w-0 min-h-screen flex flex-col flex-1 border-gray-200 lg:flex">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="flex-1">
            <div className="pb-6">
              <div className="mx-auto px-0 sm:px-8">
                {/*<div className="max-w-7xl mx-auto">*/}
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      {/*<NotificationContainer>*/}
      {/*    <div><button onClick={()=>{setNotifCount(notifCount+1)}} className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">Add</button></div>*/}
      {/*    {notifCount}*/}
      {/*    {Array(notifCount).fill(0).map(e => (*/}
      {/*        <Notification />*/}
      {/*    ))}*/}
      {/*</NotificationContainer>*/}
    </>
  );
};

export default BaseLayout;

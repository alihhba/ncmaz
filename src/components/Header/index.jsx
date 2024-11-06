import {Fragment, useContext, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Link from "@/components/Link";
import PersianNumber from "@/utils/persianNumber";
import ProfileDropdown from "@/components/Header/components/ProfileDropdown";
import WalletDropdown from "@/components/Header/components/WalletDropdown";
import {UserContext} from "@/contexts/UserContext";
import NotificationDropdown from "@/components/Header/components/NotificationDropdown";

const Header = ({sidebarOpen , setSidebarOpen, className}) => {

    const {role} = useContext(UserContext);

    return (
        <div className={classNames("relative flex-shrink-0 flex items-center h-20 bg-white sm:bg-transparent md:mx-8", className)}>
            <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <Icon type="bars-3" className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-6 sm:px-0 flex justify-between">
                <div className="flex-1 flex">
                    <a href="/" className="font-bold text-lg text-primary-900 flex items-center">مشکات نور</a>
                    {/*<form className="w-full flex md:ms-0" action="#" method="GET">*/}
                    {/*    <label htmlFor="search-field" className="sr-only">*/}
                    {/*        Search*/}
                    {/*    </label>*/}
                    {/*    <div className="relative w-full text-gray-400 focus-within:text-gray-600">*/}
                    {/*        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">*/}
                    {/*            /!*<SearchIcon className="h-5 w-5" aria-hidden="true" />*!/*/}
                    {/*        </div>*/}
                    {/*        <input*/}
                    {/*            id="search-field"*/}
                    {/*            className="block w-full h-full ps-8 pe-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"*/}
                    {/*            placeholder="Search"*/}
                    {/*            type="search"*/}
                    {/*            name="search"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
                <div className="space-s-4 ms-4 flex items-center md:ms-6">
                    {role === "customer" ? (
                        <WalletDropdown />
                    ) : null}

                    {role !== "manager" ? (
                        <NotificationDropdown />
                    ) : null}

                    <ProfileDropdown />

                    {/* Profile dropdown */}
                    {/*<Menu as="div" className="ms-4 relative">*/}
                    {/*    <div>*/}
                            {/*<Menu.Button*/}
                            {/*    className="bg-[#eef3f5] p-3 rounded-full text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center">*/}
                            {/*    <span className="sr-only" >Open user menu</span>*/}
                            {/*    <Icon type="arrow-end-on-rectangle" shouldFlipBasedOnDirection className="h-4 w-4" aria-hidden="true" />*/}
                            {/*</Menu.Button>*/}
                        {/*</div>*/}
                        {/*<Transition*/}
                        {/*    as={Fragment}*/}
                        {/*    enter="transition ease-out duration-100"*/}
                        {/*    enterFrom="transform opacity-0 scale-95"*/}
                        {/*    enterTo="transform opacity-100 scale-100"*/}
                        {/*    leave="transition ease-in duration-75"*/}
                        {/*    leaveFrom="transform opacity-100 scale-100"*/}
                        {/*    leaveTo="transform opacity-0 scale-95"*/}
                        {/*>*/}
                        {/*    Menu*/}
                        {/*</Transition>*/}
                    {/*</Menu>*/}
                </div>
            </div>
        </div>
    );
};

export default Header;
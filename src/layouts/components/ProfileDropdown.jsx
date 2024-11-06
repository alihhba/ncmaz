import React, {Fragment} from "react";
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import {Menu, Transition} from "@headlessui/react";
import Icon from "@/components/Icon";

const ProfileDropdown = () => {

    return (
        <Menu as="div" className="ms-3 relative flex-shrink-0">
            <div>
                <Menu.Button
                    className="p-2.5 bg-white bg-opacity-10 rounded-full flex text-sm text-white hover:bg-opacity-20 focus:outline-none focus:bg-opacity-20">
                    <span className="sr-only">Open user menu</span>
                    <Icon type="user" className="h-4 w-4"
                          aria-hidden="true"/>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div>Tes</div>
                <Menu.Items
                    className="origin-top-end absolute end-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({active}) => (
                                item.onClick ? (
                                    <div
                                        onClick={item.onClick}
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block py-2 px-4 text-sm text-gray-700'
                                        )}
                                    >
                                        {item.name}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block py-2 px-4 text-sm text-gray-700'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ProfileDropdown;
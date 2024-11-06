import React, {Fragment, useContext} from "react";
import ActionMenu from '@/components/ActionMenu';
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import {Menu, Transition} from "@headlessui/react";
import Icon from "@/components/Icon";
import {useGetIdentity, useLogout} from "@refinedev/core";
import {UserContext} from "@/contexts/UserContext";
import ActionMenuItem from "@/components/ActionMenu/components/Item";
import findItemBy from "@/utils/findItemBy";
import roles from "@/modules/account/user/metadata/roles";

const ProfileDropdown = () => {

    const {updateRole} = useContext(UserContext);
    const {mutate: logout} = useLogout();

    const userNavigation = [
        {name: 'اطلاعات کاربری', href: '/profile'},
        {
            name: 'خروج', href: '#', onClick: () => {
                logout({updateRole});
            }
        },
    ];

    const {data: currentUser} = useGetIdentity();
    const {name, role: roleSlug} = currentUser || {};
    const role = findItemBy({source: roles, key: 'slug', value: roleSlug});

    return (
        <ActionMenu.Container
            itemContainerClassName="!end-0 w-50"
            button={(
                <Menu.Button
                    className="-ms-1 rounded-full bg-[#eef3f5] p-3 text-slate-500 hover:text-slate-600">
                    <Icon type="user" className="h-4 w-4" aria-hidden="true" />
                </Menu.Button>
            )}
        >
            <div className="flex flex-col text-center items-center gap-1 rounded-lg bg-slate-50 px-1 pt-2 pb-4 mb-2">
                <div className="rounded-full p-2 bg-primary-50 text-primary-600">
                    <Icon type={role.icon} className="h-5 w-5" />
                </div>
                <div>
                    <div className="text-sm text-primary-600">{name}</div>
                    {roleSlug !== "customer" ? (
                        <div className="text-xs mt-1">{role.label}</div>
                    ) : null}
                </div>
            </div>
            {userNavigation.map((item) => (
                item.onClick ? (
                    <ActionMenu.Item
                        key={item.name}
                        label={item.name}
                        action={item.onClick}
                    />
                    ) : (
                    <ActionMenu.Item
                        key={item.name}
                        label={item.name}
                        component={Link}
                        to={item.href}
                    />
                    )

            ))}
        </ActionMenu.Container>
    );
};

export default ProfileDropdown;
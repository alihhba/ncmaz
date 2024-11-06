import React, {Fragment, useContext} from "react";
import ActionMenu from '@/components/ActionMenu';
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import {Menu, Transition} from "@headlessui/react";
import Icon from "@/components/Icon";
import {useApiUrl, useCustom, useCustomMutation, useGetIdentity, useLogout} from "@refinedev/core";
import {UserContext} from "@/contexts/UserContext";
import ActionMenuItem from "@/components/ActionMenu/components/Item";
import PersianNumber from "@/utils/persianNumber";
import {ModalForm} from "@/components/Modal/Form";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";
import AddWalletAmountModal from "@/components/Header/components/AddWalletAmountModal";
import useFetchList from "@/hooks/useFetchList";
import useResourceAction from "@/hooks/useResourceAction";

const WalletDropdown = () => {

    const {fetchList} = useResourceAction("wallet");
    const data = fetchList();
    const {amount = 0} = data?.data?.data?.data || {};

    const userNavigation = [
        {
            name: 'افزایش اعتبار', href: '#',
            extra: (<AddWalletAmountModal />),
        },
        {name: 'فاکتورها', href: '/payments/invoices'},
        {name: 'تراکنش ها', href: '/payments/transactions'},
    ];

    return (
        <ActionMenu.Container
            button={(
                <Menu.Button
                    className="-ms-1 rounded-full bg-[#eef3f5] p-3 text-slate-500 hover:text-slate-600 flex items-center"
                >
                    {/*<span className="sr-only">View notifications</span>*/}
                    <Icon type="wallet" className="h-5 w-5 me-3" aria-hidden="true"/>
                    <div className="flex items-center">
                        <div className="text-sm"><PersianNumber withSeparator>{amount}</PersianNumber></div>
                        <div className="text-[.7rem] ms-1"><PersianNumber>تومان</PersianNumber></div>
                    </div>
                    <Icon type="chevron-down" className="h-4 w-4 ms-3" aria-hidden="true"/>
                </Menu.Button>
            )}
        >

            {userNavigation.map((item) => (
                item.onClick ? (
                    <ActionMenu.Item
                        key={item.name}
                        label={item.name}
                        action={item.onClick}
                    />
                ) : (
                    item.extra ? (
                        <ActionMenu.Item
                            key={item.name}
                            label={item.name}
                            extra={item.extra}
                        />
                    ) : (
                        <ActionMenu.Item
                            key={item.name}
                            label={item.name}
                            component={Link}
                            to={item.href}
                        />
                    )
                )

            ))}
        </ActionMenu.Container>
    );
};

export default WalletDropdown;
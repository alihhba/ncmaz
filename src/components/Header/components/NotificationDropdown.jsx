import React, {Fragment, useContext, useEffect, useState} from "react";
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import {Menu, Popover, Transition} from "@headlessui/react";
import Icon from "@/components/Icon";
import useResourceAction from "@/hooks/useResourceAction";
import PersianNumber from "@/utils/persianNumber";
import {useModal} from "@refinedev/core";
import {ModalBase} from "@/components/Modal/Base";
import {NotificationShow} from "@/panels/customer/pages/notifications";

const NotificationDropdown = () => {

    const {fetchList} = useResourceAction("notifications");

    const {items} = fetchList({
        filters: [
            {field: 'is_new', operator: 'eq', value: true},
        ],
    });

    const [currentItem, setCurrentItem] = useState(null);
    const {visible, show, close: closeModal} = useModal();

    const onCloseModal = () => {
        closeModal();
        setCurrentItem(null);
    }

    useEffect(() => {
        if (!currentItem) {
            closeModal();
        }else{
            show();
        }
    }, [currentItem]);

    return (
        <Popover className="relative">
            {({open}) => (
                <>
                    <Popover.Button
                        className={classNames("-ms-1 rounded-full bg-[#eef3f5] p-3 text-slate-500 hover:text-slate-600", open? "text-opacity-90" : null)}
                    >
                        <Icon type="bell" className="h-4 w-4" aria-hidden="true" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute end-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-md">
                            {({close}) => (
                                <div className="bg-white rounded-lg shadow-lg pb-14">
                                    {items.length ? (
                                        <div className="px-4 py-2 max-h-72 divide-y overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-slate-200 scrollbar-thumb-slate-400">
                                            {items.map(item => (
                                                <ListItem {...item} onClose={close} setCurrent={setCurrentItem} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2 py-8">
                                            <Icon type="exclamation-circle" className="h-6 w-6 text-slate-500" />
                                            <div className="text-sm text-slate-600 text-center leading-4">اطلاعیه تازه‌ای موجود نیست.</div>
                                        </div>
                                    )}
                                    <Link to="/notifications" onClick={close} className="fixed bottom-0 start-0 end-0 block w-full text-center text-sm text-slate-600 bg-slate-100 rounded-b-lg hover:opacity-80 py-4 shadow-md">مشاهده فهرست اطلاعیه‌ها</Link>
                                </div>
                            )}
                        </Popover.Panel>
                    </Transition>

                    <ModalBase
                        open={visible}
                        onClose={onCloseModal}
                    >
                        <NotificationShow id={currentItem} />
                    </ModalBase>
                </>
            )}
        </Popover>
    );
};

const ListItem = ({id, title, description, created_at_persian: createdAtPersian, onClose, setCurrent}) => {

    return (
        <>
            <div className="py-2 cursor-pointer hover:opacity-80"
                 onClick={() => {onClose(); setCurrent(id);}}
            >
                <div className="text-sm text-gray-600 font-bold">{title}</div>
                <div className="text-sm text-gray-600 mt-1 truncate">{description}</div>
                <div className="text-xs text-slate-600 text-left mt-2"><PersianNumber>{createdAtPersian}</PersianNumber></div>
            </div>
        </>
    );
}

export default NotificationDropdown;
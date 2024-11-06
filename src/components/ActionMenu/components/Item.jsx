import React, {useEffect} from "react";
import classNames from "@/utils/classNames.jsx";
import Icon from "@/components/Icon/index.jsx";
import {Menu} from "@headlessui/react";
import {ActionMenuItemDelete} from "../defaults/Delete.jsx";
import {ActionMenuItemEdit} from "../defaults/Edit.jsx";
import {ActionMenuItemShow} from "../defaults/Show.jsx";

const ActionMenuItem = ({
                                       itemKey,
                                       slug,
                                       addExtraContent,
                                       showExtraContent,
                                       component: Component = "button",
                                       children,
                                       icon,
                                       label,
                                       link,
                                       onClick: providedOnClick = () => {
                                       },
                                       type = "function",
                                       extra,
                                       disabled,
                                       action,
                                       actionProps,
                                       className,
                                       ...restProps
                                   }) => {

    useEffect(() => {
        if (extra && typeof addExtraContent === "function") {
            addExtraContent({key: `${itemKey}-${slug}`, extraContent: extra});
        }
    }, []);

    const integratedOnClick = () => {
        if (action) {
            action(actionProps);
        }

        if (providedOnClick) {
            providedOnClick();
        }
    }

    const onClick = () => {
        if (extra) {
            showExtraContent(`${itemKey}-${slug}`);
            integratedOnClick();
        }

        integratedOnClick();
    }

    return (
        <Menu.Item key={`${itemKey}-${slug}`}>
            {({active}) => (
                <Component
                    onClick={onClick}
                    {...restProps}
                    className={classNames(
                        className,
                        active ? 'bg-slate-200/60 text-gray-900' : 'text-gray-700',
                        'w-full py-2 text-sm text-right flex items-center gap-2 rounded-lg',
                        icon ? 'px-2' : 'px-3'
                    )}
                >
                    {icon ? (
                        <Icon type={icon} className="h-4 w-4"/>
                    ) : null}

                    <div>{label}</div>
                </Component>
            )}
        </Menu.Item>
    );
};

ActionMenuItem.Show = ActionMenuItemShow;
ActionMenuItem.Edit = ActionMenuItemEdit;
ActionMenuItem.Delete = ActionMenuItemDelete;

export default ActionMenuItem;
import React from "react";
import classNames from "@/utils/classNames";
import {ListItemContainerBaseCard} from "@/components/List";
import PersianNumber from "@/utils/persianNumber";
import Icon from "@/components/Icon";
import { useNavigation, useResource, useRouterContext } from "@refinedev/core";
import statuses from "@/pages/categories/components/statuses";
import Actions from './actions';
import Link from '@/components/Link';
import useResourceAction from "@/hooks/useResourceAction";
import ResourceButton from "@/components/ResourceButton";

export const CategoryListItem = ({id, title, status: statusSlug, updated_at: updatedAt, updated_at_persian: updatedAtPersian, className, ...restProps}) => {

    const {editUrl} = useResourceAction();

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <ListItemContainerBaseCard
            key={id}
            className={classNames("group", className)}
            {...restProps}
        >
            <Link to={editUrl(id)} className="flex min-w-0 flex-1 items-center space-s-4">
                <div className="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                        <p className="truncate text-sm font-medium text-cyan-700"><PersianNumber>{title}</PersianNumber></p>
                        <p className="mt-2 flex items-center text-xs text-gray-500">
                            <span className="truncate"><PersianNumber>{id}</PersianNumber></span>
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div>
                            <p className="flex items-center text-sm text-gray-500">
                                <Icon
                                    type={status.icon}
                                    className={classNames("me-1.5 h-5 w-5 flex-shrink-0", status.color)}
                                    aria-hidden="true"
                                />
                                {status.label}
                            </p>
                            <p className="mt-2 text-xs text-gray-400">
                                آخرین ویرایش در <time dateTime={updatedAt} className="text-gray-500"><PersianNumber>{updatedAtPersian}</PersianNumber></time>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Actions id={id} />
        </ListItemContainerBaseCard>
    );
};

export default CategoryListItem;
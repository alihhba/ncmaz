import React from "react";
import {ListItemContainerBaseCard} from "@/components/List";
import { useNavigation, useResource, useRouterContext } from "@refinedev/core";
import Icon from "@/components/Icon";
import {ListItemDataImage} from "@/components/List/Item/Data/Image";
import PersianNumber from "@/utils/persianNumber";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import statuses from "@/pages/categories/components/statuses";
import classNames from "@/utils/classNames";

export const PostListItem = ({id, cover, title, status: statusSlug, updated_at: updateAt, updated_at_persian: updatedAtPersian, actions=[], className, ...restProps}) => {

    const {editUrl} = useResourceAction();

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <ListItemContainerBaseCard
            key={id}
            className="group"
            {...restProps}
        >
            <Link to={editUrl(id)} className="flex min-w-0 flex-1 items-centers space-s-4">
                <div className="flex-shrink-0">
                    <ListItemDataImage
                        src={cover}
                    />
                </div>
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
                                آخرین ویرایش در <time dateTime={updateAt} className="text-gray-500"><PersianNumber>{updatedAtPersian}</PersianNumber></time>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Actions id={id} />
        </ListItemContainerBaseCard>
    );
};
import React from "react";
// import {ListItemContainerBaseCard} from "@/components/List";
import { useNavigation, useResource, useRouterContext } from "@refinedev/core";
import Icon from "@/components/Icon";
// import {ListItemDataImage} from "@/components/List/Item/Data/Image";
import PersianNumber from "@/utils/persianNumber";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import statuses from "@/pages/categories/components/statuses";
import classNames from "@/utils/classNames";
import Placeholder from "@/components/Placeholder";

export const RegionListItem = ({isSelected, onToggleSelect, id, cover, title, status: statusSlug, updated_at: updateAt, updated_at_persian: updatedAtPersian, actions=[], className, ...restProps}) => {

    const {editUrl} = useResourceAction();

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <Placeholder.List.Item
            key={id}
            className="group"
            {...restProps}
        >
            <div className="me-2">
                <input
                    id={id}
                    aria-describedby="region-item"
                    name={id}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    checked={isSelected}
                    onChange={onToggleSelect}
                />
            </div>
            <div>{title}</div>
        </Placeholder.List.Item>
    );
};
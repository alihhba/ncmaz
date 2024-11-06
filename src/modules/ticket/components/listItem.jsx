import React from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import statuses from './statuses';

export const TicketListItem = ({
                                   isSelected,
                                   onToggleSelect,
                                   id,
                                   cover,
                                   title,
                                   created,
                                   createdPersian,
                                   updated,
                                   updatedPersian,
                                   amount,
    department,
    priority,
                                   status: statusSlug,
                                   updated_at: updateAt,
                                   updated_at_persian: updatedAtPersian,
                                   actions = [],
                                   className,
                                   ...restProps
                               }) => {

    const {showUrl} = useResourceAction();

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <List.Item.Container
            {...restProps}
        >
            {/*<List.Item.Data.Link className="ps-8" to={showUrl(id)}>*/}
            {/*    <PersianNumber>{id}</PersianNumber>*/}
            {/*</List.Item.Data.Link>*/}

            <List.Item.Data.Link className="ps-8" to={showUrl(id)}>
                {title}
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                {department}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {priority}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {created ? (
                    <time dateTime={created}>
                        <PersianNumber>{createdPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>


            <List.Item.Data.Text>
                {updated ? (
                    <time dateTime={updated}>
                        <PersianNumber>{updatedPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>


            <List.Item.Data.Container className="pe-6">
                <div className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                    {status.label}
                </div>
            </List.Item.Data.Container>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                <Actions id={id}/>
            </List.Item.Data.Container>
        </List.Item.Container>
    );
};
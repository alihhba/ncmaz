import React from "react";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import statuses from './statuses';
import ActionMenu from "@/components/ActionMenu";
import findItemBy from "@/utils/findItemBy";
import departments from "@/modules/ticket/metadata/departments";
import priorities from "@/modules/ticket/metadata/priorities";

const TicketListItem = ({resource, data, className, withoutActions, ...restProps}) => {

    const {showUrl} = useResourceAction(resource);

    const {
        id,
        title,
        department: departmentSlug = '',
        priority: prioritySlug = '',
        status: statusSlug,
        created_at: createdAt,
        created_at_persian: createdAtPersian,
        updated_at: updatedAt,
        updated_at_persian: updatedAtPersian,
    } = data || {};

    const department = findItemBy({source: departments, key: 'slug', value: departmentSlug});
    const priority = findItemBy({source: priorities, key: 'slug', value: prioritySlug});
    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

    return (
        <List.Item.Container{...restProps} >

            <List.Item.Data.Link className="ps-8" to={showUrl(id)}>
                <PersianNumber>{title}</PersianNumber>
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                {department.label}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {priority.label}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {createdAt ? (
                    <time dateTime={createdAt}>
                        <PersianNumber>{createdAtPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>


            <List.Item.Data.Text>
                {updatedAt ? (
                    <time dateTime={updatedAt}>
                        <PersianNumber>{updatedAtPersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>


            <List.Item.Data.Container className="pe-6">
                <div
                    className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                    {status.label}
                </div>
            </List.Item.Data.Container>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        component={Link}
                        to={showUrl(id)}
                    />

                </ActionMenu.Container>
            </List.Item.Data.Container>

        </List.Item.Container>
    );
};

export default TicketListItem;
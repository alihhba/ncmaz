import React from "react";
import ActionMenu from "@/components/ActionMenu";
import useResourceAction from "@/hooks/useResourceAction";
import List from "@/components/List";
import PersianNumber from "@/utils/persianNumber";
import Link from "@/components/Link";
import findItemBy from "@/utils/findItemBy";
import departments from "@/modules/ticket/metadata/departments";
import statuses from "@/modules/account/user/metadata/statuses";
import classNames from "@/utils/classNames";

const StaffListItem = ({resource, data, className, ...restProps}) => {

    const {showUrl, editUrl, deleteAction} = useResourceAction();

    const {
        id,
        name = '',
        national_code: nationalCode = '',
        mobile = '',
        department: departmentSlug = '',
        status: statusSlug,
    } = data || {};

    const department = findItemBy({source: departments, key: 'slug', value: departmentSlug});
    const status = findItemBy({source: statuses, key: 'slug', value: statusSlug});

    return (
        <List.Item.Container
            {...restProps}
        >
            {/*<List.Item.Data.Link className="ps-8" to={showUrl(id)}>*/}
            {/*    <PersianNumber>{id}</PersianNumber>*/}
            {/*</List.Item.Data.Link>*/}

            <List.Item.Data.Link className="ps-8" to={showUrl(id)}>
                {name}
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                <PersianNumber>{nationalCode}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{mobile}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text className="pe-6">
                {department.label}
            </List.Item.Data.Text>

            <List.Item.Data.Text className="pe-6">
                <div
                    className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                    {status.label}
                </div>
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">

                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        component={Link}
                        to={showUrl(id)}
                    />

                    <ActionMenu.Item.Edit
                        component={Link}
                        to={editUrl(id)}
                    />

                    <ActionMenu.Item.Delete
                        action={deleteAction}
                        actionProps={{id}}
                        title={`حذف ${name}`}
                    />

                </ActionMenu.Container>

            </List.Item.Data.Container>
        </List.Item.Container>
    );
};

export default StaffListItem;
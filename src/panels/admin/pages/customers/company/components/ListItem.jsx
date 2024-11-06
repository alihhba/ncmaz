import React from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import ActionMenu from "@/components/ActionMenu";
import Link from "@/components/Link";
import {useParsed} from "@refinedev/core";

export const CustomerCompanyListItem = ({resource, data, className, ...restProps}) => {

    const {showUrl, editUrl, deleteAction} = useResourceAction(resource);

    const {
        id,
        company_name: name = '',
        national_code: nationalCode = '',
        economic_code: economicCode = '',
        mobile = '',
    } = data || {};

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
                <PersianNumber>{economicCode}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{mobile}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">

                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        component={Link}
                        to={showUrl(id)}
                        // extra={(
                        //     <ModalBase>
                        //         <FlavorShow id={id} />
                        //     </ModalBase>
                        // )}
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

export default CustomerCompanyListItem;
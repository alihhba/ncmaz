import React from "react";
import ActionMenu from "@/components/ActionMenu";
import useResourceAction from "@/hooks/useResourceAction";
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
// import statuses from '@/modules/service-config/sub-modules/manager/definitions/statuses';

const ManagerListItem = ({
                             id,
                             first_name: firstName = '',
                             last_name: lastName = '',
                             mobile = '',
                             email = '',
                             status: statusSlug,
                             actions = [],
                             className,
                             ...restProps
                         }) => {

    const {showUrl, editUrl, deleteAction} = useResourceAction();

    // const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <List.Item.Container
            {...restProps}
        >
            {/*<List.Item.Data.Link className="ps-8" to={showUrl(id)}>*/}
            {/*    <PersianNumber>{id}</PersianNumber>*/}
            {/*</List.Item.Data.Link>*/}

            <List.Item.Data.Link className="ps-8" to={showUrl(id)}>
                {firstName} {lastName}
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                <PersianNumber>{mobile}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text className="pe-6">
                {email}
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">

                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        component={Link}
                        to={showUrl(id)}
                        // extra={(
                        //     <ModalBase>
                        //         <ManagerShow id={id} />
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
                        title={`حذف ${firstName} ${lastName}`}
                    />

                </ActionMenu.Container>

            </List.Item.Data.Container>
        </List.Item.Container>
    );
};

export default ManagerListItem;
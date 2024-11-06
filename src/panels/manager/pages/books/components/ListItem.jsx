import React from "react";
import ActionMenu from "@/components/ActionMenu";
import useResourceAction from "@/hooks/useResourceAction";
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import findItemBy from "@/utils/findItemBy.jsx";
// import statuses from '@/modules/service-config/sub-modules/manager/definitions/statuses';

const BookListItem = ({
                              resource = 'books',
                              id,
                              data = {},
                              className,
                              ...restProps
                          }) => {


    const {showUrl, editUrl, deleteAction} = useResourceAction();

    const {
        title = '',
        updated_at_persian: updatedAtPersian = '',
        created_at_persian: createdAtPersian = '',
        status: statusSlug = '',
    } = data || {};

    const status = findItemBy({source: [], key: 'slug', value: statusSlug});

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
                <PersianNumber>{createdAtPersian}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{updatedAtPersian}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text className="pe-6">
                {status.label}
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">

                <ActionMenu.Container id={id}>

                    <ActionMenu.Item.Show
                        component={Link}
                        to={showUrl(id)}
                        // extra={(
                        //     <ModalBase>
                        //         <BookShow id={id} />
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
                        title={`حذف ${title}`}
                    />

                </ActionMenu.Container>

            </List.Item.Data.Container>
        </List.Item.Container>
    );
};

export default BookListItem;
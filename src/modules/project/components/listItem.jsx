import React from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import statuses from "@/modules/server/components/statuses";
import List from "@/modules/server/common/list";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import ActionMenu from "@/components/ActionMenu";
import {ModalBase} from "@/components/Modal/Base";
import {ProjectEdit} from "@/panels/customer/pages/projects/edit";

export const ProjectListItem = ({
                                    resource,
                                    isSelected,
                                    onToggleSelect,
                                    id,
                                    cover,
                                    name,
                                    quota = {},
                                    price,
                                    servers_count: serversCount,
                                    status: statusSlug,
                                    updated_at: updateAt,
                                    updated_at_persian: updatedAtPersian,
                                    actions = [],
                                    className,
                                    withoutActions,
                                    ...restProps
                                }) => {

    const {showUrl, deleteAction} = useResourceAction(resource);

    const {
        name: quotaName = '',
        price: quotaPrice = '',
    } = quota || {};

    return (
        <List.Item.Container
            key={id}
            hasCheckbox
            isSelected={isSelected}
            {...restProps}
        >

            {/*<List.Item.Data.Checkbox*/}
            {/*    id={id}*/}
            {/*    isSelected={isSelected}*/}
            {/*    onToggle={onToggleSelect}*/}
            {/*/>*/}

            <List.Item.Data.Link to={showUrl(id)} className="ps-8">
                {name}
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                {quotaName}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber withSeparator>{quotaPrice}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{serversCount ?? '-'}</PersianNumber>
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

                    {!withoutActions ? (
                        <ActionMenu.Item.Edit
                            // component={Link}
                            // to={showUrl(id)}
                            extra={(
                                <ModalBase>
                                    {({onClose}) => <ProjectEdit id={id} onClose={onClose}/>}
                                </ModalBase>
                            )}
                        />
                    ) : null}

                    {!withoutActions ? (
                        <ActionMenu.Item.Delete
                            action={deleteAction}
                            actionProps={{id}}
                            title={`حذف ${name}`}
                        />
                    ) : null}

                </ActionMenu.Container>
            </List.Item.Data.Container>
        </List.Item.Container>
    )
        ;
};
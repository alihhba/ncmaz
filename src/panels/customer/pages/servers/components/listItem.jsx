import React from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import statuses from "@/modules/server/components/statuses";
import List from "@/modules/server/common/list";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import ActionMenu from "@/components/ActionMenu";
import Icon from "@/components/Icon";

const ServerListItem = ({
                            resource,
                            isSelected,
                            onToggleSelect,
                            id,
                            cover,
                            name,
                            ipv4_public: ipv4,
                            uptime,
                            flavor,
                            is_abused: isAbused = false,
                            status: statusSlug,
                            updated_at: updateAt,
                            updated_at_persian: updatedAtPersian,
                            actions = [],
                            className,
                            withoutActions,
                            ...restProps
                        }) => {

    const {showUrl, deleteAction} = useResourceAction(resource);

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    const {ram, cpu, disk} = flavor || {};

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
                <div className="flex items-center gap-2">
                    {isAbused ? <Icon type="exclamation-triangle" className="h-5 w-5 text-orange-600"/> : null}
                    <div>{name}</div>
                </div>
            </List.Item.Data.Link>

            <List.Item.Data.Text>
                <div className="text-start" style={{direction: 'ltr'}}>
                    {ram}
                </div>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <div className="text-start" style={{direction: 'ltr'}}>
                    {cpu}
                </div>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <div className="text-start" style={{direction: 'ltr'}}>
                    {disk}
                </div>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {ipv4}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{uptime ?? '-'}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Container className="pe-6">
                <div
                    className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                    {status.label} {isAbused ? ' - abuse' : null}
                </div>
            </List.Item.Data.Container>

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
                        <ActionMenu.Item.Delete
                            action={deleteAction}
                            actionProps={{id}}
                            title={`حذف ${name}`}
                        />
                    ) : null}

                </ActionMenu.Container>

            </List.Item.Data.Container>
        </List.Item.Container>
    );
};

export default ServerListItem;
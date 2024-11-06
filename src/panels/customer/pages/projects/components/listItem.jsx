import React from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import statuses from "@/modules/server/components/statuses";
import List from "@/modules/server/common/list";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";

export const ProjectListItem = ({
                                   isSelected,
                                   onToggleSelect,
                                   id,
                                   cover,
                                   title,
                                   ram,
                                   cpu,
                                   disk,
                                   price,
                                   serverCount,
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
                {title}
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
                <PersianNumber>{serverCount ?? '-'}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{price}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                <Actions id={id}/>
            </List.Item.Data.Container>
        </List.Item.Container>
    );
};
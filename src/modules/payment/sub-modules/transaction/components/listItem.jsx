import React from "react";
import Actions from "@/pages/categories/components/actions";
import useResourceAction from "@/hooks/useResourceAction";
import Link from '@/components/Link';
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import statuses from '@/modules/payment/sub-modules/transaction/components/statuses';

export const TransactionListItem = ({
                                   isSelected,
                                   onToggleSelect,
                                   id,
                                   cover,
                                   description,
                                   time,
                                   timePersian,
                                   amount,
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

            <List.Item.Data.Text className="ps-8">
                {description}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <div className={classNames("text-start", status.color)} style={{direction: 'ltr'}}>
                    <PersianNumber>{`${status.slug === 'increase' ? '+' : '-'}${amount}`}</PersianNumber>
                </div>
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                {time ? (
                    <time dateTime={time}>
                        <PersianNumber>{timePersian}</PersianNumber></time>
                ) : '-'}
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">
                <Actions id={id}/>
            </List.Item.Data.Container>
        </List.Item.Container>
    );
};
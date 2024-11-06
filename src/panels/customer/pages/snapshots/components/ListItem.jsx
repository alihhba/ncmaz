import React from "react";
import ActionMenu from "@/components/ActionMenu";
import useResourceAction from "@/hooks/useResourceAction";
import List from "@/modules/server/common/list";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import Link from "@/components/Link";
import statuses from '@/modules/service-config/sub-modules/flavor/definitions/statuses';
import {ModalBase} from "@/components/Modal/Base";
import {SnapshotForm} from "@/panels/customer/pages/snapshots";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";

const SnapshotItem = ({resource, data = {}, className, ...restProps}) => {

    const {showUrl, editUrl, deleteAction} = useResourceAction(resource);

    const {
        id,
        title = '',
        description = '',
        cpu = '',
        ram = '',
        disk = '',
        price = '',
        price_monthly: priceMonthly = '',
        is_plan: isPlan = '',
        status: statusSlug,
        updated_at: updateAt,
        updated_at_persian: updatedAtPersian,
    } = data || {};

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    const revertVersion = (id, onClose) => {
        onClose();
    }

    return (
        <List.Item.Container
            {...restProps}
        >
            {/*<List.Item.Data.Link className="ps-8" to={showUrl(id)}>*/}
            {/*    <PersianNumber>{id}</PersianNumber>*/}
            {/*</List.Item.Data.Link>*/}

            <List.Item.Data.Text className="ps-8" to={showUrl(id)}>
                {title}
            </List.Item.Data.Text>

            <List.Item.Data.Text>
                <PersianNumber>{description}</PersianNumber>
            </List.Item.Data.Text>

            <List.Item.Data.Container className="relative !pe-0 !sm:pe-0">

                <ActionMenu.Container id={id} itemContainerClassName="!w-48">

                    <ActionMenu.Item
                        icon="arrow-uturn-end"
                        label="بازگردانی به این نسخه"
                        extra={(
                            <ModalConfirmDefault
                                title={`بازگردانی به ${title}`}
                                description="آیا از بازگردانی به این نسخه اطمینان دارید؟"
                                onConfirm={({onClose})=>{revertVersion(id, onClose)}}
                            />
                        )}
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

export default SnapshotItem;
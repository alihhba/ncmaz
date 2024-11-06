import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
import {fetchCurrent} from "@/modules/service-config/sub-modules/flavor/services";
import classNames from "@/utils/classNames";
import statuses from "@/modules/service-config/sub-modules/flavor/definitions/statuses";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";

export const SnapshotShow = ({resource, id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource || 'flavors');
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const flavor = fetchCurrent({id});

    const {
        name = '',
        cpu = '',
        ram = '',
        disk = '',
        price = '',
        price_monthly: priceMonthly = '',
        is_plan: isPlan = false,
        status: statusSlug = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = flavor || {};

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <Page>
            <Page.Content>
                <Placeholder.Card
                    title="مشخصات Flavor"
                    icon="flavor"
                >
                    <DescriptionList>

                        <DescriptionList.Item title="نام">
                            {name}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="پردازنده">
                            {cpu}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="حافظه">
                            {ram}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="دیسک">
                            {disk}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="قیمت (هر ساعت)">
                            {price}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="قیمت (ماهانه)">
                            {priceMonthly}
                        </DescriptionList.Item>

                        <DescriptionList.Item title="نمایش به عنوان پلن">
                            <PersianNumber>{isPlan ? 'بله' : 'خیر'}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="وضعیت">
                            <div
                                className={classNames("inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                                {status.label}
                            </div>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="تاریخ ایجاد" style={{direction: 'ltr'}}>
                            <PersianNumber>{createdAtPersian}</PersianNumber>
                        </DescriptionList.Item>

                        <DescriptionList.Item title="آخرین به روز رسانی" style={{direction: 'ltr'}}>
                            <PersianNumber>{updatedAtPersian}</PersianNumber>
                        </DescriptionList.Item>

                    </DescriptionList>
                </Placeholder.Card>
            </Page.Content>
        </Page>
    );
};
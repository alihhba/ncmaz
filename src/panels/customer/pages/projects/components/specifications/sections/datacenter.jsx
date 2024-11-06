import React from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import DatacenterSelect from "@/modules/server/components/specifications/partials/datacenter-select";
import Icon from "@/components/Icon";

const ServerSpecificationDatacenter = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >

            <div className="bg-primary-50 text-primary-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-20">
                <Icon type="exclamation-circle" className="h-6 w-6" />
                <div>
                    توضیحات عمومی برای تصمیم‌گیری مناسب‌تر مشتری برای انتخاب دیتاسنتر در این بخش قرار می‌گیرد.
                </div>
            </div>

            <Form.Container>
                <Form.Section>
                    <DatacenterSelect />
                </Form.Section>
            </Form.Container>

        </div>
    );
};

export default ServerSpecificationDatacenter;
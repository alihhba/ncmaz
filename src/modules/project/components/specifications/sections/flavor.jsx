import React from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import FlavorSelect from "@/modules/server/components/specifications/partials/flavor-select";

const ServerSpecificationFlavor = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >

            <div className="bg-primary-50 text-primary-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-16">
                <Icon type="exclamation-circle" className="h-6 w-6" />
                <div>
                    توضیحات عمومی برای تصمیم‌گیری مناسب‌تر مشتری برای انتخاب منابع سرور در این بخش قرار می‌گیرد.
                </div>
            </div>

            <Form.Container>
                <Form.Section>
                    <FlavorSelect />
                </Form.Section>
            </Form.Container>

        </div>
    );
};

export default ServerSpecificationFlavor;
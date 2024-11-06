import React from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import ImageSelect from "@/modules/server/components/specifications/partials/image-select";

const ServerSpecificationImage = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >

            <div className="bg-primary-50 text-primary-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-10">
                <Icon type="exclamation-circle" className="h-6 w-6" />
                <div>
                    توضیحات عمومی برای تصمیم‌گیری مناسب‌تر مشتری برای انتخاب سیستم عامل در این بخش قرار می‌گیرد.
                </div>
            </div>

            <Form.Container>
                <Form.Section>
                    <ImageSelect />
                </Form.Section>
            </Form.Container>

        </div>
    );
};

export default ServerSpecificationImage;
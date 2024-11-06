import React from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import Icon from "@/components/Icon";

const ServerSpecificationSubmit = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >

            <div className="bg-red-50 text-red-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-10">
                <Icon type="exclamation-triangle" className="h-6 w-6" />
                <div>
                    در نسخه آزمایشی به جهت عدم امکان دسترسی به سرور و ارتباط با API امکان ایجاد سرور نمی‌باشد.
                </div>
            </div>

            <Form.Container>
                <Form.Section>

                </Form.Section>
            </Form.Container>

        </div>
    );
};

export default ServerSpecificationSubmit;
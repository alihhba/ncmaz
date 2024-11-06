import React, {useState} from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import AccessSelect from "@/modules/server/components/specifications/partials/access-select";

const ServerSpecificationAccessControl = ({onPrevStep, onNextStep, data, setData, children, className, ...restProps}) => {

    const [access, setAccess] = useState();

    const onBack = () => {
        onPrevStep();
    }

    const onSubmit = () => {
        setData({...data, access});
        if (access?.id) {
            onNextStep();
        }
    }

    const {access: value} = data || {};

    return (
        <div
            className={classNames("flex flex-col flex-grow", className)}
            {...restProps}
        >

            <div className="flex-grow">
                <div className="bg-primary-50 text-primary-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-20">
                    <Icon type="exclamation-circle" className="h-6 w-6" />
                    <div>
                        توضیحات عمومی برای تصمیم‌گیری مناسب‌تر مشتری برای انتخاب شیوه دسترسی به سرور در این بخش قرار می‌گیرد.
                    </div>
                </div>

                <Form.Container>
                    <Form.Section>
                        <AccessSelect value={value} onChange={setAccess} />
                    </Form.Section>
                </Form.Container>
            </div>

            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5 pt-5">
                <button
                    onClick={onBack}
                    className="btn btn-secondary w-24">قبلی
                </button>
                <button
                    onClick={onSubmit}
                    className="flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    بعدی
                </button>
            </div>

        </div>
    );
};

export default ServerSpecificationAccessControl;
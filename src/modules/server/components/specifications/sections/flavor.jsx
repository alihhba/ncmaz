import React, {useEffect, useState} from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import FlavorSelect from "@/modules/server/components/specifications/partials/flavor-select";

const ServerSpecificationFlavor = ({onPrevStep, onNextStep, data = {}, setData, onChange, children, className, ...restProps}) => {

    const [flavor, setFlavor] = useState();

    const onBack = () => {
        onPrevStep();
    }

    const onSubmit = () => {
        setData({...data, flavor});
        if (flavor?.id) {
            onNextStep();
        }
    };

    const {flavor: value} = data || {};

    return (
        <div
            className={classNames("flex-grow flex flex-col", className)}
            {...restProps}
        >

            <div className="flex-grow">
                <div className="bg-primary-50 text-primary-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-16">
                    <Icon type="exclamation-circle" className="h-6 w-6" />
                    <div>
                        توضیحات عمومی برای تصمیم‌گیری مناسب‌تر مشتری برای انتخاب منابع سرور در این بخش قرار می‌گیرد.
                    </div>
                </div>

                <Form.Container>
                    <Form.Section>
                        <FlavorSelect value={value} onChange={setFlavor} />
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

export default ServerSpecificationFlavor;
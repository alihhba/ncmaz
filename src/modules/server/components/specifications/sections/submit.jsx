import React, {useState} from "react";
import classNames from "@/utils/classNames";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import PersianNumber from "@/utils/persianNumber";

const ServerSpecificationSubmit = ({onPrevStep, onNextStep, data, setData, children, className, ...restProps}) => {

    const [name, setName] = useState('');

    const {
        datacenter = {},
        image = {},
        flavor = {},
        access = {},
    } = data || {};

    console.log(data);

    const preData = {
        "region": "RegionOne",
        "project_id": "ef9b01bb2dd549acb53b474dd6ad3325",
        "isMicrosoft": false,
        "count": 1,
        "volume": "local",
        "flavorPrice": 0.1,
        "vat": 0.020000000000000004,
        "sum": 0.12000000000000001,
    };

    // const formData = {
    //     "name": "T102",
    //     "flavorRef": "c1",
    //     "imageRef": "c66e9dc3-db91-4322-a5bd-1c51954cfb30",
    // };
    //
    // const plan = {
    //     name: 'طلا',
    //     ram: '4 GB',
    //     cpu: '2 Core',
    //     disk: '40 GB SSD'
    // };

    const onBack = () => {
        onPrevStep();
    };

    const onSubmit = () => {
        setData({...data, name});

        if (name) {
            onNextStep({name});
        }
    }

    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >

            {/*<div className="bg-red-50 text-red-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-10">*/}
            {/*    <Icon type="exclamation-triangle" className="h-6 w-6" />*/}
            {/*    <div>*/}
            {/*        در نسخه آزمایشی به جهت عدم امکان دسترسی به سرور و ارتباط با API امکان ایجاد سرور نمی‌باشد.*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="bg-primary-50 text-primary-600 rounded-md p-4 mb-4 text-sm flex items-center gap-4 mb-10">
                <Icon type="exclamation-circle" className="h-6 w-6" />
                <div>
                    لطفا اطلاعات سرور را بررسی نمایید. همچنین در صورت نیاز می‌توانید در این مرحله بیش از یک سرور را با این مشخصات ایجاد نمایید.
                </div>
            </div>

            <div className="px-4 py-5 sm:p-0 flex-grow">
                <dl className="sm:divide-y sm:divide-gray-200">
                    {/*<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">*/}
                    {/*    <Form.Item.Label htmlFor="server_count" className="text-sm font-medium text-gray-500">تعداد سرور</Form.Item.Label>*/}
                    {/*    <Form.Item.Input id="server_count" />*/}
                    {/*</div>*/}
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <Form.Item.Label htmlFor="name" className="text-sm font-medium text-gray-500">نام سرور</Form.Item.Label>
                        <Form.Item.Input id="name" value={name} onChange={e => {setName(e.target.value)}} autoFocus/>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 bg-slate-50">
                        <dt className="text-sm font-bold text-gray-500">مشخصات سرور</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" />
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">دیتاسنتر</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{datacenter && datacenter.title}</dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">سیستم عامل</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{image && image.name ? `${image.name} ${image.version}` : ''}</dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">منابع سرور</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex items-center gap-1">
                            <div>{flavor.name} ( </div>
                            <div className="text-start" style={{direction: 'ltr'}}>
                                        <span className="block sm:inline">
                        {flavor.ram} GB / {flavor.cpu} Core
                      </span>{' '}
                                <span className="hidden sm:mx-1 sm:inline" aria-hidden="true">
                        &middot;
                      </span>{' '}
                                <span className="block sm:inline">{flavor.disk} GB {(flavor.disk_type || '').toUpperCase()}</span>
                            </div>
                            <div>)</div>
                        </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">هزینه ماهانه</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><PersianNumber withSeparator>{flavor.price_monthly}</PersianNumber> تومان</dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">شیوه دسترسی</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><PersianNumber>{access.title}</PersianNumber></dd>
                    </div>
                </dl>
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
                    ایجاد
                </button>
            </div>
        </div>
    );
};

export default ServerSpecificationSubmit;
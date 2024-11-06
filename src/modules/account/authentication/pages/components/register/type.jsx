import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import FormItemSelect from "@/components/Form/Item/Select";

export default ({type: providedType, onSubmit}) => {

    const [type, setType] = useState('');
    const submit = (e) => {
        e.preventDefault();
        onSubmit(type);
    };

    useEffect(() => {
        setType(providedType)
    }, [providedType]);

    return (
        <form onSubmit={submit}>
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                    نوع ثبت نام
                </label>
                <div className="mt-2">
                    <FormItemSelect
                        id="type"
                        name="type"
                        autoComplete="type"
                        required
                        value={type}
                        onSubmit={submit}
                        onChange={e => {setType(e.target.value)}}
                        options={[
                            {value: 'company', label: 'حقوقی'},
                            {value: 'person', label: 'حقیقی'},
                        ]}
                    />
                </div>
            </div>

            <div className="intro-y col-span-12 flex items-center justify-between mt-5 pt-5 w-full">
                <button
                    // onClick={onBack}
                    className="btn btn-secondary ">قبلی
                </button>
                <button
                    onClick={onSubmit}
                    className="flex  ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    مرحله بعد
                </button>
            </div>
        </form>
    );
};
import React, {useEffect} from "react";

import Form from '@/components/Form';

const FilterContainer = ({form = {}, filters: providedFilters = [], setFilters, children, onClose}) => {

    const {setValue, reset, handleSubmit = () => {}} = form || {};

    useEffect(() => {
        providedFilters.forEach(({field, value}) => {
            setValue(field, value);
        })
    }, [providedFilters]);

    const onSubmit = (values) => {
        const finalValues = [];

        for (const key in values) {

            if (!values.hasOwnProperty(key) || !values[key]) continue;

            finalValues.push({
                field: key,
                operator: 'eq',
                value: values[key],
            })

        }

        setFilters(finalValues);
        onClose();
    }

    const onReset = () => {
        setFilters([...[]]);
        reset();
        onClose();
    }

    return (
        <Form.Container onSubmit={handleSubmit(onSubmit)}>
            <div className="relative gap-4 bg-white p-4 rounded-t-lg">
                {children}
            </div>
            <div className="bg-gray-50 p-4 flex justify-end gap-4 rounded-b-lg">
                <button
                    onClick={onReset}
                    className="text-sm w-24 border border-slate-300 rounded-lg hover:border-slate-500">بازنشانی
                </button>
                <button
                    type="submit"
                    className="text-sm flex w-24 ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    اعمال
                </button>
            </div>
        </Form.Container>
    );
};

export default FilterContainer;
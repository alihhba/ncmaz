import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import FormItemSelect from "@/components/Form/Item/Select";
import Actions from "./Actions";
import {useForm} from "@refinedev/react-hook-form";
import Form from '@/components/Form';
import departments from "@/modules/ticket/metadata/departments";
import {useBack} from "@refinedev/core";

export default ({slug, data, onBack, onSubmit}) => {

    const {control, handleSubmit} = useForm({
        values: data[slug] || {
            type: 'person'
        }
    });

    const goBack = useBack();

    const testSubmit = values => {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                    حالت ثبت نام
                </label>
                <div className="mt-2">
                    <Form.Item.Select
                        slug="type"
                        control={control}
                        validationSchema={{required: true}}
                        options={[
                            {value: 'company', label: 'حقوقی'},
                            {value: 'person', label: 'حقیقی'},
                        ]}
                    />
                </div>
            </div>

            <Actions.Container>
                <Actions.PrevStep
                    onClick={goBack}
                >بازگشت
                </Actions.PrevStep>
                <Actions.NextStep>
                    مرحله بعد
                </Actions.NextStep>
            </Actions.Container>
        </form>
    );
};
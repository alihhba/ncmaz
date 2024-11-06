import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import FormItemSelect from "@/components/Form/Item/Select";
import Actions from "@/modules/account/authentication/pages/register/components/Actions";
import {useForm} from "@refinedev/react-hook-form";
import Form from "@/components/Form";

export default ({slug, data, onBack, onSubmit}) => {

    const {register, handleSubmit, formState:{errors = {}}} = useForm({
        defaultValues: data[slug] || {}
    });

    return (
        <Form.Container onSubmit={handleSubmit(onSubmit)}>
            <Form.Item.Container stacked htmlFor="first_name" label="نام" errors={errors.first_name}>
                <Form.Item.Input
                    slug="first_name"
                    id="first_name"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>

            <Form.Item.Container stacked htmlFor="last_name" label="نام خانوادگی" errors={errors.last_name}>
                <Form.Item.Input
                    slug="last_name"
                    id="last_name"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>

            <Form.Item.Container stacked htmlFor="national_code" label="کد ملی" errors={errors.national_code}>
                <Form.Item.NationalCode
                    slug="national_code"
                    id="national_code"
                    type="number"
                    inputType="numeric"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>

            <Actions.Container>
                <Actions.PrevStep
                    onClick={onBack}
                >بازگشت
                </Actions.PrevStep>
                <Actions.NextStep>
                    مرحله بعد
                </Actions.NextStep>
            </Actions.Container>
        </Form.Container>
    );
};
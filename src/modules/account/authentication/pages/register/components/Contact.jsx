import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import FormItemSelect from "@/components/Form/Item/Select";
import Actions from "@/modules/account/authentication/pages/register/components/Actions";
import {useForm} from "@refinedev/react-hook-form";
import Form from '@/components/Form';

export default ({slug, data, onBack, onSubmit}) => {

    const {register, handleSubmit, formState: {errors = {}}} = useForm({
        defaultValues: data[slug] || {}
    });

    return (
        <Form.Container onSubmit={handleSubmit(onSubmit)}>
            {/*<div>*/}
            {/*    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">*/}
            {/*        شماره تلفن همراه*/}
            {/*    </label>*/}
            {/*    <div className="mt-2">*/}
            {/*        <Form.Item.Mobile*/}
            {/*            id="mobile"*/}
            {/*            slug="mobile"*/}
            {/*            autoComplete="mobile"*/}
            {/*            pattern="^09\d{9}$"*/}
            {/*            register={register}*/}
            {/*            validationSchema={{required: true}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Form.Item.Container stacked htmlFor="mobile" label="شماره تلفن همراه" errors={errors.mobile}>
                <Form.Item.Mobile
                    id="mobile"
                    slug="mobile"
                    autoComplete="mobile"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>

            <Form.Item.Container stacked htmlFor="email" label="ایمیل" errors={errors.email}>
                <Form.Item.Email
                    id="email"
                    slug="email"
                    type="email"
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
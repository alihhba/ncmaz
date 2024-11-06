import React, {useEffect, useState} from 'react';
import Link from "@/components/Link";
import Form from "@/components/Form";
import {useForm} from "@refinedev/react-hook-form";

export default ({mobile, onSubmit}) => {

    const {register, handleSubmit, formState: {errors = {}}} = useForm({
        defaultValues: {
            mobile,
        }
    });

    return (
        <Form.Container onSubmit={handleSubmit(onSubmit)}>
            <Form.Item.Container stacked htmlFor="mobile" label="شماره تلفن همراه" errors={errors.mobile}>
                <Form.Item.Mobile
                    id="mobile"
                    slug="mobile"
                    autoComplete="mobile"
                    register={register}
                    validationSchema={{required: true}}
                />
            </Form.Item.Container>
            {/*<div>*/}
            {/*    <label htmlFor="email" className="block text-sm font-medium text-gray-700">*/}
            {/*        شماره تلفن همراه*/}
            {/*    </label>*/}
            {/*    <div className="mt-2">*/}
            {/*        <input*/}
            {/*            id="mobile"*/}
            {/*            name="mobile"*/}
            {/*            autoComplete="mobile"*/}
            {/*            required*/}
            {/*            value={mobile}*/}
            {/*            onSubmit={submit}*/}
            {/*            pattern="^09\d{9}$"*/}
            {/*            onChange={e => {setMobile(e.target.value)}}*/}
            {/*            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="mt-8">
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    ارسال کد تایید
                </button>
            </div>

            <div className="flex items-center justify-between mt-6">
                <div className="text-sm">
                    <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
                        حساب کاربری ندارید؟ ایجاد کنید.
                    </Link>
                </div>
            </div>
        </Form.Container>
    );
};
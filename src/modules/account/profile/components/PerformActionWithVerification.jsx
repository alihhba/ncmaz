import React, {useEffect, useState} from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useCreate, useParsed, useUpdate} from "@refinedev/core";
import Form from "@/components/Form";
import useResourceForm from "@/hooks/useResourceForm";
import useResourceAction from "@/hooks/useResourceAction";
import {useForm} from "@refinedev/react-hook-form";
import SubmitWithVerification from '../components/Verification/Modal';
import VerificationModal from "../components/Verification/Modal";

const PerformActionWithVerification = ({afterSubmit, children, mobile, showVerification, setShowVerification, values, resource}) => {

    const {mutate: update} = useCreate();

    const finalSubmit = ({otp}) => {
        update({
                resource,
                values: {
                    ...values,
                    otp,
                },
                successNotification: () => ({
                    message: 'اطلاعات با موفقیت ثبت شد.',
                    description: 'اطلاعات کاربری با موفقیت ویرایش شد.',
                    type: 'success',
                    test: 'hi',
                }),
                errorNotification: () => ({
                    message: 'کد تایید وارد شده صحیح نمی باشد.',
                    description: 'لطفا کد تایید صحیح را وارد نمایید.',
                    type: 'error'
                })
            },
            {
                onSuccess: () => {
                    setShowVerification(false);

                    if (typeof afterSubmit === "function") {
                        afterSubmit();
                    }
                }
            });
    }

    return (
        <>
            {children}

            <VerificationModal
                open={showVerification}
                mobile={mobile}
                onSubmit={finalSubmit}
                onCancel={() => {
                    setShowVerification(false);
                }}
            />
        </>
    );
}

export default PerformActionWithVerification;
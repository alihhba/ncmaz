import React, {useEffect, useState} from "react";
import OtpInput from 'react-otp-input';
import PersianNumber from "@/utils/persianNumber.jsx";
import Actions from "@/modules/account/authentication/pages/register/components/Actions";
import {useApiUrl, useCustomMutation} from "@refinedev/core";

export default ({slug, data = {}, onBack, onSubmit}) => {

    const {mobile} = data['contact'] || {};

    const [otp, setOtp] = useState('');
    const [showResend, setShowResend] = useState(false);

    const [remainingTime, setRemainingTime] = useState(180);

    const countDown = () => {
        setRemainingTime(value => value ? value - 1 : value);
    }

    const apiUrl = useApiUrl();
    const {mutate: sendOtpMutate} = useCustomMutation();

    const sendOtp = ({mobile}) => {
        sendOtpMutate(
            {
                url: `${apiUrl}/send-verification`,
                method: 'post',
                values: {
                    mobile
                },
            }
        );
    };

    useEffect(() => {
        sendOtp({mobile});
    }, []);

    const onResend = () => {
        sendOtp({mobile});
        setRemainingTime(180);
        setShowResend(false);
    }

    useEffect(() => {
        const interval = setInterval(countDown, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!remainingTime) {
            setShowResend(true);
        }

    }, [remainingTime]);

    const RenderTimer = ({time}) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);


        return (
            <div className="flex items-ceter gap-2 text-slate-500" style={{direction: 'ltr'}}>
                <div><PersianNumber>{String(minutes).padStart(2, '0')}</PersianNumber></div>
                <div>:</div>
                <div><PersianNumber>{String(seconds).padStart(2, '0')}</PersianNumber></div>
            </div>
        )
    }

    return (
        <div>
            <p className="mb-6">لطفا کد پنج رقمی ارسال شده به <strong><PersianNumber>{mobile}</PersianNumber></strong> را وارد نمایید.</p>

            <div className="flex items-center justify-between">
                <button
                    className="text-sm text-primary-600 hover:text-primary-600/80 mb-3"
                    onClick={onBack}
                >ویرایش شماره همراه
                </button>

                {showResend ? (
                    <button
                        className="text-sm text-primary-600 hover:text-primary-600/80 mb-3"
                        onClick={onResend}
                    >ارسال مجدد</button>
                ) : (
                    <RenderTimer time={remainingTime} />
                )}
            </div>

            <div style={{direction: 'ltr'}}>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    inputStyle="!w-12 h-12 border border-slate-300 rounded-lg hover:border-slate-500 focus:!ring-primary-600 focus:border-primary-500"
                    containerStyle="flex gap-4 items-center justify-between"
                    shouldAutoFocus
                    inputType="number"
                    renderInput={(props) => <input {...props} />}
                />
            </div>

            <Actions.Container>
                <Actions.PrevStep
                    onClick={onBack}
                >بازگشت
                </Actions.PrevStep>
                <Actions.NextStep
                    onClick={() => {onSubmit({otp})}}
                >
                    ثبت نام
                </Actions.NextStep>
            </Actions.Container>
        </div>
    );
};
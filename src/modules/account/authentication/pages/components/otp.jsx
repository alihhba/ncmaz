import React, {useEffect, useState} from "react";
import OtpInput from 'react-otp-input';
import PersianNumber from "@/utils/persianNumber.jsx";

export default ({mobile, onEditMobile, onSubmit, onResendOtp}) => {

    const [otp, setOtp] = useState('');
    const [showResend, setShowResend] = useState(false);

    const [remainingTime, setRemainingTime] = useState(180);

    const countDown = () => {
        setRemainingTime(value => value ? value - 1 : value);
    }

    const onResend = () => {
        onResendOtp();
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
                    onClick={onEditMobile}
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

            <button
                onClick={() => {onSubmit(otp)}}
                type="submit"
                className="mt-12 flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
                ورود
            </button>
        </div>
    );
};
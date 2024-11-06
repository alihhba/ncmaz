import React, {useContext, useState} from "react";

import MobileStep from './components/mobile.jsx';
import OTPStep from './components/otp.jsx';
import {useApiUrl, useCustomMutation, useLogin, useNotification} from "@refinedev/core";
import {UserContext} from "@/contexts/UserContext.jsx";

export const LoginPage = () => {

    const [currentStep, setCurrentStep] = useState('mobile');

    const [data, setData] = useState({
        mobile: '',
        otp: '',
    });

    const apiUrl = useApiUrl();
    const {mutate: sendOtpMutate} = useCustomMutation();
    const {open: openNotification} = useNotification();
    const {mutate: login} = useLogin();
    const onMobileSubmit = ({mobile}) => {
        setData({...data, mobile});
        sendOtp({mobile});
        setCurrentStep('otp');
    }

    const onSubmitOTP = (otp) => {
        if (otp.length !== 5) {
            return;
        }

        verifyOtp({
            mobile: data.mobile,
            otp
        });
    }

    const onEditMobile = () => {
        setCurrentStep('mobile');
    };

    const sendOtp = ({mobile}) => {
        sendOtpMutate(
            {
                url: `${apiUrl}/send-verification`,
                method: 'post',
                values: {
                    mobile
                },
            },
            {
                onSuccess: (data, variable, context) => {
                    setCurrentStep('otp');
                    // openNotification?.({
                    //     type:'progress',
                    //     message: 'کد تایید با موفقیت ارسال شد.',
                    //     description: 'لطفا کد تایید ارسال شده را وارد نمایید یا پس از پایان زمان اعتبار کد تایید مجددا تلاش نمایید.',
                    // })
                },
                onError: (data, variable, context) => {

                }
            }
        );
    };

    const {updateRole} = useContext(UserContext);
    const verifyOtp = (data) => {
        login({
            ...data,
            updateRole
        });
    };

    return (
        <div>
            {currentStep === 'mobile' ? (
                <MobileStep mobile={data.mobile} onSubmit={onMobileSubmit}/>
            ) : null}

            {currentStep === 'otp' ? (
                <OTPStep
                    mobile={data.mobile}
                    onEditMobile={onEditMobile}
                    onSubmit={onSubmitOTP}
                    onResendOtp={sendOtp}
                />
            ) : null}
        </div>
    );
}
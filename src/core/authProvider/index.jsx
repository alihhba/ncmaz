import basicAuthProvider from "@/core/authProvider/basic";
import otpAuthProvider from "@/core/authProvider/otp";
import otpFaceAuthProvider from "@/core/authProvider/otpFake";
import headlessAuthProvider from "@/core/authProvider/headless";

import {apiUrl, axiosInstance} from "@/core/dataProvider/default";

export const authProviders =  {
    basic: basicAuthProvider(apiUrl, axiosInstance),
    otp: otpAuthProvider,
    otpFake: otpFaceAuthProvider,
    headless: headlessAuthProvider,
};


export default authProviders["basic"];
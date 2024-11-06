import React from "react";
import {useApiUrl, useCustom, useCustomMutation} from "@refinedev/core";
import Token from "@/utils/token.jsx";

const login = async ({mobile, otp, updateRole}) => {
    const apiUrl = useApiUrl();
    const {role, token} = await useCustom({
        url: `${apiUrl}/verify`,
        method: 'post',
        config: {
            payload: {
                mobile,
                otp,
            }
        }
    });

    if (!token) {
        return {
            success: false,
            error: {
                message: "خطا در ورود به سامانه",
                name: "کد تایید وارد شده صحیح نمی باشد.",
            },
        };
    }

    Token.set(token);
    updateRole(role);

    return {
        success: true,
        // redirectTo: "/",
    };

    // loginMutate(
    //     {
    //         url: `${apiUrl}/verify`,
    //         method: 'post',
    //         values: {
    //             mobile,
    //             otp,
    //         },
    //     },
    //     {
    //         onSuccess: (data, variable, context) => {
    //
    //         }
    //     }
    // );

    console.log({mobile, otp});

    if (otp !== "12345") {
        return {
            success: false,
            error: {
                message: "خطا در ورود به سامانه",
                name: "کد تایید وارد شده صحیح نمی باشد.",
            },
        };
    }

    if (mobile === "09111234567") {
        //customer
        // localStorage.setItem("role", "customer");
        // localStorage.setItem("role", "participant");
        updateRole("participant");
        return {
            success: true,
            // redirectTo: "/",
        };
    }

    if (mobile === "09121234567") {
        //accounting
        updateRole("accounting");
        return {
            success: true,
            // redirectTo: "/",
        };
    }

    if (mobile === "09131234567") {
        //support
        updateRole("support");
        return {
            success: true,
            // redirectTo: "/",
        };
    }

    if (mobile === "09141234567") {
        //admin
        updateRole("admin");

        return {
            success: true,
            // redirectTo: "/",
        };
    }

    return {
        success: false,
        error: {
            message: "خطا در ورود به سامانه",
            name: "کد تایید وارد شده صحیح نمی باشد.",
        },
    };
}
const basicAuthProvider = (apiUrl, axiosInstance) => {

    // const apiUrl = useApiUrl();
    // const {}

    // const apiUrl = "http:/localhost:8000";
    return (
        {
            login: async ({mobile, otp, updateRole}) => {

                // const {mutate: loginMutate} = useCustomMutation();
                // const apiUrl = useApiUrl();
                const {data} = await axiosInstance.post(`${apiUrl}/login`, {
                    mobile,
                    otp,
                });

                const {role, token} = data || {};

                if (!token) {
                    return {
                        success: false,
                        error: {
                            message: "خطا در ورود به سامانه",
                            name: "کد تایید وارد شده صحیح نمی‌باشد.",
                        },
                    };
                }

                Token.set(token);
                updateRole(role);

                return {
                    success: true,
                    // redirectTo: "/",
                };
            },
            register: async ({updateRole, ...data}) => {
                const {data: responseData} = await axiosInstance.post(`${apiUrl}/register`, data);

                const {role, token} = responseData || {};

                if (!token) {
                    return {
                        success: false,
                        error: {
                            message: "خطا در ثبت نام",
                            name: "کد تایید وارد شده صحیح نمی‌باشد.",
                        },
                    };
                }

                Token.set(token);
                updateRole(role);

                return {
                    success: true,
                }
            },
            updatePassword: async ({password}) => {
                if (password) {
                    //we can update password here
                    return {
                        success: true,
                        redirectTo: "/login",
                    };
                }
                return {
                    success: false,
                    error: {
                        message: "Update password failed",
                        name: "Invalid password",
                    },
                };
            },
            forgotPassword: async ({email}) => {
                if (email) {
                    //we can send email with forgot password link here
                    return {
                        success: true,
                        redirectTo: "/login",
                    };
                }
                return {
                    success: false,
                    error: {
                        message: "Forgot password failed",
                        name: "Invalid email",
                    },
                };
            },
            logout: async ({updateRole}) => {
                updateRole("guest");
                Token.remove();

                await axiosInstance.post(`${apiUrl}/logout`);

                return {
                    success: true,
                    redirectTo: "/login",
                };
            },
            onError: async (error) => {
                console.log("Error Catched");
                if (error.status === 401 || error.status === 403) {
                    console.log("Error Unauthenticated!");
                    Token.remove();
                    return {
                        logout: true,
                        redirectTo: "/login",
                        error,
                    };
                }

                return {};
            },
            check: async () => {
                const role = localStorage.getItem("role");

                if (!role || role === " guest") {
                    return {
                        authenticated: false,
                        redirectTo: "/login",
                        error: {
                            message: "لطفا وارد سامانه شوید.",
                            name: "عدم دسترسی",
                        },
                    };
                }

                const token = Token.get();

                let tokenIsValid = false;

                await axiosInstance
                    .get(`${apiUrl}/current-user`, {
                        headers: {
                            Authorization: Token.get(),
                        }
                    })
                    .then(() => {
                        tokenIsValid = true;
                    })
                    .catch(() => {
                        tokenIsValid = false;
                    });

                if (Token.exists() && tokenIsValid) {
                    axiosInstance.defaults.headers.common = {
                        Authorization: token,
                        Accept: 'application/json',
                    };
                    return {
                        authenticated: true,
                    };
                } else {
                    return {
                        authenticated: false,
                        error: {
                            message: "لطفا وارد سامانه شوید.",
                            name: "عدم دسترسی",
                        },
                        redirectTo: '/login',
                        logout: true,
                    };
                }
            },
            getPermissions: async () => ["admin"],
            getIdentity: async () => {
                let response = null;

                await axiosInstance
                    .get(`${apiUrl}/current-user`, {
                        // headers: {
                        //     Authorization: Token.get(),
                        // }
                    })
                    .then((data) => {
                        response = data?.data?.data || {};
                    })
                    .catch(() => {
                        response = {
                            role: 'guest',
                        }
                    });

                if (response) {
                    return response;
                }

                // return data?.data;
            },
        }
    );
};

export default basicAuthProvider;
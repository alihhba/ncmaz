import React from 'react'
import logo from "@/assets/logo.svg";
import splashImage from "@/assets/images/splash.jpg";
const AuthLayout = ({children}) => {

    return (
        <div className="flex min-h-screen">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 2xl:px-48">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="mb-6">
                        <img
                            className="h-36 w-auto mx-auto mb-24"
                            src={logo}
                        />
                    </div>

                    {children}

                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                {/*<img*/}
                {/*    className="absolute inset-0 h-full w-full object-cover"*/}
                {/*    src={splashImage}*/}
                {/*    alt=""*/}
                {/*/>*/}
                <div
                    className="absolute inset-0 h-full w-full object-cover bg-primary-600"
                />
            </div>
        </div>
    );
};

export default AuthLayout;
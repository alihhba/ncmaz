import React from "react";
import {Toaster} from "react-hot-toast";
import classNames from "@/utils/classNames";
import Notification from "@/components/Notification/index";

export const NotificationContainer = ({children, className, ...restProps}) => {
    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-20"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {children}
            </div>
            {/*<Toaster*/}
            {/*    position="top-right"*/}
            {/*    reverseOrder={false}*/}
            {/*    gutter={8}*/}
            {/*    containerClassName="flex w-full flex-col items-center space-y-4 sm:items-end"*/}
            {/*    containerStyle={{*/}
            {/*        position: 'relative',*/}
            {/*    }}*/}
            {/*    toastOptions={{*/}
            {/*        // Define default options*/}
            {/*        className: '',*/}
            {/*        duration: 500000,*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};

export default NotificationContainer;
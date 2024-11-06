import React from "react";
// import { NotificationProvider } from "@refinedev/core";
import { toast } from "react-hot-toast";
import Notification from "@/components/Notification";
// import { UndoableNotification } from "../components/undoableNotification";

export const notificationProvider = {
    open: ({ key, message, type, undoableTimeout, cancelMutation, description, ...restProps }) => {


        // console.log(restProps);
        // if (type === "progress") {
        //     if (toast.isActive(key)) {
        //         toast.update(key, {
        //             progress: undoableTimeout && (undoableTimeout / 10) * 2,
        //             render: (
        //                 <UndoableNotification
        //                     message={message}
        //                     cancelMutation={cancelMutation}
        //                 />
        //             ),
        //             type: "default",
        //         });
        //     } else {
        //         toast(
        //             <UndoableNotification
        //                 message={message}
        //                 cancelMutation={cancelMutation}
        //             />,
        //             {
        //                 toastId: key,
        //                 updateId: key,
        //                 closeOnClick: false,
        //                 closeButton: false,
        //                 autoClose: false,
        //                 progress: undoableTimeout && (undoableTimeout / 10) * 2,
        //             },
        //         );
        //     }
        // } else {
        //     if (toast.visible(key)) {
        //         toast.update(key, {
        //             render: message,
        //             closeButton: true,
        //             autoClose: 5000,
        //             type,
        //         });
        //     } else {
        const titleTranslates = {
            "notifications.createSuccess" : "اطلاعات با موفقیت ثبت شد.",
            "notifications.editSuccess" : "اطلاعات با موفقیت به‌روزرسانی شد.",
            "notifications.deleteSuccess" : "اطلاعات با موفقیت حذف شد.",
            "notifications.createError": "ثبت اطلاعات با خطا مواجه شد.",
            "notifications.editError": "به‌روزرسانی اطلاعات با خطا مواجه شد.",
            "notifications.deleteError": "حذف اطلاعات با خطا مواجه شد.",
            "notifications.error": "درخواست شما با خطا مواجه شد.",
        };

        const descriptionTranslates = {
            "notifications.success": " ",
            "notifications.error": " ",
            "Server Error": "خطای سرور",
        }
                toast.custom(t => (
                    <Notification
                        {...restProps}
                        type={type}
                        title={titleTranslates[message] || message}
                        description={descriptionTranslates[description] || description}
                        id={key}
                        toast={t}
                        dismiss={() => {toast.remove(t.id)}}
                    />
                ), {
                    id: key,
                    // type,
                });

        // toast.custom(translates[message] || message, {
        //     id: key,
        //     type,
        // });
            // }
        // }
    },
    close: (key) => toast.dismiss(key),
};

export default notificationProvider;
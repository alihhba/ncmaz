import React, {useState} from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";
import Placeholder from "@/components/Placeholder";
import ServerSpecification from "@/modules/server/components/specifications/sections";
import ImageSelect from "@/modules/server/components/specifications/partials/image-select";
import {ModalConfirmDefault} from "@/components/Modal/Confirm/Default";
import {useModal, useUpdate} from "@refinedev/core";

const ServerRebuild = ({data, className, ...restProps}) => {

    const [image, setImage] = useState();
    const {visible, show, close} = useModal();

    const {name} = data || {};

    const {mutate: update} = useUpdate();

    const performAction = () => {
        update({
            resource: "servers",
            id: data.id,
            values: {
                image_id: image.id,
            },
            successNotification: ()=>({
                type: 'success',
                message: 'سرور با موفقیت بازسازی شد.'
            })
        }, {
            onSuccess: close,
        })
    };

    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            <Placeholder.Card
                title="بازسازی"
                icon="arrows-pointing-out"
                meta={(
                    <button
                        onClick={show}
                        className="flex ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                        تغییر سیستم عامل
                    </button>
                )}
            >
                <ImageSelect
                    title="لطفا جهت بازسازی سرور، یک سیستم عامل را انتخاب نمایید."
                    onChange={setImage}
                />
                <div className="mb-6" />

                <ModalConfirmDefault
                    onClose={close}
                    open={visible}
                    icon="arrows-pointing-out"
                    title="بازسازی"
                    description="آیا از تغییر سیستم عامل سرور اطمینان دارید؟ در صورت تغییر، تمامی اطلاعات سرور بازنشانی خواهد شد."
                    onConfirm={performAction}
                />
            </Placeholder.Card>
        </div>
    );
};

export default ServerRebuild;
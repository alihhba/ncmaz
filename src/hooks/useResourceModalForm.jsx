import React from "react";
import {useResourceForm} from "@refinedev/react-hook-form";

const valuesHasFile = values => {
    console.log(values);

    for (const key in values) {
        if (!values.hasOwnProperty(key)) {
            continue;
        }
        if (typeof values[key] === "undefined") {
            continue;
        }
        if (values[key] instanceof FileList || values[key] instanceof File) {
            return true;
        }
    }

    return false;
}

const prepareFormData = values => {
    const formData = new FormData();
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            if (typeof values[key] === "undefined") {
                continue;
            }
            if (values[key] instanceof FileList) {
                formData.append(key, values[key][0]);
            } else {
                formData.append(key, values[key]);
            }
        }
    }

    return formData;
};

const useResourceForm = (props) => {

    const {resource, id, action, ...restProps} = props;

    const {
        refineCore: {onFinish, formLoading, queryResult, ...restRefineCoreProps},
        handleSubmit,
        setValue,
        ...restUseFormProps
    } = useResourceForm({
        refineCoreProps: {
            // resource: "flavors",
            // id: 10,
            resource,
            id,
            action,
        },
        ...restProps,
    });


    const data = queryResult?.data?.data?.data || {};

    const onSubmit = handleSubmit((values => {

        // console.log(values);
        // console.log(valuesHasFile(values));

        return onFinish(valuesHasFile(values) ? prepareFormData(values) : values);
    }));

    const loading = formLoading;

    const setDefaultValues = values => {
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                setValue(key, values[key]);
            }
        }
    };

    return {
        refineCore: {onFinish, formLoading, queryResult, ...restRefineCoreProps},
        handleSubmit,
        setValue,
        ...restUseFormProps,
        data,
        loading,
        onSubmit,
        setDefaultValues,
    };
};

export default useResourceForm;
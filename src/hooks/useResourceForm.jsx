import React from "react";
import {useForm} from "@refinedev/react-hook-form";
import {useUpdate} from "@refinedev/core";

const valuesHasFile = values => {
    console.log(values);

    for (const key in values) {
        if (!values.hasOwnProperty(key)) {
            continue;
        }
        if (typeof values[key] === "undefined") {
            continue;
        }
        if ((values[key] instanceof FileList && values[key].length) || values[key] instanceof File) {
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
                Array.from(values[key]).forEach((file => {
                    formData.append(`${key}[]`, file);
                }))
            } else {
                formData.append(key, values[key]);
            }
        }
    }

    return formData;
};

const useResourceForm = (props) => {

    const {resource, id, action, refineCoreProps = {}, ...restProps} = props;

    const {
        refineCore: {onFinish, formLoading, queryResult, ...restRefineCoreProps},
        handleSubmit,
        setValue,
        ...restUseFormProps
    } = useForm({
        refineCoreProps: {
            // resource: "flavors",
            // id: 10,
            resource,
            id,
            action,
            ...refineCoreProps
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
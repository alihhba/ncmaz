import React from "react";
import Form from "@/components/Form";
import {Controller} from "react-hook-form";

const FormItemSelectController = ({slug, control, validationSchema, ...restProps}) => {

    console.log(validationSchema);

    return (
        <Controller
            control={control}
            name={slug}
            rules={validationSchema}
            render={({field: {onChange, onBlur, value, ref}}) => (
                <Form.Item.Select
                    {...restProps}
                    id={slug}
                    slug={slug}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    inputRef={ref}
                />
            )}
        />
    );
};

export default FormItemSelectController;
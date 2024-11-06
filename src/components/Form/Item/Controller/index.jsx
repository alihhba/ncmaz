import {Controller} from 'react-hook-form';

export const FormItemController = (control, render, name) => {

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <ReactDatePicker
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched/blur
                    selected={value}
                />
            )}
        />
    );
};
import React, {useEffect, useState} from "react";
import Select from "@/components/Form/Item/Select";

const RangeSelect = ({value, onChange, children, className, ...restProps}) => {

    const [length, setLength] = useState("hour");

    useEffect(() => {
        if (value) {
            setLength(value);
        }
    }, [value]);

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(length);
        }
    }, [length]);

    return (
        <Select className="w-36"
                value={length}
                onChange={setLength}
                options={[
                    {value: "hour", label: "ساعت گذشته"},
                    {value: "day", label: "روز گذشته"},
                    {value: "week", label: "هفته گذشته"},
                    {value: "month", label: "ماه گذشته"},
                ]}
        />
    );
};

export default RangeSelect;
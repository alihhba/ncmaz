import React from "react";
import useResourceAction from "@/hooks/useResourceAction";

const useSelect = ({resource, optionsMapping = {}, optionMap: providedOptionMap, ...restProps}) => {

    console.log(restProps);

    const {fetchList} = useResourceAction(resource)
    const {items} = fetchList({
        ...restProps,
    });

    const {label: labelSlug = "label", value: valueSlug = "value"} = optionsMapping || {};

    const optionMap = typeof providedOptionMap === "function"
        ? providedOptionMap
        : (item) => ({
            ...item,
            label: item[labelSlug],
            value: item[valueSlug],
        })

    const options = items.map(optionMap);

    return {
        items: options,
    };

};

export default useSelect;
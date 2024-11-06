import React from "react";
import {useOne} from "@refinedev/core";

const useFetchCurrent = ({
                             resource,
                             id,
                             ...restFetchCurrentProps
                         }) => {
    const result = useOne({
        resource,
        id,
    });

    return result?.data?.data?.data || {};
};

export default useFetchCurrent;
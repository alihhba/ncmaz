import React from "react";

const findItemBy = ({
    source = [],
    key = "slug",
    value
}) => {

    return source.find(({[key]: slug}) => slug === value) || {};
}

export default findItemBy;
import React, {forwardRef} from "react";
import {useLink} from "@refinedev/core";

export const Link = forwardRef((props, ref) => {
    const RouterLink = useLink();

    return <RouterLink {...props} ref={ref} />;
});

export default Link;
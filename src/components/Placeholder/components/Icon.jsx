import React from "react";

import classNames from "@/utils/classNames";

const Icon = ({type: icon, restProps}) => {
    return (
        <Icon
            type="carousel"
            className={classNames(
                current ? 'text-white' : 'text-cyan-200 group-hover:text-white',
                'me-3 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
        />
    );
}
export default Icon;
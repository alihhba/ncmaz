import ServerSpecificationDatacenter from './datacenter';

import React from "react";
import classNames from "@/utils/classNames";
import ServerSpecificationImage from "@/modules/server/components/specifications/sections/image";
import ServerSpecificationFlavor from "@/modules/server/components/specifications/sections/flavor";
import ServerSpecificationAccessControl from "@/modules/server/components/specifications/sections/access-control";
import ServerSpecificationSubmit from "@/modules/server/components/specifications/sections/submit";

const ServerSpecification = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

ServerSpecification.Datacenter = ServerSpecificationDatacenter;
ServerSpecification.Image = ServerSpecificationImage;
ServerSpecification.Flavor = ServerSpecificationFlavor;
ServerSpecification.AccessControl = ServerSpecificationAccessControl;
ServerSpecification.Submit = ServerSpecificationSubmit;

export default ServerSpecification;
import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";

const ServerConsole = ({className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            Console
        </div>
    );
};

export default ServerConsole;
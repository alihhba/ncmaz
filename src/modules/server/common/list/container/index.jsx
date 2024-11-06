import React from "react";
import classNames from "@/utils/classNames";

const ListContainer = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("w-full overflow-x-scroll xl:overflow-x-hidden scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-slate-200 scrollbar-thumb-slate-400", className)}
            {...restProps}
        >
            <table className="min-w-full bg-white">
                {children}
            </table>
        </div>
    );
};

export default ListContainer;
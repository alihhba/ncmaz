import React from "react";
import classNames from "@/utils/classNames";
import FormAction from "@/components/Form/Action";

export const FormContainer = ({children, withDivide = false, withAction = false, loading, className, ...restProps}) => {
    return (
        <form
            className={classNames("space-y-4 px-4 sm:px-0", withDivide ? "divide-y divide-gray-200" : "", className)}
            {...restProps}
        >
            {children}
            {/*{loading ? 'loading ...' : null}*/}
            {withAction ? (
                <FormAction loading={loading}/>
            ) : null}
        </form>
    );
};
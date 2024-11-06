import React from "react";

const Section = ({children, restProps}) => {
    return (
        <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center font-bold">
                {children}
            </div>
        </div>
    );
}
export default Section;
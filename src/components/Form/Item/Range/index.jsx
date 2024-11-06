import React, {useEffect, useState} from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";

// export const FormItemRange = ({slug, validationSchema = {}, register = () => ({}), disabled, className, ...restProps}) => {
//     return (
//         <input
//             type="text"
//             className={classNames(
//                 "block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
//                 disabled ? 'bg-gray-100' : '',
//                 className
//             )}
//             disabled={disabled}
//             {...register(slug, validationSchema)}
//             {...restProps}
//         />
//     );
// };

export const FormItemRange = ({
                                  options: items = [], value, onChange: mainOnChange = () => {
    }, ...restProps
                              }) => {

    // const [selectedItem, setSelected] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (typeof mainOnChange === "function") {
            mainOnChange(items[currentIndex]?.value)
        }
    }, [currentIndex]);

    useEffect(() => {
        setCurrentIndex(items.findIndex(({value: itemValue}) => itemValue === value));
    }, [items, value]);

    const max = items.length - 1;
    const percent = (currentIndex) / max * 100;

    return (
        <div className="relative" style={{direction: 'ltr'}}>
            {/*<div>{percent}</div>*/}
            {/*<div className="absolute h-1 bg-red-50" style={{width: `calc(${percent}% - 10px)`}} />*/}
            <input
                id="slider"
                onChange={e => setCurrentIndex(e.target.value)}
                className="accent-primary-600 bg-slate-200 appearance-none h-1 rounded-full w-full"
                // className="w-full cursor-pointer accent-primary-600 rounded-full bg-red-50"
                type="range"
                value={currentIndex}
                min={0}
                max={items.length - 1}
                {...restProps}
            />
        </div>
    );
}

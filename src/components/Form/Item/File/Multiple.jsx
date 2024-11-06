import React, {useEffect, useRef, useState} from "react";
import useFilePreview from "@/hooks/useImagePreview";
import classNames from "@/utils/classNames";

export const FormItemFileMultiple = ({
                                         source = [],
                                         hasPreview,
                                         slug,
                                         validationSchema = {},
                                         register = () => ({}),
                                         className,
                                         watch,
                                         mimes = ['jpg', 'png'],
                                         ...restProps
                                     }) => {

    const [showUpload, setShowUpload] = useState(true);

    // useEffect(() => {
    //     if (source && source.url) {
    //         setShowUpload(false);
    //     }
    // }, source);

    const inputField = useRef();
    const handleSelectFile = () => {
        // console.log(inputField);
        inputField.current.click();
    }

    const {ref, ...rest} = register(slug, validationSchema);

    const files = watch(slug, []);

    // const [filePreview] = hasPreview ? useFilePreview(file && file[0]) : [];
    console.log(source);
    console.log(files);

    const RenderFile = ({file}) => {
        const {size: fileSizeTemp = 0, name: fileName = ''} = file || {};
        const fileSize = `${Math.floor(fileSizeTemp / 1024)} KB`;

        return (
            <div className={classNames("w-full flex items-center justify-between text-sm py-2 px-3")}>
                {fileName ? (
                    <div className="flex items-center gap-2 text-slate-600">
                        <div style={{direction: 'ltr'}}>{fileName}</div>
                        <div style={{direction: 'ltr'}}>({fileSize})</div>
                    </div>
                ) : (
                    <a className="text-primary-600 hover:text-primary-800" target="_blank" href={source && source.url}>دریافت
                        فایل ({source && source.size})</a>
                )}
                <button
                    type="button"
                    className="border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-700 rounded-lg px-3 py-2"
                    onClick={() => {

                    }}>
                    حذف
                </button>
            </div>
        );
    }


    // useEffect(() => {
    //     if (file && file instanceof FileList && file.length) {
    //         setShowUpload(false);
    //     }
    // }, [file]);

    return (
        <div>
            {files && files.length ? (
                <div className="w-full border border-slate-300 rounded-lg divide-y mb-4">
                    {Array.from(files).map(file => <RenderFile file={file} />)}
                </div>
            ) : null}
            <div
                className={classNames("flex justify-center rounded-md border-gray-300", !showUpload ? `px-3 py-2 overflow-hidden border border-solid` : "px-6 pt-5 pb-6 border-2 border-dashed", className)}>
                {/*<img src={filePreview ?? source} alt=""*/}
                {/*     className={classNames(filePreview || source ? 'cursor-pointer' : 'hidden')}*/}
                {/*     onClick={handleSelectFile}/>*/}
                <div className={classNames("space-y-1 text-center")}>
                    {/*<div className={classNames("space-y-1 text-center")}>*/}
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex justify-center text-sm text-gray-600">
                        <div
                            className="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
                        >
                            <span onClick={handleSelectFile}>انتخاب فایل</span>
                            <input id={slug}
                                   type="file"
                                   multiple
                                   className="sr-only"
                                   ref={e => {
                                       inputField.current = e;
                                       // ref(e);
                                   }}
                                   accept={mimes.map(mime => `.${mime}`).join(", ") || "*"}
                                   {...rest}
                            />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">فرمت {mimes.map(item => item.toUpperCase()).join(', ')}</p>
                </div>
            </div>
        </div>
    );
};


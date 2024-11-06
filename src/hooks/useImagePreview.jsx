import { useEffect, useState } from "react";

export default function useFilePreview(file) {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        if (file) {
            const newUrl = URL.createObjectURL(file);

            if (newUrl !== imgSrc) {
                setImgSrc(newUrl);
            }

            return () => URL.revokeObjectURL(newUrl);
        }
    }, [file]);

    return [imgSrc, setImgSrc];
}
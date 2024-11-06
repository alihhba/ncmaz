import React, { useEffect, useRef, useState } from "react";
import checkInViewIntersectionObserver from "./isInViewPortIntersectionObserver";
import PlaceIcon from "./PlaceIcon";

const CustomImage = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "object-cover w-full h-full",
  ...args
}) => {
  const isMounted = useRef(false);
  const _containerRef = useRef(null);
  const _imageEl = useRef(null);

  const [__src, set__src] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const _initActions = () => {  
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current,
      distanceFromEnd: 0,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();
      return true;
    }
    _imageEl.current = new window.Image();
    if (_imageEl.current) {
      _imageEl.current.src = src;
      _imageEl.current.addEventListener("load", _handleImageLoaded);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    if (!isMounted.current) return;
    setImageLoaded(true);
    set__src(src);
  };

  useEffect(() => {
    isMounted.current = true;
    _initActions();
    return () => {
      isMounted.current = false;
      if (_imageEl.current) {
        _imageEl.current.removeEventListener("load", _handleImageLoaded);
      }
    };
  }, [src]);

  const renderLoadingPlaceholder = () => {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
      >
        <div className="h-2/4 max-w-[50%]">
          <PlaceIcon />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-Image ${containerClassName}`}
      data-nc-id="Image"
      ref={_containerRef}
    >
      {__src && imageLoaded ? (
        <img src={__src} className={className} alt={alt} {...args} />
      ) : (
        renderLoadingPlaceholder()
      )}
    </div>
  );
};

export default CustomImage;

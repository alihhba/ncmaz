import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LoadingVideo from "../loadingVideo/LoadingVideo";
import { Volume } from "lucide-react";

const MediaVideo = ({ videoUrl, isHover }) => {
  let _timeOut = null;
  const [isMuted, setIsMuted] = useState(true);
  const [showDescUnmuted, setShowDescUnmuted] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (_timeOut) clearTimeout(_timeOut);
    _timeOut = setTimeout(() => {
      setShowDescUnmuted(false);
    }, 2000);
    return () => {
      _timeOut && clearTimeout(_timeOut);
    };
  }, []);

  return (
    <div className="nc-MediaVideo">
      <ReactPlayer
        url={videoUrl}
        muted={isMuted}
        playing={isHover}
        style={{
          opacity: isPlaying ? 1 : 0,
        }}
        className={`absolute bg-neutral-900 inset-0`}
        width="100%"
        height="100%"
        onStart={() => setIsPlaying(true)}
      />
      <div
        className={`${
          isPlaying ? "opacity-0" : "opacity-100"
        } absolute w-full h-full bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0`}
      >
        <LoadingVideo />
      </div>
      <div
        className={`absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform nc-will-change-transform ${
          showDescUnmuted ? "ps-[6px] pe-2" : "w-6 hover:scale-125"
        }`}
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? (
          <>
            <i className="las la-volume-off"></i>
            {showDescUnmuted && (
              <span className="ms-1 inline-block text-[9px]">
                Click here to unmute
              </span>
            )}
          </>
        ) : (
          <Volume className="w-3 h-3 text-white" />
        )}
      </div>
    </div>
  );
};

export default MediaVideo;

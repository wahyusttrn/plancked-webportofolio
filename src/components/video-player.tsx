import { useState, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  thumbnailSrc?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, thumbnailSrc, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (document.fullscreenElement === null) {
      videoRef.current!.currentTime = 0;
    }
  };

  const handleClick = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.requestFullscreen();
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Couldn't enter fullscreen:", err);
    }
  };

  return (
    <div
      className={`relative cursor-pointer group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        playsInline
        muted
        loop
        controlsList="nodownload"
        poster={thumbnailSrc}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

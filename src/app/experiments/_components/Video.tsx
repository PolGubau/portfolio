"use client";
import { cn, useBoolean } from "pol-ui";

const Video = ({
  index,
  data: { mp4, date },
  width,
}: {
  index: number;
  data: {
    mp4: string;
    date: string;
  };
  width: number;
}) => {
  const videoName: string = mp4;
  const { value: loading, setFalse: stopLoading } = useBoolean(true);
  return (
    <div
      key={index}
      className={cn("project-cascade relative h-full w-full overflow-hidden rounded-lg bg-white dark:bg-black", {
        "animate-pulse": loading,
      })}
    >
      <video
        preload="none"
        autoPlay={true}
        onCanPlay={stopLoading}
        muted={true}
        loop={true}
        width={width}
        className="h-full w-full object-cover"
      >
        <source src={`/media/concepts/${videoName}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="absolute right-2 bottom-2 text-secondary-300 text-sm mix-blend-difference">{date}</p>
    </div>
  );
};

export default Video;

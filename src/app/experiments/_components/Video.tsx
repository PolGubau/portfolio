"use client";
import { cn, useBoolean } from "pol-ui";
interface VideoProps extends React.HTMLProps<HTMLVideoElement> {
  index: number;
  src: string;
  date: string;
}

const Video = (props: VideoProps) => {
  const { index, src, date, width, height } = props;
  const { value: loading, setFalse: stopLoading } = useBoolean(true);
  return (
    <div
      key={index}
      className={cn("project-cascade relative h-full w-full overflow-hidden rounded-lg bg-background", {
        "animate-pulse outline outline-secondary/50": loading,
      })}
    >
      <video
        preload="none"
        autoPlay={true}
        onCanPlay={stopLoading}
        style={{ ...props.style, maxWidth: "100%", height: "auto", objectFit: "cover", borderRadius: "0.5rem" }}
        muted={true}
        loop={true}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      >
        <source src={`/media/concepts/${src}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="absolute right-2 bottom-2 text-secondary-300 text-sm mix-blend-difference">{date}</p>
    </div>
  );
};

export default Video;

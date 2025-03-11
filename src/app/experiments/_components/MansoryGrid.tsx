"use client";
import { useMemo } from "react";
import Video from "./Video";
type VideoType = {
  mp4: string;
  date: string;
  title: string;
  height: number;
  width: number;
};
const videos: VideoType[] = [
  {
    mp4: "avatar",
    date: "2024-22-02",
    title: "avatar group",
    height: 720,
    width: 960,
  },
  {
    mp4: "boolean-card",
    date: "2024-11-17",
    title: "Boolean Card",
    height: 720,
    width: 1280,
  },
  {
    mp4: "carousel",
    date: "2024-29-07",
    title: "animated carousel",
    height: 720,
    width: 1280,
  },
  {
    mp4: "dynamic-number",
    date: "2024-24-07",
    title: "Dynamic number",
    height: 720,
    width: 960,
  },
  {
    mp4: "expand-button",
    date: "2024-11-07",
    title: "Expandable button",
    height: 720,
    width: 720,
  },
  {
    mp4: "follow",
    date: "2024-27-06",
    title: "Following Card",
    height: 576,
    width: 576,
  },
  {
    mp4: "follow-pointer",
    date: "2024-17-01",
    title: "Following pointer",
    height: 576,
    width: 1024,
  },
  {
    mp4: "fullscreen-menu",
    date: "2024-11-06",
    title: "Fullscreen bar",
    height: 720,
    width: 960,
  },
  {
    mp4: "grow-number",
    date: "2024-04-06",
    title: "Growing number",
    height: 720,
    width: 576,
  },
  {
    mp4: "hamburguer",
    date: "2024-15-04",
    title: "Hamburguer",
    height: 576,
    width: 576,
  },
  {
    mp4: "hold",
    date: "2024-13-05",
    title: "Timed button",
    height: 576,
    width: 1024,
  },
  {
    mp4: "kanban",
    date: "2023-20-11",
    title: "complete kanban",
    height: 576,
    width: 1024,
  },
  {
    mp4: "langarray",
    date: "2024-11-13",
    title: "Fullscreen bar",
    height: 720,
    width: 1280,
  },
  {
    mp4: "lang-selector",
    date: "2024-11-18",
    title: "language selector",
    height: 720,
    width: 1344,
  },
  {
    mp4: "magnetic",
    date: "2024-04-11",
    title: "magnetic button",
    height: 576,
    width: 1344,
  },
  {
    mp4: "names",
    date: "2024-09-09",
    title: "Names carousel",
    height: 576,
    width: 1344,
  },
  {
    mp4: "pagination",
    date: "2024-01-07",
    title: "Animated pagination",
    height: 576,
    width: 1344,
  },
  {
    mp4: "pop-images",
    date: "2024-01-08",
    title: "Images trigger",
    height: 576,
    width: 1344,
  },
  {
    mp4: "resize",
    date: "2024-01-10",
    title: "Resizeable contents",
    height: 864,
    width: 2016,
  },
  {
    mp4: "slide-cards",
    date: "2023-09-12",
    title: "Sliding cards",
    height: 576,
    width: 768,
  },
  {
    mp4: "slider",
    date: "2024-20-08",
    title: "Slider",
    height: 576,
    width: 1024,
  },
  {
    mp4: "svg-mask",
    date: "2024-08-07",
    title: "SVG mask animation",
    height: 720,
    width: 960,
  },
  {
    mp4: "switch",
    date: "2024-05-07",
    title: "friendly switch",
    height: 576,
    width: 1024,
  },
  {
    mp4: "toolbar",
    date: "2024-03-08",
    title: "animated toolbar",
    height: 576,
    width: 1024,
  },
  {
    mp4: "trackup",
    date: "2024-26-02",
    title: "Timed tabs",
    height: 720,
    width: 1680,
  },
];

export const MansoryGrid = () => {
  const dateOrdered = useMemo(() => {
    return videos.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }, []);

  return (
    <div className="columns-1 gap-4 space-y-4 md:columns-2">
      {dateOrdered.map((video, index) => (
        <div key={video.title} className="mb-4 break-inside-avoid">
          <Video
            src={video.mp4}
            width={232}
            date={video.date}
            index={index}
            style={{
              aspectRatio: `${video.width} / ${video.height}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

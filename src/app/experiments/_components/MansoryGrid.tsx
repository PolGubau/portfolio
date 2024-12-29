"use client";
import { Masonry } from "masonic";
import Video from "./Video";

const videos = [
  {
    mp4: "lang-selector",
    date: "2024-11-18",
    title: "language selector",
  },
  {
    mp4: "boolean-card",
    date: "2024-11-17",
    title: "Boolean Card",
  },
  {
    mp4: "langarray",
    date: "2024-11-13",
    title: "Fullscreen bar",
  },
  {
    mp4: "fullscreen-menu",
    date: "2024-11-06",
    title: "Fullscreen bar",
  },
  {
    mp4: "trackup",
    date: "2024-26-02",
    title: "Timed tabs",
  },
  {
    mp4: "avatar",
    date: "2024-22-02",
    title: "avatar group",
  },
  {
    mp4: "carousel",
    date: "2024-29-07",
    title: "animated carousel",
  },
  {
    mp4: "dynamic-number",
    date: "2024-24-07",
    title: "Dynamic number",
  },
  {
    mp4: "expand-button",
    date: "2024-11-07",
    title: "Expandable button",
  },
  {
    mp4: "follow-pointer",
    date: "2024-17-01",
    title: "Following pointer",
  },
  {
    mp4: "follow",
    date: "2024-27-06",
    title: "Following Card",
  },
  {
    mp4: "grow-number",
    date: "2024-04-06",
    title: "Growing number",
  },
  {
    mp4: "hamburguer",
    date: "2024-15-04",
    title: "Hamburguer",
  },
  {
    mp4: "hold",
    date: "2024-13-05",
    title: "Timed button",
  },
  {
    mp4: "kanban",
    date: "2023-20-11",
    title: "complete kanban",
  },
  {
    mp4: "magnetic",
    date: "2024-04-11",
    title: "magnetic button",
  },
  {
    mp4: "names",
    date: "2024-09-09",
    title: "Names carousel",
  },
  {
    mp4: "pagination",
    date: "2024-01-07",
    title: "Animated pagination",
  },
  {
    mp4: "pop-images",
    date: "2024-01-08",
    title: "Images trigger",
  },
  {
    mp4: "resize",
    date: "2024-01-10",
    title: "Resizeable contents",
  },
  {
    mp4: "slide-cards",
    date: "2023-09-12",
    title: "Sliding cards",
  },
  {
    mp4: "slider",
    date: "2024-20-08",
    title: "Slider",
  },
  {
    mp4: "svg-mask",
    date: "2024-08-07",
    title: "SVG mask animation",
  },
  {
    mp4: "switch",
    date: "2024-05-07",
    title: "friendly switch",
  },
  {
    mp4: "toolbar",
    date: "2024-03-08",
    title: "animated toolbar",
  },
];

const MansoryGrid = () => {
  const dateOrdered = videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // the most recent first
  return (
    <Masonry
      ssrWidth={300}
      ssrHeight={400}
      maxColumnCount={2}
      columnGutter={20}
      tabIndex={undefined}
      items={dateOrdered}
      render={Video}
    />
  );
};
export default MansoryGrid;

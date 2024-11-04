'use client';
import * as React from "react";
import { Masonry } from "masonic";
import Video from "./Video";

  
const videos = [{
  mp4: 'bar',
  date: '2021-05-20',
  title: 'Project bar',
}, {
  mp4: 'trackup',
  date: '2024-03-02',
  title: 'Timed tabs',
},{ 
    mp4: 'avatar',
  date: '2024-10-06',
  title: 'avatar group',
  }, {
    mp4: 'carousel',
  date: '2024-10-06',
  title: 'animated carousel',
  }, {
    mp4: 'dynamic-number',
  date: '2024-10-06',
  title: 'Dynamic number',
  }, {
    mp4: 'expand-button',
  date: '2024-10-06',
  title: 'Expandable button',
  }, {
    mp4: 'follow-pointer',
  date: '2024-10-06',
  title: 'Following pointer',
  }, {
    mp4: 'follow',
  date: '2024-10-06',
  title: 'Following Card',
  }, {
    mp4: 'grow-number',
  date: '2024-10-06',
  title: 'Growing number',
  }, {
    mp4: 'hamburguer',
  date: '2024-10-06',
  title: 'Hamburguer',
  }, {
    mp4: 'hold',
  date: '2024-10-06',
  title: 'Timed button',
  }, {
    mp4: 'kanban',
  date: '2024-10-06',
  title: 'complete kanban',
  }, {
    mp4: 'magnetic',
  date: '2024-10-06',
  title: 'magnetic button',
  }, {
    mp4: 'names',
  date: '2024-10-06',
  title: 'Names carousel',
  }, {
    mp4: 'pagination',
  date: '2024-10-06',
  title: 'Animated pagination',
  }, {
    mp4: 'pop-images',
  date: '2024-10-06',
  title: 'Images trigger',
  }, {
    mp4: 'resize',
  date: '2024-10-06',
  title: 'Resizeable contents',
  }, {
    mp4: 'slide-cards',
  date: '2024-10-06',
  title: 'Sliding cards',
  }, {
    mp4: 'slider',
  date: '2024-10-06',
  title: 'Slider',
  }, {
    mp4: 'svg-mask',
  date: '2024-10-06',
  title: 'SVG mask animation',
  }, {
    mp4: 'switch',
  date: '2024-10-06',
  title: 'friendly switch',
  }, {
    mp4: 'toolbar',
  date: '2024-10-06',
  title: 'animated toolbar',
  }]


  

export const MansoryGrid = () => {
  const dateOrdered = videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // the most recent first
  return (
  <Masonry ssrWidth={300} ssrHeight={400} maxColumnCount={2} columnGutter={20} tabIndex={undefined} items={dateOrdered} render={Video}  />
)};


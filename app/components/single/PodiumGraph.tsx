"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "2016",
    Entretaiment: 65,
    Horror: 26,
    Documental: 35,
    Informative: 27,
  },
  {
    name: "2018",
    Entretaiment: 60,
    Horror: 30,
    Documental: 49,
    Informative: 36,
  },
  {
    name: "2020",
    Entretaiment: 135,
    Horror: 56,
    Documental: 55,
    Informative: 68,
  },
  {
    name: "2022",
    Entretaiment: 160,
    Horror: 32,
    Documental: 85,
    Informative: 82,
  },
  {
    name: "2024",
    Entretaiment: 190,
    Horror: 44,
    Documental: 124,
    Informative: 95,
  },
  {
    name: "2026",
    Entretaiment: 210,
    Horror: 47,
    Documental: 134,
    Informative: 93,
  },
];

const PodiumGraph = () => {
  return <>Graph</>;
};

export default PodiumGraph;
// <LineChart width={600} height={400} data={data}>
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//     <Legend />
//     <Line
//       type="monotone"
//       dataKey="Horror"
//       stroke="#8884d8"
//       activeDot={{ r: 4 }}
//     />
//     <ReferenceLine x="2024" stroke="red" label="Now" />

//     <Line type="monotone" dataKey="Entretaiment" stroke="#82ca9d" />
//     <Line type="monotone" dataKey="Documental" stroke="#c5ca82" />
//     <Line type="monotone" dataKey="Horro" stroke="#c5ca82" />
//     <Line type="monotone" dataKey="Informative" stroke="#ca8282" />
//   </LineChart>

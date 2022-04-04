import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./DashBoard.css";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <section className="dashboard">
      <div>
        <LineChart width={500} height={400} data={data}>
          <Line dataKey="investment" stroke="#8884d8"></Line>
          <Line dataKey="revenue" stroke="#82ca9d"></Line>
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
      <div>
        {/* <ResponsiveContainer width="100%" height="100%">
          
        </ResponsiveContainer> */}
        <BarChart width={450} height={400} data={data}>
          <Bar dataKey="investment" fill="#8884d8"></Bar>
          <Bar dataKey="revenue" fill="#82ca9d"></Bar>
          <XAxis dataKey="month"></XAxis>
          <Legend />
          <YAxis></YAxis>
          <Tooltip />
        </BarChart>
      </div>
    </section>
  );
};

export default DashBoard;

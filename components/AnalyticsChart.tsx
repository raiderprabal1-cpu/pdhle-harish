"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { name:"Correct", value:80 },
  { name:"Wrong", value:20 },
];

const COLORS = ["#22c55e", "#ef4444"];

export default function AnalyticsChart(){

  return(

    <PieChart width={400} height={300}>

      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
      >

        {data.map((_, index) => (

          <Cell
            key={index}
            fill={COLORS[index]}
          />

        ))}

      </Pie>

      <Tooltip />

    </PieChart>

  );
}
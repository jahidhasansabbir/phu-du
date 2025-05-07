import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { getBooked } from "../utils";

const Chart = () => {
  const data = getBooked();

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 4},${y + height} ${x + width / 2},${y} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y} ${x + (3 * width) / 4},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  return (
    <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-3xl mb-10 mt-8">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} interval={0} tickCount={15}/>
          <YAxis className="" domain={[0, (dataMax) => dataMax + 550]} axisLine={false} tickCount={10} />
          <CartesianGrid strokeDasharray="5 5" />
          <Bar dataKey="consultation_fee" shape={<TriangleBar />}>
            {data.map((d, i) => (
              <Cell key={`cell-${i}`} fill={d.color} />
            ))}
            <LabelList dataKey="consultation_fee" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

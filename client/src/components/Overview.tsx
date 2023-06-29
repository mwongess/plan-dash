import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";

const data = [
  {
    name: "Project 1",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Project 2",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Project 3",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Project 4",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Project 5",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Project 6",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const Overview = () => {
  return (
    <div className="flex items-center">
      <ComposedChart width={750} height={450} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Overview;

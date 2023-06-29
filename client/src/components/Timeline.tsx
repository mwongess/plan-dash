import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
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
const Timeline = () => {
  return (
    <div>
        <LineChart width={750} height={450} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="pv of projects" type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line name="uv of projects" type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
    </div>
  )
}

export default Timeline
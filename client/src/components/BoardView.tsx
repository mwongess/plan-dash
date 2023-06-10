import Project from "./Project";

const BoardView = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="border-r border-[#393649]">
        <div className="border-b border-[#393649] pr-3 py-3">
          <h3>New Task</h3>
        </div>
        <div></div>
      </div>
      <div  className="border-r border-[#393649]">
        <div className="border-b border-[#393649] p-3 ">
          <h3>On Progress</h3>
        </div>
      </div>
      <div className="border-r border-[#393649] ">
        <div className="border-b border-[#393649] p-3 ">
          <h3>On Review</h3>
        </div>
        <p>vhjkl</p>
      </div>
      <div className="">
        <div className="border-b border-[#393649] p-3">
          <h3>Complete</h3>
        </div>
      </div>
    </div>
  );
};

export default BoardView;

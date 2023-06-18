import SaveBtn from "../SaveBtn/SaveBtn";

const NewProject = () => {
  return (
    <div className="">
      <form action="" className="bg-transparent flex flex-col  gap-[1.3rem]">
        <div>
          <p>Project Name</p>
          <input
            type="text"
            className="bg-transparent border h-[2.5rem] px-1 w-full border-[#393649] "
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            className="bg-transparent px-1  w-full border border-[#393649] "
            name=""
            id=""
            cols={30}
            rows={8}
          ></textarea>
        </div>
        <div className="flex justify-between">
          <div  className="flex gap-3">
            <div>
              <p>Platform</p>
              <select
                className="bg-transparent border h-[2rem] border-[#393649]"
                name=""
                id=""
              >
                {/* <option className="bg-[black]" value=""></option> */}
                <option className="bg-[black]" value="">
                  App
                </option>
                <option className="bg-[black]" value="">
                  Website
                </option>
              </select>
            </div>
            <div>
              <p>Scope</p>
              <select
                name=""
                id=""
                className="bg-transparent h-[2rem] border border-[#393649]"
              >
                <option className="bg-[black]" value="">
                  Frontend
                </option>
                <option className="bg-[black]" value="">
                  Backend
                </option>
                <option className="bg-[black]" value="">
                  Planning
                </option>
                <option className="bg-[black]" value="">
                  Design
                </option>
                <option className="bg-[black]" value="">
                  Research
                </option>
                <option className="bg-[black]" value="">
                  Other
                </option>
              </select>
            </div>
          </div>
          <SaveBtn/>
        </div>
      </form>
    </div>
  );
};

export default NewProject;

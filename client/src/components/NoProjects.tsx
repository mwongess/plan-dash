const NoProjects = () => {
  return (
    <div className=" flex flex-col  h-[50vh] justify-center  p-3 bg-gradient-to-l from-indigo-500 ">
      <div className="font-bold ">
        <h1 className="text-2xl text-[30px] mb-[1rem]">
          There are no projects to display!
        </h1>
      </div>
      <div className="bg-[url(./proj.png)] bg-no-repeat h-[90%] bg-right w-full ">
        <div>
          <p className="text-[20px]">
            This Project Manager App offers a comprehensive set of features
            designed to simplify the complexities of project management.
          </p>
           <p className="w-[60%] text-[18px]">
            Whether you're overseeing a small team or handling large-scale
            projects, this app empowers you with the tools and insights
            necessary to stay organized, productive, and in control.
          </p>
          <h1 className="font-2xl">Get started today ↙️</h1>
        </div>
      </div>
    </div>
  );
};

export default NoProjects;

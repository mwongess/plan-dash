import "./Loading.css";
const Loading: React.FC<{ height: string }> = ({ height }) => {
  return (
      <div className={"flex items-center justify-center w-full  " + height}>
        <div className="loader w-[2em] h-[2em]"></div>
      </div>
  );
};

export default Loading;

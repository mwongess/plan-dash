const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-2 border-red-700 text-red-700 px-4 py-3 rounded-[7px] mt-[0.5rem] relative mb-[0.7rem]"
      role="alert"
    >
      {/* <h1 className="font-bold text-2xl">Error</h1> */}
      <p className="text-xl">{message}</p>
    </div>
  );
};

export default Error;

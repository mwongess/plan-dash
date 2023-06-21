const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-2 border-red-400 text-red-700 px-4 py-3 rounded relative mb-[0.7rem]"
      role="alert"
    >
      <h1 className="font-bold text-xl">Error</h1>
      <p className="block sm:inline">{message}</p>
    </div>
  );
};

export default Error;

const Error: React.FC<{message: string}> = ({message}) => {
  return (
    <div
      className="bg-red-300 border border-red-400 text-red-700 px-4 py-3 rounded relative h-[8rem]"
      role="alert"
    >
      <h1 className="font-bold">Error</h1>
      <p className="block sm:inline">{message}</p>
    </div>
  );
};

export default Error;

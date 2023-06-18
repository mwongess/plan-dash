import { redirect } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-gray-300 h-64">
          {/* Content of the background div */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni
          cupiditate, quod optio dicta incidunt rem quis sunt, saepe ex mollitia
          quidem, laboriosam perspiciatis. Ipsa ex dicta laudantium eligendi
          quos!
        </div>
        <div className="absolute top-0 left-0 bg-red-500 w-[fit-content] h-16">
          {/* Content of the overlay div */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quasi non ullam repellendus cupiditate possimus autem explicabo
          assumenda quam ad ratione soluta, numquam odio modi magnam aliquam
          sapiente facere reiciendis!
        </div>
      </div>
    </>
  );
};

export const loader = async () => {
  // return redirect("/dashboard");
  return "";
};

export default Landing;

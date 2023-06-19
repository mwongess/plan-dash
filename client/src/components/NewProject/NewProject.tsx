import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectSchema } from "../../schemas/project.schema";
import { newProject } from "../../actions/project.actions";
import { IProject } from "../../types/project.types";
import SaveBtn from "../SaveBtn/SaveBtn";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(projectSchema),
  });

  
  const queryClient = useQueryClient();

  const newProjectMutation = useMutation({
    mutationFn: (project: IProject) => newProject(project),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      navigate('/dashboard')
    },
  });

  const onSubmitHandler = (data: FieldValues) => {
    newProjectMutation.mutate(data)
    reset()
  };
  return (
    <div className="">
      <form
        action=""
        className="bg-transparent flex flex-col  gap-[1.3rem]"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <p>Project Name</p>
          <input
            {...register("title")}
            type="text"
            className="bg-transparent border h-[2.5rem] px-1 w-full border-[#393649] "
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            {...register("description")}
            className="bg-transparent px-1  w-full border border-[#393649] "
            name="description"
            id=""
            cols={30}
            rows={8}
          ></textarea>
          {}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div>
              <p>Platform</p>
              <select
                {...register("platform")}
                className="bg-transparent border h-[2rem] border-[#393649]"
                name=""
                id=""
              >
                {/* <option className="bg-[black]" value=""></option> */}
                <option className="bg-[black]" value="App">
                  App
                </option>
                <option className="bg-[black]" value="Website">
                  Website
                </option>
              </select>
            </div>
            <div>
              <p>Scope</p>
              <select
                {...register("scope")}
                name=""
                id=""
                className="bg-transparent h-[2rem] border border-[#393649]"
              >
                <option className="bg-[black]" value="Frontend">
                  Frontend
                </option>
                <option className="bg-[black]" value="Backend">
                  Backend
                </option>
                <option className="bg-[black]" value="Planning">
                  Planning
                </option>
                <option className="bg-[black]" value="Design">
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
          <SaveBtn />
        </div>
      </form>
    </div>
  );
};

export default NewProject;

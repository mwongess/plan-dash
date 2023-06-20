import { usePlanDashContext } from "../../contexts/PlanDashContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectSchema } from "../../schemas/project.schema";
import { IProjectRequest } from "../../types/project.types";
import SaveBtn from "../SaveBtn/SaveBtn";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const { newProject } = usePlanDashContext()!;
  const queryClient = useQueryClient();

  const newProjectMutation = useMutation({
    mutationFn: (project: IProjectRequest) => newProject(project),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      navigate("/dashboard");
    },
  });

  const onSubmitHandler = (data: FieldValues) => {
    newProjectMutation.mutate(data as IProjectRequest);
    reset();
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
                name="platform"
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
                name="scope"
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
                <option className="bg-[black]" value="Research">
                  Research
                </option>
                <option className="bg-[black]" value="Other">
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

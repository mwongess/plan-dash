import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm, FieldValues } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { usePlanDashContext } from "../contexts/PlanDashContext";
import { projectSchema } from "../schemas/project.schema";
import { IProject, IProjectRequest } from "../types/project.types";
import Loading from "./Loading/Loading";
import SaveBtn from "./SaveBtn/SaveBtn";
import Error from "./Error";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const { project_id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { deleteProject } = usePlanDashContext()!;

  const project = useLoaderData() as IProject;
  useEffect(() => {
    setTitle(project.title);
    setDescription(project.description);
  }, [project]);

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const { updateProject } = usePlanDashContext()!;
  const queryClient = useQueryClient();

  const updateProjectMutation = useMutation({
    mutationFn: (project: IProjectRequest) =>
      updateProject(project, project_id!),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      navigate("/dashboard");
    },
  });

  const onSubmitHandler = (data: FieldValues) => {
    updateProjectMutation.mutate(data as IProjectRequest);
    reset();
  };

  const deleteProjectMutation = useMutation({
    mutationFn: (id: string | number) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      navigate("/dashboard");
    },
  });
  return (
    <div className="">
      <div></div>
      <div>
        {updateProjectMutation.isLoading ? (
          <Loading height="h-[2rem]" />
        ) : (
          <div className="b">
            {updateProjectMutation.isError ? (
              <Error message="Server Can't Be reached!!" />
            ) : null}
          </div>
        )}
      </div>
      <h1 className="text-xl mb-[0.7rem]">Update Project</h1>
      <form
        action=""
        className="bg-transparent flex flex-col  gap-[1.3rem] border border-[#fb9500] rounded mb-[1rem] p-3"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div>
          <p>Project Name</p>
          <input
            {...register("title")}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent border h-[2.5rem] px-1 w-full border-[#393649] rounded "
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            {...register("description")}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent px-1  w-full border border-[#393649] rounded "
            name="description"
            id=""
            cols={30}
            rows={7}
          ></textarea>
          {}
        </div>
        <div className="">
          <div>
            <SaveBtn />
          </div>
        </div>
      </form>
      <div>
        <h1 className="text-xl mb-[0.7rem]">Danger Zone</h1>
        <div className="flex flex-col gap-[1rem] border border-[red] rounded p-3 ">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg">Archive this project</h3>
              <p>Mark this repository as archived and read-only.</p>
            </div>
            <button className="rounded p-1 text-red-800 bg-red-200">
              Archive this Project
            </button>
          </div>
          <div className="flex items-center justify-between border-t border-[#393649]">
            <div>
              <h3 className="text-lg">Delete this project</h3>
              <p>
                Once you delete a repository, there is no going back. Please be
                certain.
              </p>
            </div>
            <button
              className=" rounded p-1 text-red-800 bg-red-200"
              onClick={() =>
                deleteProjectMutation.mutate(project.project_id as string)
              }
            >
              Delete this Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

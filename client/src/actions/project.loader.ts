export const ProjectLoader = async ({ params }: any) => {
  const { project_id } = params;
  const res = await fetch("http://localhost:3000/projects/" + project_id, {
    headers: {
      token: JSON.parse(localStorage.getItem("user") as string),
    },
  });
  const data = await res.json();
  return data[0];
};

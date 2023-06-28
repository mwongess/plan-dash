export const ProjectLoader = async({params}: any) => {
    const {project_id} = params
    if(project_id){
        const res = await fetch("http://localhost:3000/projects/"+ project_id )
        const data = await res.json()
        return data[0]
    }
    return []
}
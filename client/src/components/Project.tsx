import {ProjectsContext } from "../contexts/projectsContext"
import {useContext} from 'react'

const Project = () => {
  const {projects,newProject} = useContext(ProjectsContext)! 
  const scope = 'lkjhhjk'
  const title = 'lkjhg'

  newProject({scope, title})

  return (
    <div>{
      projects && projects.map((project,index)=>(
        <div key={index}>
          <p>{project.scope}</p>
          <p>{project.title}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Project
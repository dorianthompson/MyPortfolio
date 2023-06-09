import React, { useEffect, useState } from 'react';
import { projectsData, projectsNavigation } from './Data';
import ProjectsItems from './ProjectsItems';

const Projects = () => {
  const [item, setItem ] = useState({ name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === 'all'){
        setProjects(projectsData)
    } else {
        const  newProjects = projectsData.filter(project => {
            return project.category === item.name;
        });
        setProjects(newProjects)
    }                                                                   
  }, [item]);

  const handleClick = (e, index) => {
     setItem({ name : e.target.textContent });
     setActive(index);
  }

  return (
    <div>
        <div className="projects-filters">
            {projectsNavigation.map((item, index) => {
                return (
                    <span onClick={(e) => {
                        handleClick(e, index);
                    }} 
                    className={`${active === index ? 'active-project' : ""} projects-item`}
                    key={index} >{item.name}</span>
                );
            })}
        </div>

        <div className="projects-container container grid">
            {projects.map(item => {
                return <ProjectsItems item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default Projects
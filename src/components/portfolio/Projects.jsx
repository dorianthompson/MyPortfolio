import React from 'react';
import { projectsData, projectsNavigation } from './Data';
import ProjectsItems from './ProjectsItems';

const Projects = () => {
  return (
    <div>
        <div className="projects-filters">
            {projectsNavigation.map((item, index) => {
                return (
                    <span key={index} className="projects-item">{item.name}</span>
                );
            })}
        </div>

        <div className="projects-container container grid">
            {projectsData.map(item => {
                return <ProjectsItems item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default Projects
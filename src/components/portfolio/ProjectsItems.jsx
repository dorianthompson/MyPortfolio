import React from 'react'

const ProjectsItems = ({item}) => {
  const { id, image, title, link } = item;
  return (
    <div className="project-card" key={id}>
        <img src={image} alt='' className='project-img'/>
        <h3 className="project-title">{title}</h3>
        <a href={link} className="project-button" target='_blank'>
            Demo <i className="bx bx-right-arrow-alt"></i>
        </a>
    </div>
  )
}

export default ProjectsItems
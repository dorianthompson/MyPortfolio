import React from 'react'

const ProjectsItems = ({item}) => {
  const { id, image, title, category } = item;
  return (
    <div className="project-card" key={id}>
        <img src={image} alt='' className='work-img'/>
        <h3 className="work-title">{title}</h3>
        <a href="#" className="project-button">
            Demo <i className="bx bx-right-arrow-alt"></i>
        </a>
    </div>
  )
}

export default ProjectsItems
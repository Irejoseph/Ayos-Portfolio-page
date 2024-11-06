import React from 'react'

function ProjectsCard({ src, link, h3}) {
  return (
    <a href={link}>
          <img className='hover' src={src} alt={`${h3} logo`}/>
          <h3>{h3}</h3>
    </a>
  )
}

export default ProjectsCard

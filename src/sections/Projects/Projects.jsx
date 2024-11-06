import React from 'react'
import styles from './ProjectStyles.module.css'
import todo from '../../assets/todolist.png'
import ProjectsCard from './ProjectsCard'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectsCard 
          src={todo} 
          link="https://github.com/Irejoseph/Reactions/tree/main/Todo/todolist"
          h3={'Todo List'}
        />
      </div>        
    </section>
  )
}

export default Projects

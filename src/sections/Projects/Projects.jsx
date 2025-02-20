import React from 'react'
import styles from './ProjectStyles.module.css'
import todo from '../../assets/todolist.png'
import chowX from '../../assets/order-food.png'
import fit from '../../assets/courses.png'
import SolarE from '../../assets/Sun solar energy logo.jpeg'
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
          p={'An app to put your todo list together'}
        />
        <ProjectsCard
          src={chowX} 
          link="https://github.com/Irejoseph/Reactions/tree/Newproject/Foodapp/foodapp"
          h3={'Chow Xpress'}
          p={'An app to order food from various vendors around you'}
        />
        <ProjectsCard
          src={fit} 
          link=""
          h3={'FItfam'}
          p={'An app to help tailor, measure and schedule your fitness to your convenience'}
        />
        <ProjectsCard 
          src={SolarE}
          link=""
          h3={'Cheap Green Electricity'}
          p={'A landing page for a solar energy company'}
        />
      </div>        
    </section>
  )
}

export default Projects

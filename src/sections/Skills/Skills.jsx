import SkillList from '../../common/SkillList'
import styles from './SkillsStyles.module.css'

function Skills() {
    return <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}> 
           <SkillList skill='Html' />
           <SkillList skill='CSS' />
           <SkillList skill='JavaScript' />
           <SkillList skill='TypeScript' />
           <SkillList skill='React' />
           <SkillList skill='Angular' />
           <SkillList skill='Bootstrap' />
           <SkillList skill='Python' />   
        </div>
    </section>
}

export default Skills
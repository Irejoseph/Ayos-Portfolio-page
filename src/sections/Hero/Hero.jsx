import styles from './hero.module.css'
import avatar2 from '../../assets/avatar2.jpeg'
import flipicon from '../../assets/sun3337.svg'
import githubicon from '../../assets/github-light.svg'
import xIcon from '../../assets//twitter-light.svg'
import linkIcon from '../../assets/linkedin-light.svg'
import cv from '../../assets/josephresume.pdf'

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorThemeContainer}>
            <img 
              className={styles.hero}
              src={avatar2} 
              alt="Profile picture of Joseph Odenike" 
            />
            <img 
              className={styles.colorTheme} 
              src={flipicon} 
              alt="Color theme icon" 
            />
        </div>
        <div className={styles.info}>
            <h1>
                Joseph 
                <br />
                Odenike
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://github.com/Irejoseph" targets="_blank">
                  <img src={githubicon} alt="githubicon" />
                </a>
                <a href="https://x.com/jojocapsalot" targets="_blank">
                  <img src={xIcon} alt="X Icon" />
                </a>
                <a href="joseph-odenike-740a6a1b6" targets="_blank">
                  <img src={linkIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p>
                A data analyst with a passion for software development.
            </p>
            <a href={cv} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
import styles from './hero.module.css'
import avatar2 from '../../assets/avatar2.jpeg'
import light from '../../assets/sun.svg'
import dark from '../../assets/moon.svg'
import githubicon from '../../assets/github-light.svg'
import xIcon from '../../assets//twitter-light.svg'
import linkIcon from '../../assets/linkedin-light.svg'
import cv from '../../assets/josephresume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme  } = useTheme();
    
    const themIcon = theme === 'light' ? light : dark;

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
              src={light} 
              alt="Color theme icon"
              onClick={toggleTheme} 
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
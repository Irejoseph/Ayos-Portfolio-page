import styles from './HeroStyles.module.css'
import avatar2 from '../../assets/profilepicture.jpg'
import light from '../../assets/sun.svg'
import dark from '../../assets/moon.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import xdark from '../../assets/twitter-dark.svg'
import xlight from '../../assets//twitter-light.svg'
import linklight from '../../assets/linkedin-light.svg'
import linkdark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/josephresume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme  } = useTheme();
    const themeIcon = theme === 'light' ? light : dark;
    const githubIcon = theme === 'light' ? githublight : githubdark;
    const xIcon = theme === 'light' ? xlight : xdark;
    const linkIcon = theme === 'light' ? linklight : linkdark;
    
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
              src={themeIcon} 
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
                  <img src={githubIcon} alt="githubicon" />
                </a>
                <a href="https://x.com/jojocapsalot" targets="_blank">
                  <img src={xIcon} alt="X Icon" />
                </a>
                <a href="https://linkedin.com/in/joseph-odenike-740a6a1b6" targets="_blank">
                  <img src={linkIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p className={styles.profile}>
                A data analyst with a passion for software development.
            </p>
            <a href={cv} download>
                <button className='hover'>
                    CV
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
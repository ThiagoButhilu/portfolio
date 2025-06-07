import { BrowserRouter } from 'react-router-dom'
import { motion } from "framer-motion"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'


export function Intro() {
  return (
    <div className="container intro" id="home">
      <div className="hero-text">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Olá <img src={Hello} alt="Hello" width="20px"/>, Sou
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Thiago Araujo
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Software Engineer
        </motion.h3>
        
        <motion.p
          className="small-resume"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          1 Year Experience
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contato</NavHashLink>
          </BrowserRouter>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        />
            <div className='social-media'>
               <a
                    href="https://www.linkedin.com/in/codevinayak"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" />
                </a>
                    <a
                    href="https://github.com/CodeVinayak/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a
                    href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={whatsapp} alt="Whatsapp" />
                    </a>
                    <a
                    href="https://t.me/CodeVinayak"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={telegram} alt="telegram" />
                    </a> 
            </div>
        </div>
        <div>
            <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            >
            <img src={Illustration} alt='illustration'/>
            </motion.div>
      </div>
    </div>
  )
}
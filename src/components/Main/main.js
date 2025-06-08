import picture from '../../assets/Sample-PNG-Pic.png';
import html from '../../assets/html-icon.svg';
import css from '../../assets/css-icon.svg';
import js from '../../assets/js-icon.svg';
import bootstrap from '../../assets/bootstrap-icon.svg';
import react from '../../assets/react-icon.svg';

import { motion } from "framer-motion";


function Main() {
    return (
        <div className="container main" id='about' name='about'>
            <div style={{width: '50%'}}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0 }}
                >
                    <motion.label>
                        <h2>Sobre mim</h2>
                    </motion.label>
                        <p>Olá! Sou Thiago Araujo, desenvolvedor front-end apaixonado por criar interfaces modernas e experiências digitais memoráveis. Com 26 anos e uma paixão inabalável pela tecnologia, dedico-me a transformar designs em realidade através do código.</p>

                        <p>Como desenvolvedor front-end, sou especializado em criar soluções web inovadoras que combinam performance, acessibilidade e design de ponta. Meu foco está em desenvolver aplicações que não apenas funcionam perfeitamente, mas também proporcionam uma experiência única aos usuários.</p>

                        <p>Estou sempre em busca de novos desafios e oportunidades para expandir minhas habilidades técnicas, mantendo-me atualizado com as últimas tendências e tecnologias do mercado.</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0 }}
                >
                    <label><h2>Education</h2></label>
                    <p><h4>Master of Computer Applications (MCA)</h4>
                        Vellore Institute of Technology, Chennai | July 2023 - Present

                        8.09 CGPA</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0 }}
                >
                    <label><h2>Principais habilidades</h2></label>
                    <div className='container-img'>
                        <img src={html} alt='html'/>
                        <img src={css} alt='css'/>
                        <img src={js} alt='js'/>
                        <img src={bootstrap} alt='bootstrap'/>
                        <img src={react} alt='react'/>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <motion.img src={picture} alt='picture'/>
            </motion.div>
        </div>
    )
}
export default Main;
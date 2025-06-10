import githubIcon from '../../assets/github.svg'
import { motion } from "framer-motion"

export function Project() {
    return (
    <div className="project-container" id='projects'>
        <h1>Meus projetos</h1>
        <div className="container project" id='project' name='project'>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0,  transition: { duration: 0.5, delay: 0.2 } }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="card">
                <div className="card-header">
                    <img src={githubIcon} alt='github'/>
                    <img src={githubIcon} alt='github'/>
                </div>
                <div className="card-body">
                    <h2>Projeto</h2>
                    <p>Um projeto CRUD em React é uma aplicação que implementa as quatro operações básicas de manipulação de dados: Criar, Ler, Atualizar e Deletar buttercms.com. Este tipo de projeto é fundamental para um portfólio de desenvolvimento web, pois demonstra habilidades essenciais em manipulação de estado, gerenciamento de dados e interação com APIs.</p>
                </div>
                <div className="card-footer">
                    <p>React</p>
                    <p>MySql</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className="card">
                <div className="card-header">
                    <img src={githubIcon} alt='github'/>
                    <img src={githubIcon} alt='github'/>
                </div>
                <div className="card-body">
                    <h2>Projeto</h2>
                    <p>Um projeto CRUD em React é uma aplicação que implementa as quatro operações básicas de manipulação de dados: Criar, Ler, Atualizar e Deletar buttercms.com. Este tipo de projeto é fundamental para um portfólio de desenvolvimento web, pois demonstra habilidades essenciais em manipulação de estado, gerenciamento de dados e interação com APIs.</p>
                </div>
                <div className="card-footer">
                    <p>React</p>
                    <p>MySql</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className="card">
                <div className="card-header">
                    <img src={githubIcon} alt='github'/>
                    <img src={githubIcon} alt='github'/>
                </div>
                <div className="card-body">
                    <h2>Projeto</h2>
                    <p>Um projeto CRUD em React é uma aplicação que implementa as quatro operações básicas de manipulação de dados: Criar, Ler, Atualizar e Deletar buttercms.com. Este tipo de projeto é fundamental para um portfólio de desenvolvimento web, pois demonstra habilidades essenciais em manipulação de estado, gerenciamento de dados e interação com APIs.</p>
                </div>
                <div className="card-footer">
                    <p>React</p>
                    <p>MySql</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className="card">
                <div className="card-header">
                    <img src={githubIcon} alt='github'/>
                    <img src={githubIcon} alt='github'/>
                </div>
                <div className="card-body">
                    <h2>Projeto</h2>
                    <p>Um projeto CRUD em React é uma aplicação que implementa as quatro operações básicas de manipulação de dados: Criar, Ler, Atualizar e Deletar buttercms.com. Este tipo de projeto é fundamental para um portfólio de desenvolvimento web, pois demonstra habilidades essenciais em manipulação de estado, gerenciamento de dados e interação com APIs.</p>
                </div>
                <div className="card-footer">
                    <p>React</p>
                    <p>MySql</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className="card">
                <div className="card-header">
                    <img src={githubIcon} alt='github'/>
                    <img src={githubIcon} alt='github'/>
                </div>
                <div className="card-body">
                    <h2>Projeto</h2>
                    <p>Um projeto CRUD em React é uma aplicação que implementa as quatro operações básicas de manipulação de dados: Criar, Ler, Atualizar e Deletar buttercms.com. Este tipo de projeto é fundamental para um portfólio de desenvolvimento web, pois demonstra habilidades essenciais em manipulação de estado, gerenciamento de dados e interação com APIs.</p>
                </div>
                <div className="card-footer">
                    <p>React</p>
                    <p>MySql</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 }}}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="card">
                <div className="card-header">
                    <img src={githubIcon} alt='github'/>
                    <img src={githubIcon} alt='github'/>
                </div>
                <div className="card-body">
                    <h2>Projeto</h2>
                    <p>Um projeto CRUD em React é uma aplicação que implementa as quatro operações básicas de manipulação de dados: Criar, Ler, Atualizar e Deletar buttercms.com. Este tipo de projeto é fundamental para um portfólio de desenvolvimento web, pois demonstra habilidades essenciais em manipulação de estado, gerenciamento de dados e interação com APIs.</p>
                </div>
                <div className="card-footer">
                    <p>React</p>
                    <p>MySql</p>
                </div>
            </motion.div>
        </div>
    </div>
    );
}
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'



function Footer() {
    return(
        <div className="footer_container">
           <div>
            
           </div>
           <div>
                <p>© 2025 Thiago Araujo. All rights reserved.</p>   
           </div>
           <div className='img_container '>
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
        </div>
    )
}

export default Footer
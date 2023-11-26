import styles from './styles.module.css'
import { TypeAnimation } from 'react-type-animation'

export default function Inicio(){
    return(
        <section className={styles.inicioSection}>
            <div>
                <h2>Olá! Bem vindo à Binha Acessórios.</h2>
                <h2>Aqui você encontrará 
                    <span>
                        <TypeAnimation
                            sequence={[
                                " Pulseiras.", 
                                1000,
                                " Colares.",
                                1000,
                                " Chaveiros.",
                                1000,
                                " Puxadores.",
                                1000,
                                " Canetas personalizadas.",
                                1000,
                                " E muito mais!",
                                1000
                             ]}
                             wrapper="span"
                             speed={50}
                             repeat={Infinity}

                        />                        
                    </span>
                </h2>
                            
            </div>
        </section>
    )
}
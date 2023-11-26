import LinkHeader from "./LinkHeader"
import styles from "./styles.module.css"
import logo from "../../assets/logo-binha.jpg"


export default function Header(){
    return (
        <div className={styles.header}>
            <div >
                <img className={styles.imageHeader} src={logo} alt="Logo de Binha acessórios" />
            </div>
            <div className={styles.linksHeader}>
                <LinkHeader to="/" text="Início"/>
                <LinkHeader to="/contatos" text="Contatos" />
                <LinkHeader to="/sobrenos" text="Sobre nós"/>
            </div>            
        </div>
    )
}
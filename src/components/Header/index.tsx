import LinkHeader from "./LinkHeader"
import styles from "./styles.module.css"


export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.imageHeader}>
                <img src="Logo" alt="logo" />
            </div>
            <div className={styles.linksHeader}>
                <LinkHeader to="/" text="Início"/>
                <LinkHeader to="/contatos" text="Contatos" />
                <LinkHeader to="/sobrenos" text="Sobre nós"/>
            </div>            
        </div>
    )
}
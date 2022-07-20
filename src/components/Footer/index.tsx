import styles from './Footer.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.texto}>
                Rua Vergueiro, 3185. Vila Mariana | SP <br />
                aluroni@alura.com.br
            </h3>
            <Logo />
        </footer>
    )
}
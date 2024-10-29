import Link from 'next/link';
import styles from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">Calculadora de Impostos Mensais</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/">Calculadora</Link>
                </li>
                <li>
                    <Link href="/rules">Regras</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

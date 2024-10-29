// components/NavBar.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">Imposto No Brasil</Link>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                <li>
                    <Link href="/">Calculadora</Link>
                </li>
                <li>
                    <Link href="/rules">Regras</Link>
                </li>
            </ul>
            <div
                className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    );
};

export default NavBar;

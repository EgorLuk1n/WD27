import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from '../../utils/routes';
import styles from '../../styles/Header.module.css';
import Navbar from "./Navbar.jsx";

import LOVE from '../../image/love.jpg';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
            <div className={styles.container}>
                <Link to={ROUTES.HOME} className={styles.link}>
                    <h1 className={styles.title}><span>Д</span>ОРОГИЕ<br/> РОДНЫЕ и <span>Д</span>РУЗЬЯ!</h1>
                </Link>
                <div className={styles.content}>
                    <img src={LOVE} alt="Love" className={styles.image}/>
                    <div className={styles.circleLeft}><span className={styles.lineLeft}>
                        <p className={styles.textTop}>Когда?</p>
                        <p className={styles.textBottom}>27.07.2024</p>
                    </span></div>
                    <div className={styles.circleRight}><span className={styles.lineRight}>
                        <p className={styles.textTop}>Во сколько?</p>
                        <p className={styles.textBottom}>16:00</p>
                    </span></div>
                </div>
            </div>


        </header>
    );
};

export default Header;
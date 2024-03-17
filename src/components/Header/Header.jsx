import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from '../../utils/routes';
import styles from '../../styles/Header.module.css';


import LOVE from '../../image/love.jpg';
import Navbar from "./Navbar.jsx";

const Header = () => {

    return (
        <header className={styles.header}>
            <Navbar />
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
                <div className={styles.aside}>
                    <h2 className={styles.subject}>Мы приглашаем вас на свадьбу!</h2>

                    <p className={styles.subtitle}>
                        И мы не представляем этот праздник без вас, близких и дорогих нам людей. Разделите с нами нашу
                        радость и подарите свою поддержку и добрые пожелания. Будем очень рады вашему присутствию!
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>ПОДТВЕРДИТЬ ПРИСУТСТВИЕ</button>
                        <button className={styles.button}>УЗНАТЬ БОЛЬШЕ О МЕРОПРИЯТИИ</button>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Header;
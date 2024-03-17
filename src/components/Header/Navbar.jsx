import React, {useState} from 'react';
import style from '../../styles/Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import LOGO from '../../image/VK.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const overflow = () => {
        if (!nav) {
            setNav(!nav)
            document.body.style.overflowY = "hidden";
        } else {
            setNav(!nav)
            document.body.style.overflowY = "scroll";
        }
    }
    return (

        <div className={style.navbar}>
            <ul
                className={
                    nav ? [style.menu, style.active].join(' ') : [style.menu]
                }
            >
                <li>
                    <a href='##'>О нас</a>
                </li>
                <li>
                    <a href='##'>Трансфер</a>
                </li>
                <li>
                    <a href='##'>Дресс-код</a>
                </li>
                <li className={style.logo__image}>
                    <a href='##'> <img src={LOGO} alt='/'/></a>
                </li>
                <li>
                    <a href='##'>Роспись</a>
                </li>
                <li>
                    <a href='##'>Банкет</a>
                </li>
                <li>
                    <a href='##'>Контакты</a>
                </li>
            </ul>
            <div onClick={() => overflow()} className={style.mobile_btn}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
        </div>
    );
};

export default Navbar;
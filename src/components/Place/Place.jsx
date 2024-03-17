import React from 'react';
import styles from '../../styles/Place.module.css';

const Place = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}><span>
                М
            </span>
                есто проведения
            </h2>
            <p className={styles.subtitle}>Наше торжество пройдет в Загородной резиденции «Бор»</p>
            <p className={styles.subtitle}>по адресу: Брянский район, Свенское сельское поселение, посёлок Ковшовское Лесничество, посёлок Санаторий Снежка</p>
            {/*<button className={styles.button}>Смотреть на карте</button>*/}
            <a className={styles.link} href="https://yandex.ru/maps/?rtext=~53.181693,34.548056" target="_blank">Построить маршрут в Яндекс.Карты</a>
        </section>
    );
};

export default Place;
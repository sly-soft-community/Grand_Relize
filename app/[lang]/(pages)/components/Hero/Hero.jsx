'use client'
import React from 'react'
import styles from './Hero.module.scss'
import logoLargeImg from '@/media/img/logo-large.png'
import Image from 'next/image';
import MailIcon from "../../../media/icons/Mail.svg"
import PhoneIcon from "../../../media/icons/Phone.svg"
import PointIcon from "../../../media/icons/Point.svg"

function Hero() {
    const infoArray = [
        { text: '+996 503 88 99 88 ; +996 997 88 99 88', icon: PhoneIcon },
        { text: 'info@grand-realize.kg', icon: MailIcon },
        { text: 'Бишкек, Аламудунский район, 1-я улица, 1а/1', icon: PointIcon },
    ]

    return (
        <section className={styles.hero}>
            <div className={styles.hero__wrapper} />
            <div className={styles.hero__contantWrapper}>
                <div className={styles.hero__contant}>
                    <Image
                        src={logoLargeImg}
                        alt="Logo"
                        className={styles.logo}
                    />
                    <h1 className={styles.title}>
                        Создаем что-то <br />   захватывающее!
                    </h1>
                    <div className={styles.description}>
                        Наш веб-сайт находится в стадии разработки. <br />
                        Следите за обновлениями до торжественного открытия!
                    </div>
                    <ul className={styles.info}>
                        {infoArray.map((item, key) =>
                            <li key={key} className={styles.info__item}>
                                <Image
                                    src={item.icon}
                                    alt="Logo"
                                    className={styles.info__icon}
                                />
                                <span>{item.text}</span>

                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero

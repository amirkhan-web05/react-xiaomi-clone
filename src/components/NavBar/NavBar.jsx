import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/Xiaomi_logo_(2021-).svg.png'
import styles from './NavBar.module.scss'

export const NavBar = () => {
    const [active, setActive] = React.useState(0)

    return (
        <nav className={'nav pt-3'}>
            <ul>
                <li>
                    <img width={50} className={styles.logo} src={logo} alt="" />
                    <NavLink to="/">Телефоны Xiaomi</NavLink>
                </li>
                <li className={styles.li_item}>
                    <NavLink to="/test">Телефоны Redmi</NavLink>
                </li>
                <li className={styles.li_item}>
                    <NavLink to="/">POCO</NavLink>
                </li>
                <li className={styles.li_item}>
                    <NavLink to="/">Умные <br /> устройства </NavLink>
                </li>
                <li className={styles.li_item}>
                    <NavLink to="/">Mi TV</NavLink>
                </li>
                <li className={styles.li_item}>
                    <NavLink to="/">Лайфстайл</NavLink>
                </li>
                <li className={styles.li_item}>
                    <NavLink to="/">Обзор</NavLink>
                </li>
            </ul>
            <input type="text" placeholder='Поиск товаров' className={styles['nav-search']} />
        </nav>
    )
}

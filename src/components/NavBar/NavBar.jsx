import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/Xiaomi_logo_(2021-).svg.png'
import { AppContext } from '../../context/context'
import styles from './NavBar.module.scss'

export const NavBar = () => {
    const {phones} = React.useContext(AppContext)
    const [value, setValue] = React.useState('')
    const [isOpen, setOpen] = React.useState(false)

    const filteredPhones = phones.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })

    const changeInputHandler = (event) => {
        setValue(event.target.value)
    }

    const itemClickHandler = (e) => {
        setValue(e.target.textContent)
        setOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setOpen(true)
    }

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
            <input 
                type="text" 
                value={value}
                onChange={changeInputHandler}
                placeholder='Поиск товаров' 
                onClick={inputClickHandler}
                className={styles['nav-search']} 
            />
             
            <ul className={styles.autocompleted}>
                {isOpen ? filteredPhones.map(item => (
                    <Link key={item.id} className={styles.autocompleted__item} to={`/devicesphone/${item.parentId}`}>
                        <li style={{listStyle: 'none'}} onClick={itemClickHandler} key={item.id}>{[item.title]}</li>
                    </Link>
                )) : ''}
            </ul>
        </nav>
    )
}

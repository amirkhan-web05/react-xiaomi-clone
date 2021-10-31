import React from 'react'
import styles from './Header.module.scss'
import shoppingBasket from '../images/shopping-basket.svg'
import { NavBar } from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'

const Header = () => {
    const {cart} = React.useContext(AppContext)

    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className="container">
                    <div className="header__top-inner d-flex justify-content-between p-2">
                        <div className={styles['header__top-row']}>
                            <span>MI RUSSIA</span>
                            <hr />
                            <span>MI COMMUNITY</span>
                            <hr />
                            <span>ЗАГРУЗИТЬ MI STORE</span>
                        </div>
                        <div className={styles['header__top-row']}>
                            <span>ВОЙТИ</span>
                            <hr />
                            <span>РЕГИСТРАЦИЯ</span>
                            <hr />
                            <span>КОРЗИНА({cart.length})</span>
                            <Link to='/cart'>
                                <img width={20} className={styles['header__top-basket']} src={shoppingBasket} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["header-middle"]}>
                <div className="container">
                    <NavBar/>
                </div>
                
            </div>
        </header>
    )
}

export default Header
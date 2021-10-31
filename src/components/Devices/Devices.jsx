import React from 'react'
import styles from './Devices.module.scss'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'

const Categories = ['Телефоны', 'Mi TV']

const Devices = () => {
    const {phones, mitv} = React.useContext(AppContext)

    const [toggle, setToggle] = React.useState(0)

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <div className='container mt-3 mb-3'>
            <h2 className='text-center mt-3 mb-3'>РЕКОМЕНДУЕМЫЕ</h2>
            <div style={{marginBottom:'20px'}} className={styles.nav_menu}>
            {Categories.map((item, index) => (
                <span key={index} onClick={() => toggleTab(index)} className={toggle === index ? styles.nav_menu_item : styles.nav_menu_none} href="/">{item}</span>
            ))}
            </div>
            <div className="devices">
                <div className={toggle === 0 ? styles.active_content : styles.no_content}>
                    {phones.map((item) => (
                        <Link key={item.id} to={`/phones/${item.id}`} className={styles.phones_item} key={item.id}>
                            <img width={200} height={200} src={item.images} alt="" />
                            <h4>{item.title}</h4>
                            <p>ОТ {item.price.toLocaleString("en-de")} ₽</p>
                        </Link>
                    ))}
                </div>
                <div className={toggle === 1 ? styles.active_content : styles.no_content}>
                    {mitv.map((item) => (
                        <Link key={item.id} to={`/mitv/${item.id}`} className={styles.phones_item} key={item.id}>
                            <img width={200} height={200} src={item.images} alt="" />
                            <h4>{item.title}</h4>
                            <p>ОТ {item.price.toLocaleString("en-de")} ₽</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Devices
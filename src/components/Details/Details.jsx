import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'
import logo from '../images/Xiaomi_logo_(2021-).svg.png'
import Loader from '../Loader/Loader'
import styles from './Details.module.scss'

const Details = () => {
    const {id} = useParams()

    const {phones, addCart, currencyFormat} = React.useContext(AppContext)
    const details = phones.filter((product) => {
        return Number(product.id) === Number(id);
    });

    const [loading, setLoading] = React.useState(true)
    const [active, setActive] = React.useState(0)

    const categoryIndex = (index) => {
        setActive(index)
    }

    setTimeout(() => {
        setLoading(false)
    }, 1000)

    const [index, setIndex] = React.useState(0)
    
    return (
        <>
            <div className="container">
                <div className={'details-header d-flex justify-content-between align-items-center mt-3 mb-3'}>
                    <Link to='/'>
                        <img width={60} src={logo} alt="" />
                    </Link>
                    {details.length ? <span>Подробнее о {details[0].title}</span> : ''}
                </div>
            </div>
            <hr style={{height:2, backgroundColor:'#690000'}} />
            <div className="container">
            {details.map(item => (
                <div className='d-flex justify-content-center align-items-center'>
                    {loading ? <Loader/> :  <img width={690} src={item.colors[index]} alt="" />}
                    <div className={styles.details_content}>
                        <h2 className={styles.details_content_title}>{item.title}</h2>
                        <p className={styles.details_price}>{currencyFormat(item.price)}₽</p>
                        <div className="details-scope">
                        {<ul className={styles.details_scope_item}>
                            <li>{item.settings[0].feature.scope_1}</li>
                            <li>{item.settings[0].feature.scope_2}</li>
                            <li>{item.settings[0].feature.scope_3}</li>
                        </ul>}
                        </div>
                        <div style={{borderBottom:'1px solid #ccc'}} className='d-flex align-items-center mt-3 pb-3'>
                            <div className={styles.details_balls}>
                                <img width={20} src='//i01.appmifile.com/webfile/globalimg/i18n_frontend/points_center/gold-points.png' alt="" />
                                <span>Удвоение</span>  
                            </div>
                            <div className={styles.details_bonuce}>Получите в два раза больше Mi баллов за покупку этого товара.</div>  
                        </div>
                        <h4 className='mt-5 mb-3'>Объем памяти</h4>
                        <ul className="d-flex mb-2 mt-2">
                            {item.settings[0] ? item.settings[0].ram.map((ram, index) => (
                                <>
                                    <div 
                                        onClick={() => categoryIndex(index)}
                                        className={active === index ? styles.details_ram : styles.details_test}
                                    >
                                        {ram}
                                    </div>
                                </>
                            )) : ''}
                        </ul>
                        {item.colors && item.colors.map((images, index) => (
                            <>
                                <img src={images} alt='' width={150} onClick={() => setIndex(index)} style={{marginLeft:'-22px', marginRight:'22px', cursor:'pointer'}} />
                            </>
                        ))}
                        <Link to={`/cart`}>
                            <button onClick={() => addCart(item.id)} style={{marginTop:'20px'}} className={styles.details_btn}>Купить</button>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Details
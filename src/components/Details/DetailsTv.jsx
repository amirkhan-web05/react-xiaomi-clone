import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'
import logo from '../images/Xiaomi_logo_(2021-).svg.png'
import Loader from '../Loader/Loader'
import styles from './Details.module.scss'

const Details = () => {
    const {id} = useParams()

    const {addCartMiTv, mitv} = React.useContext(AppContext)

    const details = mitv.filter((product) => {
        return Number(product.id) === Number(id);
    });

    const [loading, setLoading] = React.useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 500)

    return (
        <div>
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
                <div className='d-flex justify-content-center'>
                    {loading ? <Loader/> :  <img width={690} src={item.images} alt="" />}
                    <div style={{paddingTop:200}} className={styles.details_content}>
                        <h2 className={styles.details_content_title}>{item.title}</h2>
                        <p className={styles.details_price}>{item.price.toLocaleString("en-de")}₽</p>
                        <div style={{borderBottom:'1px solid #ccc'}} className='d-flex align-items-center mt-3 pb-3'>
                            <div className={styles.details_balls}>
                                <img width={20} src='//i01.appmifile.com/webfile/globalimg/i18n_frontend/points_center/gold-points.png' alt="" />
                                <span>Удвоение</span>  
                            </div>
                            <div className={styles.details_bonuce}>Получите в два раза больше Mi баллов за покупку этого товара.</div>  
                        </div>
                        <Link to={`/cart/${item.id}`}>
                            <button onClick={() => addCartMiTv(item.id)} style={{marginTop:'20px'}} className={styles.details_btn}>Купить</button>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Details
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {AppContext} from '../../context/context'
import logo from '../../assets/images/Xiaomi_logo_(2021-).svg.png'
import Loader from '../Loader/Loader'
import styles from './Details.module.scss'

const Details = () => {
    const {parentId} = useParams()

    const {addCartSmart, smart} = React.useContext(AppContext)

    const details = smart.filter((product) => {
        return Number(product.parentId) === Number(parentId);
    });

    const [activeTypeColor, setActiveTypeColor] = React.useState(0)

    const [loading, setLoading] = React.useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 500)

    if (details.length) {
        const avaibleColors = details[0].colors;
        const avaibleName = details[0].nameArray
        const avaibleColor = details[0].color

        const detailsSmart = [
            {
                id:details[0].id,
                parentId: details[0].parentId,
                title:details[0].title,
                color:details[0].color,
                colors:details[0].colors,
                images:details[0].images,
                nameArray:details[0].nameArray,
                price:details[0].price,
                count:details[0].count,
                cost:details[0].cost,
                typeColors: details[0].typeColors ? avaibleColors[activeTypeColor] : null,
                typeName: details[0].typeName ? avaibleName[activeTypeColor] : null,
                typeColor: details[0].typeColor ? avaibleColor[activeTypeColor] : null
            }
        ]

        const categoryColor = (index) => {
            setActiveTypeColor(index)
        }
    

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
            {detailsSmart && detailsSmart.map(item => (
                <div key={item.id} className='d-flex justify-content-center'>
                    {loading ? <Loader/> 
                    :  
                    <div>
                        {avaibleColors ? <img width={690} src={avaibleColors[activeTypeColor]} alt="" /> : <img width={690} src={item.images} alt="" />}
                    </div>}
                    <div style={{paddingTop:200}} className={styles.details_content}>
                        <div>
                            {avaibleName ? <h2 className={styles.details_content_title}>{avaibleName[activeTypeColor]}</h2> : <h2 className={styles.details_content_title}>{item.title}</h2>}
                        </div>
                        <p className={styles.details_price}>{item.price.toLocaleString("en-de")}₽</p>
                        <div style={{borderBottom:'1px solid #ccc'}} className='d-flex align-items-center mt-3 pb-3'>
                            <div className={styles.details_balls}>
                                <img width={20} src='//i01.appmifile.com/webfile/globalimg/i18n_frontend/points_center/gold-points.png' alt="" />
                                <span>Удвоение</span>  
                            </div>
                            <div className={styles.details_bonuce}>Получите в два раза больше Mi баллов за покупку этого товара.</div>  
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            {avaibleColor && avaibleColor.map((color, index) => (
                                <button 
                                    className={activeTypeColor === index ? styles.btn_active : styles.btn_smart} 
                                    style={{padding:'10px 55px', marginRight:'20px'}} 
                                    onClick={() => categoryColor(index)}>
                                    {color}
                                </button>
                            ))}
                        </div>
                        <Link to={`/cart/${item.id}`}>
                            <button onClick={() => addCartSmart(item)} style={{marginTop:'20px'}} className={styles.details_btn}>Купить</button>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
        )
    }
}

export default Details
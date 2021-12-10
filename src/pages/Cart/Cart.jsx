import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Xiaomi_logo_(2021-).svg.png'
import Loader from '../../components/Loader/Loader';
import { Modal } from '../../components/Modal/Modal';
import styles from './Cart.module.scss'
import { useCart } from '../../hooks/useCart';
import {AppContext} from '../../context/context'


const Cart = () => {
    const {
        cart, 
        removeItem, 
        clearCart,
        handleChangeModal,
        modal,
        increase,
        reduction,
        loader,
        setLoader,
        show,
        setShow,
    } = React.useContext(AppContext)

    const {total} = useCart()

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    })

    console.log(cart)

    return (
        <>
        <div className="container">
            <div className="cart-content d-flex align-items-center justify-content-between">
                <div className="cart-content_logo d-flex align-items-center mt-4 mb-4">
                    <Link to='/'>
                        <img width={65} src={logo} alt="" />
                    </Link>
                    <span className={styles.cart_content_baskett}>Моя корзина</span>
                </div>
                <div>
                    <span className={styles.cart_content_register}>Вход</span>
                    <span onClick={handleChangeModal} className={styles.cart_content_register}>Регистрация</span>
                </div>
                {modal && <Modal onClose={handleChangeModal}/>}
            </div>
        </div>
        <hr />
        <div className={styles.info}>
            <div className="container">
                <div className={styles.info_inner}>
                    <div className="info_all">
                        <span className={styles.info_all_item}>Все</span>
                        <span className={styles.info_all_item}>Название товара</span>
                    </div>
                    <div className="info-price">
                        <span className={styles.info_price_item}>Цена</span>
                        <span className={styles.info_price_item}>Количество</span>
                        <span className={styles.info_price_item}>Итого</span>
                    </div>
                </div>
                {cart.length ? <>
                    <>
                        {loader ? <div className='mt-5 mb-5 text-center d-flex justify-content-center'>
                                    <Loader/>
                                  </div> 
                            :
                            <>
                    {cart.map((item) => (                        
                        <div className={styles.cart_items} key={item.id} >
                            <div style={{backgroundColor:'#fff'}} className={styles.cart_details}>
                                {item.typeColors ? <img className={styles.cart_details_images} width={150} src={item.typeColors} alt="" /> : <img className={styles.cart_details_images} width={150} src={item.images} alt="" />}
                                     
                                <div className="d-flex align-items-center justify-content-between w-75">
                                    {item.typeName ? <span className={styles.card_details_title}>{item.typeName}</span> : <span className={styles.card_details_title}>{item.title}</span>}
                                    {item.type ? <span className={styles.cart_type}>{item.type}</span> : ''}
                                    {item.typePrice ? <p className={styles.card_details_price}>{item.typePrice.toLocaleString("en-de")}₽</p> : <p className={styles.card_details_price}>{item.price.toLocaleString("en-de")}₽</p>}
                                    <div>
                                        {item.count <= 2 ? 
                                            (
                                                <span className='btn btn-light' style={{color:'#000', fontSize:'18px'}} onClick={() => increase(item.id)}>+</span>
                                            ) 
                                            : 
                                            (
                                                <span className='btn btn-danger' disabled style={{color:'#fff', fontSize:'18px'}} onClick={() => increase(item.id)}>+</span>
                                            )
                                        }
                                            <span style={{color:'red', margin:'0 10px', fontSize:'18px'}}>{item.count}</span>
                                            <span className='btn btn-light' style={{color:'#000', fontSize:'18px'}} onClick={() => reduction(item.id)}>-</span> 
                                    </div>
                                </div>
                                <span onClick={() => setShow(true)} style={{display:'block', fontSize:'28px', cursor:'pointer', marginLeft:'50px'}}>&times;</span>
                                {show ? (
                                    <div className={styles.popup}>
                                        <div className={styles.popup_inner}>
                                            <div className='d-flex w-100 mt-3 justify-content-end'>
                                                <span onClick={() => setShow(false)} className={styles.popup_close}>&times;</span>
                                            </div>
                                            <span className={styles.popup_warn}>Удалить этот товар из корзины?</span>
                                            <div className="d-flex justify-content-center p-4">
                                                <button onClick={() => setShow(false)} className='btn me-2 w-50 btn-secondary'>Отмена</button>
                                                <button onClick={() => removeItem(item.id)} className='btn ms-2 w-50 btn-warning'>Подтвердить</button>
                                            </div>
                                        </div>
                                    </div>
                                )  : ''}
                            </div>
                        </div> 
                    ))}
                            </> 
                        }
                    </>
                </> : 
                    <div className={styles.content_banner}>
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <img src="//i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-empty.svg" alt="" />
                        </div>
                        <p className={styles.cart_not}>В корзине нет товаров!</p>
                        <Link to='/'>
                            <button className={styles.cart_phone}>Перейти в магазин</button>
                        </Link>                        
                    </div>
                }
            </div>
        </div>
        <div className={styles.arrange}>
            <div className="arrange_inner">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="arrange_item">
                        <span onClick={clearCart} style={{cursor:'pointer'}} className={styles.arrange_remove}>Удалить</span>
                        <span className={styles.arrange_items}>Выбрано {cart.length} товаров из {cart.length}</span>
                    </div>
                    <div className="arrange_total d-flex">
                        <div className="arrange_total_item">
                            <span className={styles.arrange_total_price}>Итого: {total.toLocaleString("en-de")} ₽</span> 
                            <p>Без стоимости доставки</p>
                        </div>
                        <button className={styles.arrange_total_btn}>Оформить({cart.length})</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Cart
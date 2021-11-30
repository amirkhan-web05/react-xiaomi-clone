import React from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';
import logo from '../../images/Xiaomi_logo_(2021-).svg.png'
import Loader from '../../Loader/Loader';
import { Modal } from '../../Modal/Modal';
import styles from './Cart.module.scss'

const Cart = () => {
    const {
        cart, 
        currencyFormat, 
        total, 
        removeItem, 
        clearCart,
        handleChangeModal,
        modal,
        increase,
        reduction,
        loader,
        setLoader,
    } = React.useContext(AppContext)

    setTimeout(() => {
        setLoader(false)
    }, 1000)

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
                            {loader ? <div className='mt-5 mb-5 text-center'>
                                        <Loader/>
                                      </div> 
                                :
                                <>
                        {cart.map((item, index) => (                        
                            <div className={styles.cart_items} key={item.id} >
                                <div style={{backgroundColor:'#fff'}} className={styles.cart_details}>
                                    {/* <span style={{marginRight:'15px', fontSize:'28px', color:'orange'}}>{item.id}</span> */}
                                    <img className={styles.cart_details_images} width={150} src={item.colors[index]} alt="" />
                                    <div className="d-flex align-items-center justify-content-between w-75">
                                        <span className={styles.card_details_title}>{item.title}</span>
                                        {/* {item.settings[0].ram[index]} */}
                                        <div>
                                            {item.count <= 2 ? <button style={{color:'#fff', fontSize:'18px'}} className='btn btn-warning' onClick={() => increase(item.id)}>+</button> : <button disabled style={{color:'#fff', fontSize:'18px'}} className='btn btn-warning' onClick={() => increase(item.id)}>+</button>}
                                                <span style={{color:'red', margin:'0 10px', fontSize:'18px'}}>{item.count}</span>
                                            <button style={{color:'#fff', fontSize:'18px'}} className='btn btn-warning' onClick={() => reduction(item.id)}>-</button>
                                        </div>
                                        <p className={styles.card_details_price}>{item.price.toLocaleString("en-de")}₽</p>
                                    </div>
                                    <span onClick={() => removeItem(item.id)} style={{display:'block', fontSize:'28px', cursor:'pointer', marginLeft:'50px'}}>&times;</span>
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
                                <span className={styles.arrange_total_price}>Итого: {currencyFormat(total)} ₽</span>
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
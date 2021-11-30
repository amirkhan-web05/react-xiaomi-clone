import axios from 'axios';
import React from 'react';
import { AppContext } from '../context';

export const DataProvider = ({ children }) => {
  const [phones, setPhones] = React.useState([]);
  const [miDesk, setMiDesk] = React.useState([]);
  const [mitv, setMitv] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [smart, setSmart] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [loader, setLoader] = React.useState(true);
  const [inCart, setInCart] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [phonesRes, mitvRes, smartRes, cartRes] = await Promise.all([
          await axios.get('https://617d57bb1eadc50017136486.mockapi.io/phones'),
          await axios.get('https://617d57bb1eadc50017136486.mockapi.io/mitv'),
          await axios.get('https://617d57bb1eadc50017136486.mockapi.io/smart'),
          await axios.get('https://617d57bb1eadc50017136486.mockapi.io/cart'),
        ]);
        setPhones(phonesRes.data);
        setMitv(mitvRes.data);
        setSmart(smartRes.data);
        setCart(cartRes.data);
      } catch (e) {
        console.log('Error:', e);
      }
    };

    fetchData();
  }, []);

  const addCartPhone = async (obj) => {
    try {
      // генерирует id
      const foundCart = cart.find((item) => Number(item.id) === Number(obj.id));

      if (foundCart) {
        cart.count = cart;
      } else {
        setCart([...cart, obj]);
        const { data } = await axios.post(
          'https://617d57bb1eadc50017136486.mockapi.io/cart',
          obj
        );
        setCart((prev) =>
          prev.map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                id: data.id,
              };
            }

            return item;
          })
        );
      }
    } catch (e) {
      alert(e);
    }
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1 ? item.count <= 2 : (item.count -= 1);
      }
    });

    setCart((prev) => [...prev]);
  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart((prev) => [...prev]);
  };

  const addCartMiTv = async (obj) => {
    try {
      const foundCart = cart.find((item) => Number(item.id) === Number(obj.id));
      if (foundCart) {
        cart.count = cart;
      } else {
        const { data } = await axios.post(
          'https://617d57bb1eadc50017136486.mockapi.io/cart',
          obj
        );
        setCart((prev) => [...prev, data]);
      }
    } catch (e) {
      alert(e);
    }
  };

  const addCartSmart = async (obj) => {
    try {
      // phones === cart у них одинковые id
      const foundCart = cart.find((item) => Number(item.id) === Number(obj.id));
      if (foundCart) {
        cart.count++;
      } else {
        const { data } = await axios.post(
          'https://617d57bb1eadc50017136486.mockapi.io/cart',
          obj
        );
        console.log(data);
        setCart((prev) => [...prev, data]);
      }
    } catch (e) {
      alert(e);
    }
  };

  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1 ');
  }

  React.useEffect(() => {
    const getTotal = () => {
      const totalPrice = cart.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
      setTotal(totalPrice);
    };

    getTotal();
  }, [cart]);

  const removeItem = async (id) => {
    try {
      if (window.confirm('Удалить товар из корзины?')) {
        await axios.delete(
          `https://617d57bb1eadc50017136486.mockapi.io/cart/${id}`
        );
        // phones === cart у них одинковые id
        setCart(cart.filter((item) => Number(item.id) !== Number(id)));
        console.log(cart);
      }
    } catch (e) {
      alert(e);
    }
  };
  const clearCart = async () => {
    if (window.confirm('Очистить полностью корзину?')) {
      setCart([]);
    }
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const [data, setData] = React.useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        phones,
        data,
        setValues,
        loader,
        inCart,
        setPhones,
        miDesk,
        mitv,
        handleChangeModal,
        setMitv,
        modal,
        setMiDesk,
        setLoader,
        addCartMiTv,
        addCartPhone,
        smart,
        setSmart,
        addCartSmart,
        cart,
        setCart,
        increase,
        reduction,
        currencyFormat,
        removeItem,
        clearCart,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

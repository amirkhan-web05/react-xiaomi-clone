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

  const addCartPhone = async (id) => {
    const checkPhones = cart.every((item) => {
      return item.id !== id;
    });

    if (checkPhones) {
      const dataPhones = phones.filter((item) => {
        return item.id === id;
      });

      axios.post(
        'https://617d57bb1eadc50017136486.mockapi.io/cart',
        dataPhones
      );

      setCart((prev) => [...prev, ...dataPhones]);
    }
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1 ? item.count <= 2 : (item.count -= 1);
      }
    });

    setCart([...cart]);
  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const addCartMiTv = (id) => {
    const checkMiTv = cart.every((item) => {
      return item.id !== id;
    });

    if (checkMiTv) {
      const dataMiTv = mitv.filter((item) => {
        return item.id === id;
      });

      axios.post('https://617d57bb1eadc50017136486.mockapi.io/cart', dataMiTv);

      setCart([...cart, ...dataMiTv]);
    }
  };

  const addCartSmart = (id) => {
    const checkSmart = cart.every((item) => {
      return item.id !== id;
    });

    if (checkSmart) {
      const dataSmart = smart.filter((item) => {
        return item.id === id;
      });

      setCart([...cart, ...dataSmart]);
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

  const removeItem = (id) => {
    if (window.confirm('Удалить товар из корзины?')) {
      axios.delete(`https://617d57bb1eadc50017136486.mockapi.io/cart/${id}`);
      setCart(cart.filter((item) => item.id !== id));
    }
  };
  const clearCart = () => {
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
        setPhones,
        miDesk,
        mitv,
        handleChangeModal,
        setMitv,
        modal,
        setMiDesk,
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

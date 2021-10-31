import axios from 'axios';
import React from 'react';
import { AppContext } from '../context';

export const DataProvider = ({ children }) => {
  const [phones, setPhones] = React.useState([]);
  const [miDesk, setMiDesk] = React.useState([]);
  const [mitv, setMitv] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const miDeskRes = await axios.get(
          'https://617d57bb1eadc50017136486.mockapi.io/miDesk'
        );
        const phonesRes = await axios.get(
          'https://617d57bb1eadc50017136486.mockapi.io/phones'
        );
        const mitvRes = await axios.get(
          'https://617d57bb1eadc50017136486.mockapi.io/mitv'
        );

        setMiDesk(miDeskRes.data[0].miDesk);
        setPhones(phonesRes.data[0].phones);
        setMitv(mitvRes.data[0].mitv);
      } catch (e) {
        console.log('Error:', e);
      }
    };

    fetchData();
  }, []);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });

    if (check) {
      const data = phones.filter((product) => {
        return product.id === id;
      });

      setCart([...cart, ...data]);
    }
  };

  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1 ');
  }

  const totalPrice = cart.reduce((sum, obj) => obj.price + sum, 0);

  const removeItem = (id) => {
    if (window.confirm('Удалить товар из корзины?')) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };
  const clearCart = () => {
    if (window.confirm('Очистить полностью корзину?')) {
      setCart([]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        phones,
        setPhones,
        miDesk,
        mitv,
        setMitv,
        setMiDesk,
        addCart,
        cart,
        setCart,
        currencyFormat,
        removeItem,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

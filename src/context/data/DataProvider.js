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
  const [loader, setLoader] = React.useState(true);
  const [show, setShow] = React.useState(false);

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
      const foundCart = cart.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (foundCart) {
        cart.count++;
      } else {
        const { data } = await axios.post(
          'https://617d57bb1eadc50017136486.mockapi.io/cart',
          obj
        );

        console.log(data);

        setCart((prev) =>
          prev.map((item) => {
            if (Number(item.parentId) === Number(data.parentId)) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
        setCart([...cart, data]);
      }
    } catch (e) {
      alert(e);
    }
  };

  const increase = async (id) => {
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
      const foundCart = cart.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (foundCart) {
        cart.count++;
      } else {
        const { data } = await axios.post(
          'https://617d57bb1eadc50017136486.mockapi.io/cart',
          obj
        );

        console.log(data);

        setCart((prev) =>
          prev.map((item) => {
            if (Number(item.parentId) === Number(data.parentId)) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
        setCart([...cart, data]);
      }
    } catch (e) {
      alert(e);
    }
  };

  const addCartSmart = async (obj) => {
    try {
      const foundCart = cart.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (foundCart) {
        cart.count++;
      } else {
        const { data } = await axios.post(
          'https://617d57bb1eadc50017136486.mockapi.io/cart',
          obj
        );

        console.log(data);

        setCart((prev) =>
          prev.map((item) => {
            if (Number(item.parentId) === Number(data.parentId)) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
        setCart([...cart, data]);
      }
    } catch (e) {
      alert(e);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(
        `https://617d57bb1eadc50017136486.mockapi.io/cart/${id}`
      );
      setCart(cart.filter((item) => Number(item.id) !== Number(id)));
      setShow(false);
    } catch (e) {
      alert(e);
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
        loader,
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
        show,
        setShow,
        addCartSmart,
        cart,
        setCart,
        increase,
        reduction,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

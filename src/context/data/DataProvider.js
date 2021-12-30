import axios from 'axios';
import React from 'react';
import { AppContext } from '../context';
import {getCartDevices, getData, getRemove} from "../../api/api";

export const DataProvider = ({ children }) => {
  const [phones, setPhones] = React.useState([]);
  const [miDesk, setMiDesk] = React.useState([]);
  const [miTv, setMiTv] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [smart, setSmart] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [loader, setLoader] = React.useState(true);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        getData().then((data) => {
            setPhones(data[0].data);
            setMiTv(data[1].data);
            setSmart(data[2].data);
            setCart(data[3].data);
        })
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
          getCartDevices(obj).then((data) => {
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
          })
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
          getCartDevices(obj).then((data) => {
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
          })
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
          getCartDevices(obj).then((data) => {
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
          })
      }
    } catch (e) {
      alert(e);
    }
  };

  const removeItem = async (id) => {
    try {
      getRemove(id).then(() => {
          setCart(cart.filter((item) => Number(item.id) !== Number(id)));
          setShow(false);
      })
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
        miTv,
        handleChangeModal,
        setMiTv,
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

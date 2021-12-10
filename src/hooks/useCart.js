import React from 'react';
import { AppContext } from '../context/context';

export const useCart = () => {
  const { cart } = React.useContext(AppContext);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const getTotal = () => {
      const totalPrice = cart.reduce((sum, obj) => {
        if (obj.typePrice) {
          return sum + obj.typePrice * obj.count;
        } else {
          return sum + obj.price * obj.count;
        }
      }, 0);
      setTotal(totalPrice);
    };

    getTotal();
  }, [cart]);

  return { cart, total, setTotal };
};

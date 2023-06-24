import { useContext, useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";
// import Cookies from "universal-cookie";

const CartContext = createContext();

// const cookies = new Cookies();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart, "cart");
    
    useEffect(() => {
      let existingCartItem = Cookies.get("cart");    
      if (existingCartItem) {
        setCart(JSON.parse(existingCartItem));
      };
    },[])
  

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const  useCart = () => useContext(CartContext);

export { useCart, CartProvider };

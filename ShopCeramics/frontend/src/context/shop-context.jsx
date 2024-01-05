import { createContext, useState } from "react";
import PRODUCTS from "../data/productsData.json";
// import { useAuthContext } from "../hooks/useAuthContext";

export const ShopContext = createContext(null);
// const { user } = useAuthContext();


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.products.length + 1; i++) {
    cart[i] = 0;

  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        console.log(cartItems[item])
        let itemInfo = PRODUCTS.products.find((product) => product.id === item);
        console.log(itemInfo.id)
        totalAmount += cartItems[item] * (itemInfo.price);
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
  const addToCart = async (itemId, user) => {
    console.log("addToCart, userid:", user, itemId);
    // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //fetch('/shoppingcart',
    fetch('http://localhost:4000/shoppingcart',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        // user:userid,
        body: JSON.stringify({
          userid: user.userid,
          productId: itemId,
          quantity: 1
        }),
      }).then(res => {
        console.log("res:", res);
        if (res.ok) {
          //return res.json();  
          console.log("added to cart");
        }
        else {
          console.log("not added to cart");
        }
      }).catch(e => {
        console.error(e.error);
      });
  };

  const removeFromCart = (itemId) => {
    // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = async (user) => {

    // let items = [];
    // for (const item in cartItems) {
    //   if (cartItems[item] > 0) {
    //     items.push({ id: item, quantity: cartItems[item] });
    //   }
    // }
    // console.log("checkout, userid:",userid);

    fetch('http://localhost:4000/ckeckout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Athorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          //TODO: get the items from the cart
          // userid: userid,
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ]
        }),
      }).then(res => {
        if (res.ok) return res.json();
        return res.json.then(json => Promise.reject(json));
      }).then(({ url }) => {
        // console.log(url);
        window.location = url;
      }).catch(e => {
        console.error(e.error);
      });
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
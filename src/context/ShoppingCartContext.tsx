import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { DISCOUNT_TYPES, Discount } from '../components/Promo';
import { calculatePercentageDiscout } from '../utils/calculatePercentageDiscount';

export type CartItem = {
  id: string;
  quantity: number;
  price: string;
  name: string;
  imageUrl: string;
};

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (
    id: string,
    price: string,
    name: string,
    imageUrl: string
  ) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  countCartTotalPrice: (discount: Discount | null) => number;
  discount: Discount | null;
  setDiscount: React.Dispatch<React.SetStateAction<Discount | null>>;
  cartTotalAmount: number | null;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotalAmount, setCartTotalAmount] = useState<number | null>(null);
  const [discount, setDiscount] = useState<Discount | null>(null);

  const countCartTotalPrice = useCallback(() => {
    const total = +cartItems.reduce((amount, item) => {
      const price: number = parseFloat(item.price);
      return +(amount + price * item.quantity);
    }, 0);

    if (!discount) {
      return +total.toFixed(2);
    } else {
      switch (discount.discountType) {
        case DISCOUNT_TYPES.PERCENT: {
          return +calculatePercentageDiscout(
            discount.discountValue,
            total
          ).toFixed(2);
        }
      }
    }
  }, [discount, cartItems]);

  useEffect(() => {
    const totalPrice = countCartTotalPrice();
    setCartTotalAmount(totalPrice);
  }, [cartItems, discount, countCartTotalPrice]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function increaseCartQuantity(
    id: string,
    price: string,
    name: string,
    imageUrl: string
  ) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1, price, name, imageUrl }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        countCartTotalPrice,
        setDiscount,
        discount,
        cartTotalAmount
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

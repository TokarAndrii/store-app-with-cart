import { Flex, Typography } from 'antd';
import { CartTable } from '../components/CartTable';
import { CartTotal } from '../components/CartTotal';
import { Promo } from '../components/Promo';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const Store = () => {
  const { cartItems } = useShoppingCart();
  return (
    <Flex
      justify='center'
      align='center'
      vertical
      style={{ paddingTop: '155px' }}
    >
      <Typography.Title
        level={3}
        style={{ fontSize: '32px', lineHeight: '38.4px' }}
      >
        My Shopping Cart
      </Typography.Title>
      {!!cartItems.length && (
        <>
          <Flex style={{ width: '1320px' }}>
            <CartTable />
            <div style={{ marginLeft: '12px' }}>
              <CartTotal />
            </div>
          </Flex>
          <Flex
            justify='start'
            style={{
              marginTop: '12px',
              marginBottom: '200px',
              width: '1320px'
            }}
          >
            <Promo />
          </Flex>
        </>
      )}
    </Flex>
  );
};

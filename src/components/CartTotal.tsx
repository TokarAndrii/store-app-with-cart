import { Button, Divider, Flex, Typography } from 'antd';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const CartTotal = () => {
  const { cartTotalAmount } = useShoppingCart();
  return (
    <div
      style={{
        border: '1px solid #E6E6E6',
        borderRadius: '5px',
        paddingBottom: '12px',
        width: '424px',
        padding: '12px'
      }}
    >
      <Flex vertical>
        <Typography.Text>Cart Total</Typography.Text>
        <Flex
          justify='space-between'
          align='center'
          style={{ padding: '12px', paddingLeft: '0' }}
        >
          <Typography.Text
            style={{ color: '#4D4D4D', fontSize: '14px', lineHeight: '21px' }}
          >
            Subtotal:
          </Typography.Text>
          <Typography.Text>${cartTotalAmount}</Typography.Text>
        </Flex>
        <Divider style={{ margin: '0px' }} />
        <Flex
          justify='space-between'
          align='center'
          style={{ padding: '12px', paddingLeft: '0' }}
        >
          <Typography.Text
            style={{ color: '#4D4D4D', fontSize: '14px', lineHeight: '21px' }}
          >
            Shipping:
          </Typography.Text>
          <Typography.Text
            style={{ fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}
          >
            Free
          </Typography.Text>
        </Flex>
        <Divider style={{ margin: '0px' }} />
        <Flex
          justify='space-between'
          align='center'
          style={{ padding: '12px', paddingLeft: '0' }}
        >
          <Typography.Text
            style={{ color: '#4D4D4D', fontSize: '14px', lineHeight: '21px' }}
          >
            Total:
          </Typography.Text>
          <Typography.Text
            style={{
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '19.2px',
              color: '#1A1A1A'
            }}
          >
            ${cartTotalAmount}
          </Typography.Text>
        </Flex>
        <Button
          type='text'
          style={{
            backgroundColor: '#00B207',
            borderRadius: '43px',
            color: '#FFFFFF'
          }}
          //   TODO: handle Proceed to checkout
          onClick={() => {}}
        >
          Proceed to checkout
        </Button>
      </Flex>
    </div>
  );
};

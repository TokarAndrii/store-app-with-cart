import { Flex, Image, Table, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CartItem, useShoppingCart } from '../context/ShoppingCartContext';

export const CartTable = () => {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity
  } = useShoppingCart();
  const navigate = useNavigate();

  const data = cartItems.map((item) => ({
    ...item,
    subtotal: +item.price * item.quantity,
    key: item.id
  }));

  const columns = [
    {
      title: 'PRODUCT',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, item: CartItem) => {
        return (
          <div key={`${item.id}-name`}>
            <Image
              alt={name}
              src={item.imageUrl}
              width={100}
              height={100}
              preview={false}
            />
            <Typography.Text style={{ fontSize: '16px', lineHeight: '24px' }}>
              {name}
            </Typography.Text>
          </div>
        );
      }
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
      render: (price: number, item: CartItem) => {
        return (
          <Typography.Text
            key={`${item.id}-price`}
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            ${price}
          </Typography.Text>
        );
      }
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number, item: CartItem) => {
        return (
          <div
            key={`${item.id}-quantity`}
            style={{
              border: '1px solid #E6E6E6',
              padding: '4px',
              borderRadius: '16px'
            }}
          >
            <Image
              key={`${item.id}-minus`}
              alt='minus'
              width={34}
              height={34}
              preview={false}
              src='https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712952102/Minus_hpdmv6.png'
              style={{ cursor: 'pointer' }}
              onClick={() => decreaseCartQuantity(item.id)}
            />
            <Typography.Text
              style={{
                width: '40px',
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              {quantity}
            </Typography.Text>
            <Image
              key={`${item.id}-plus`}
              alt='plus'
              width={34}
              height={34}
              preview={false}
              src='https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712952101/Plus_s8c9dx.png'
              style={{ cursor: 'pointer' }}
              onClick={() =>
                increaseCartQuantity(
                  item.id,
                  item.price,
                  item.name,
                  item.imageUrl
                )
              }
            />
          </div>
        );
      }
    },
    {
      title: 'SUBTOTAL',
      dataIndex: 'subtotal',
      key: 'subtotal',
      render: (subtotal: number, item: CartItem) => {
        return (
          <Typography.Text
            key={`${item.id}-subtotal`}
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            ${subtotal}
          </Typography.Text>
        );
      }
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (_: unknown, item: CartItem) => {
        return (
          <Image
            key={`${item.id}-action`}
            alt='remove'
            width={24}
            height={24}
            preview={false}
            src='https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712950177/Close_ahshvd.png'
            style={{ cursor: 'pointer' }}
            onClick={() => removeFromCart(item.id)}
          />
        );
      }
    }
  ];

  return (
    <>
      {!!cartItems?.length && (
        <div
          style={{
            border: '1px solid #E6E6E6',
            borderRadius: '5px',
            paddingBottom: '12px',
            width: '872px'
          }}
        >
          <Table dataSource={data} columns={columns} pagination={false} />
          <Flex justify='start' style={{ width: '100%' }}>
            <div
              onClick={() => navigate('/')}
              style={{
                backgroundColor: '#F2F2F2',
                padding: '14px 32px',
                borderRadius: '43px',
                width: '168px',
                boxSizing: 'border-box',
                height: '45px',
                fontSize: '14px',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 600,
                marginTop: '12px',
                marginLeft: '16px'
              }}
            >
              Return to shop
            </div>
          </Flex>
        </div>
      )}
    </>
  );
};

import { Layout as AntdLayout, Divider, Flex, Image, Typography } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

const { Header, Content, Footer } = AntdLayout;
const { Text } = Typography;

export const Layout = () => {
  const { cartQuantity, countCartTotalPrice } = useShoppingCart();

  const navigate = useNavigate();

  return (
    <Flex vertical style={{ width: '100vw' }}>
      <Header
        style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #ccc',
          height: '93px'
        }}
      >
        <Flex justify='space-between' align='center' style={{ height: '100%' }}>
          <Link to='/' replace>
            <Image
              src='https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712609842/Logo_eisqpo.png'
              width={183}
              height={38}
              preview={false}
              alt='logo'
            />
          </Link>
          {!!cartQuantity && (
            <Flex justify='center' align='center'>
              <Flex
                justify='center'
                align='center'
                style={{
                  height: '100%',
                  lineHeight: '16px'
                }}
              >
                <Image
                  preview={false}
                  alt='heart'
                  width={32}
                  height={32}
                  src='https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712944048/Heart_d6x6hi.png'
                />
                <Divider
                  style={{ height: '24px', color: '#ccc', margin: '0 12px' }}
                  type='vertical'
                />
              </Flex>
              <div
                style={{
                  position: 'relative',
                  width: '25.5px',
                  height: '25.5px',
                  lineHeight: '16px'
                }}
              >
                <Image
                  preview={false}
                  src='https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712612297/Bag_trwrha.png'
                  width={25.5}
                  height={25.5}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    cursor: 'pointer'
                  }}
                  alt='cart'
                  onClick={() => navigate('/store')}
                />

                <>
                  <Text
                    style={{
                      backgroundColor: '#2C742F',
                      width: '16px',
                      height: '16px',
                      color: '#fff',
                      position: 'absolute',
                      top: '-4px',
                      left: '12px',
                      borderRadius: '50%',
                      border: '1px 0px 0px 0px',
                      opacity: '0px',
                      fontSize: '10px',
                      textAlign: 'center'
                    }}
                  >
                    {cartQuantity}
                  </Text>
                </>
              </div>
              <Flex vertical style={{ height: '34px', marginLeft: '7px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    lineHeight: '16px'
                  }}
                >
                  Shopping cart:
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '16px'
                  }}
                >
                  ${countCartTotalPrice(null)}
                </span>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Header>
      <Content
        style={{
          minHeight: '90vh',
          padding: '0px 25px'
        }}
      >
        <Outlet />
      </Content>
      <Footer>footer works</Footer>
    </Flex>
  );
};

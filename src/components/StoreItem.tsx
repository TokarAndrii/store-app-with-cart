import { Flex, Image, Typography } from 'antd';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { StoreDataItem } from '../data/storeItems';

const { Text } = Typography;

export const StoreItem = ({ storeItem }: { storeItem: StoreDataItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { increaseCartQuantity } = useShoppingCart();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Flex
      vertical
      align='center'
      style={{
        border: `1px solid ${isHovered ? '#2C742F' : '#E6E6E6'} `,
        boxSizing: 'border-box',
        width: '264px',
        height: '327px',
        position: 'relative',
        ...(isHovered && { boxShadow: '0px 0px 12px 0px #20B52652' })
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {storeItem?.additionalInfo?.sale && (
        <Text
          style={{
            padding: '3px 8px 3px 8px',
            backgroundColor: '#EA4B48',
            color: '#FFFFFF',
            borderRadius: '4px',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            width: '80px',
            height: '27px',
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 999
          }}
        >
          {storeItem.additionalInfo.sale?.text}{' '}
          {storeItem.additionalInfo.sale?.saleSize}
          {storeItem.additionalInfo.sale?.saleUnit}
        </Text>
      )}
      <Image
        width={262}
        src={storeItem.imageUrl}
        preview={false}
        alt={storeItem.title}
      />
      <Text>{storeItem.title}</Text>
      <Text>${storeItem.price.actual}</Text>
      {storeItem.price?.old && <Text delete>${storeItem.price.old}</Text>}
      <Flex>
        {Array.from(Array(5).keys()).map((_, index) => (
          <Image
            key={`star${index}`}
            preview={false}
            alt='star'
            src={
              index < storeItem.rate
                ? 'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712605297/Star_1_ekkygo.png'
                : 'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712605290/Star_5_zyujzt.png'
            }
          />
        ))}
      </Flex>
      <div
        style={{
          position: 'absolute',
          top: '263px',
          left: '208px',
          zIndex: 999
        }}
        onClick={() => {
          increaseCartQuantity(
            storeItem.id,
            storeItem.price.actual,
            storeItem.title,
            storeItem.imageUrl
          );
        }}
      >
        <Image
          preview={false}
          src={
            isHovered
              ? 'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712607154/Add_To_Cart_1_vso3my.png'
              : 'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712607148/Add_To_Cart_b1x9b4.png'
          }
          alt='add to cart'
          style={{ cursor: 'pointer' }}
        />
      </div>
    </Flex>
  );
};

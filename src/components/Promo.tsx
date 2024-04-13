import { Button, Flex, Input, Typography } from 'antd';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

// eslint-disable-next-line react-refresh/only-export-components
export const VALID_PROMO_CODES = {
  HEALTH20: { discountValue: 20, discountType: '%' }
};

type PromoKeys = keyof typeof VALID_PROMO_CODES;

// eslint-disable-next-line react-refresh/only-export-components
export enum DISCOUNT_TYPES {
  PERCENT = '%'
}

export type Discount = {
  discountValue: number;
  discountType: DISCOUNT_TYPES;
};

export const Promo = () => {
  const [promo, setPromo] = useState('');
  const { setDiscount } = useShoppingCart();

  const handleCoupon = () => {
    if (!promo) return;
    const isValidDiscountExist = !!Object.keys(VALID_PROMO_CODES).find(
      (promoKey) => promoKey === promo
    );

    if (isValidDiscountExist) {
      setDiscount(VALID_PROMO_CODES[promo as PromoKeys] as Discount);
    }
  };
  return (
    <div
      style={{
        border: '1px solid #E6E6E6',
        borderRadius: '5px',
        paddingBottom: '12px',
        maxWidth: '872px',
        padding: '20px'
      }}
    >
      <Flex justify='start' align='center'>
        <Typography.Text
          style={{
            width: '124px',
            fontWeight: 500,
            marginRight: '24px',
            textAlign: 'right'
          }}
        >
          Coupon Code
        </Typography.Text>
        <div style={{ position: 'relative' }}>
          <Input
            placeholder='Enter code'
            style={{ width: '668px', borderRadius: '46px' }}
            value={promo}
            onChange={(e) => {
              setPromo(e.target.value);
            }}
          />
          <Button
            type='text'
            style={{
              backgroundColor: '#333333',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              position: 'absolute',
              right: 0,
              borderRadius: '46px'
            }}
            onClick={handleCoupon}
          >
            Apply coupon
          </Button>
        </div>
      </Flex>
    </div>
  );
};

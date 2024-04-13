import { Flex, Typography } from 'antd';
import { storeItems } from '../data/storeItems';

import { StoreItem } from '../components';
import type { StoreDataItem } from '../data/storeItems';

const { Title } = Typography;

export const Home = () => {
  return (
    <Flex vertical justify='start' align='center'>
      <Title level={1} style={{ fontSize: '32px', marginBottom: '32px' }}>
        Popular Products
      </Title>
      <Flex
        justify='start'
        align='start'
        style={{ maxWidth: '1320px', marginBottom: '150px' }}
        wrap='wrap'
      >
        {storeItems.map((storeItem: StoreDataItem) => {
          return <StoreItem storeItem={storeItem} key={storeItem.id} />;
        })}
      </Flex>
    </Flex>
  );
};

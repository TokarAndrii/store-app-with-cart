export type StoreDataItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: StoreItemPrice;
  rate: number;
  additionalInfo?: AdditionalInfo;
};

export type StoreItemPrice = {
  old?: string;
  actual: string;
};

type AdditionalInfo = {
  sale?: Sale;
};

type Sale = {
  saleSize: string;
  saleUnit: string;
  text: string;
};

export const storeItems: StoreDataItem[] = [
  {
    id: '79d46bdf-4918-49c6-b9b9-5d4340c18be3',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712604092/Image_ndcunb.png',
    title: 'Green Apple',
    price: {
      old: '20.99',
      actual: '14.99'
    },
    rate: 4,
    additionalInfo: {
      sale: {
        saleSize: '50',
        saleUnit: '%',
        text: 'Sale'
      }
    }
  },
  {
    id: '9e01b703-e45b-40d8-a2e0-5f273f6ae71b',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712604375/Image_1_fl0rc8.png',
    title: 'Fresh Indian Malta',
    price: {
      actual: '20.00'
    },
    rate: 4
  },
  {
    id: '37330a85-6a71-4fb3-a261-b12c9c8376fa',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1712604798/Product_Image_md5nsq.png',
    title: 'Chinese Cabbage',
    price: {
      actual: '12.00'
    },
    rate: 4
  },
  {
    id: '5e588e07-d81d-4f66-a5f5-3f43090b920d',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713030587/Product_Image_1_o2zxww.png',
    title: 'Green Lettuce',
    price: {
      actual: '9.00'
    },
    rate: 4
  },
  {
    id: '29bfd445-5360-481a-abf3-8522c1823806',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713030719/Product_Image_2_ebbwvq.png',
    title: 'Eggplant',
    price: {
      actual: '34.00'
    },
    rate: 4
  },
  {
    id: '1e1d9c24-3766-4228-a1cc-f8c3ce6160c7',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713030935/Product_Image_3_ratb89.png',
    title: 'Big Potatoes',
    price: {
      actual: '20.00'
    },
    rate: 4
  },
  {
    id: '38d35c15-64ec-40d7-abb5-092022114849',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713031642/Product_Image_4_jllwyi.png',
    title: 'Corn',
    price: {
      actual: '20.00'
    },
    rate: 4
  },
  {
    id: '6f5a5e1a-0c4d-4ccb-aed4-0bfe1e4fd1e6',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713031726/Product_Image_5_ghucb4.png',
    title: 'Fresh Cauliflower',
    price: {
      actual: '12.00'
    },
    rate: 4
  },
  {
    id: '679864d9-0445-4565-8b16-88c4d2502e6f',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713031868/Product_Image_6_aazvye.png',
    title: 'Green Capsicum',
    price: {
      actual: '9.00',
      old: '20.99'
    },
    rate: 4
  },
  {
    id: '4366133f-dbfe-4d32-9df9-b0d85fd9c76e',
    imageUrl:
      'https://res.cloudinary.com/dxp6c8rqf/image/upload/v1713031971/Product_Image_7_iulqyg.png',
    title: 'Green Chili',
    price: {
      actual: '34.00'
    },
    rate: 4
  }
];

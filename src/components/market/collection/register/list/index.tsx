import { useCallback, useEffect, useState } from 'react';
import { useWeb3Provider } from '@utils/web3/provider';
import { Table } from 'antd';

export const MarketCollectionRegisterList = (props: any) => {
  const { contracts } = useWeb3Provider();
  const [data, setData] = useState<{ [key: string]: any }[]>([]);

  const getCollections = useCallback(() => {
    contracts?.TokenManager.getCollectionList().then((response) => {
      response.forEach((collectionAddress) => {
        contracts?.TokenManager.getCollectionInfo(collectionAddress).then((collection) => {
          setData((prev) => ([...prev, { key: collectionAddress, ...collection }]));
        });
      });
    });
  }, [contracts]);

  useEffect(() => {
    getCollections();
  }, [getCollections]);

  return (
    <Table
      columns={[
        {
          title: '이름',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '소유자',
          dataIndex: 'owner',
          key: 'owner',
          render: (value) => (<a href={`https://microscope.test.wemix.com/address/${value}`}>{value}</a>),
        },
        {
          title: 'Address',
          dataIndex: 'addr',
          key: 'addr',
          render: (value) => (<a href={`https://microscope.test.wemix.com/address/${value}`}>{value}</a>),
        },
      ]}
      dataSource={data}
    />
  );
};

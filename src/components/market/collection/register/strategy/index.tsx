import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Radio, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';
import { OrderType, Round } from '@/models/nile/contract';
import CFixedPriceOrder from '@/contracts/CFixedPriceOrder.json';
import OFixedPriceOrder from '@/contracts/OFixedPriceOrder.json';
import EnglishAuctionOrder from '@/contracts/EnglishAuctionOrder.json';
import OpenPriceOrder from '@/contracts/OpenPriceOrder.json';

const data: { [key: number]: { [key: number]: { address: string, name: string } } } = {
  [Round.FIRST]: {
    [OrderType.EnglishAuction]: {
      address: EnglishAuctionOrder.address,
      name: 'EnglishAuction',
    },
    [OrderType.FixedPrice]: {
      address: CFixedPriceOrder.address,
      name: 'FixedPrice',
    },
  },
  [Round.SECOND]: {
    [OrderType.FixedPrice]: {
      address: OFixedPriceOrder.address,
      name: 'FixedPrice',
    },
    [OrderType.OpenPrice]: {
      address: OpenPriceOrder.address,
      name: 'OpenPrice',
    },
  },
};

export const MarketCollectionRegisterStrategy = (props: any) => {
  const [form] = Form.useForm();
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();

  const register = useCallback(({ collection }) => {
    setLoading(true);
    const contract = collection.round === Round.FIRST ? contracts?.CurateMarket : contracts?.OpenMarket;
    const selected = data[collection.round][collection.order.type];
    contract?.addStrategy(selected.name, selected.address, true).then((response) => {
      setResult(response.transactionHash);
      console.log(response);
    }).finally(() => {
      setLoading(false);
    });
  }, [contracts]);

  useEffect(() => {
    if (!wallet.address) {
      login();
    }
  }, [wallet, login, form]);

  return (
    <Form onFinish={register} form={form}>
      <Typography.Title>컬렉션 판매방식 추가</Typography.Title>
      <Form.Item name={['collection', 'round']} label="판매 방식" initialValue={Round.FIRST}>
        <Radio.Group>
          <Radio.Button value={Round.FIRST}>1차 판매</Radio.Button>
          <Radio.Button value={Round.SECOND}>2차 판매(오픈마켓)</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={['collection', 'order', 'type']} label="판매 방식" initialValue={OrderType.EnglishAuction}>
        <Radio.Group>
          <Radio.Button value={OrderType.EnglishAuction}>경매</Radio.Button>
          <Radio.Button value={OrderType.FixedPrice}>고정가 판매</Radio.Button>
          <Radio.Button value={OrderType.OpenPrice}>공개 입찰</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">추가</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

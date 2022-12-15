import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Radio, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';
import { Order, OrderStatus, OrderType, Round } from '@/models/nile/contract';
import moment from 'moment';

export type MarketNftMintingProps = {
  // TODO
};

export const MarketNftOrderBuy = ({ ...props }: MarketNftMintingProps) => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { login, wallet, contracts } = useWeb3Provider();

  const register = useCallback(({ orderType, order }) => {
    console.log(order);
    const contract = contracts?.CurateMarket;
    setLoading(true);
    contract?.registerSellOrder(2, order as Order)?.then((response) => {
      setResult(response.transactionHash);
    }).catch((error) => {
      console.log('error', error);
      setLoading(false);
    }).finally(() => {
      setLoading(false);
    });
  }, [contracts]);

  useEffect(() => {
    if (!wallet?.address) {
      login();
    } else {
      form.setFieldValue(['order', 'seller'], wallet.address);
    }
  }, [wallet, login, form]);

  return (
    <Form onFinish={register} form={form}>
      <Typography.Title>NFT 구매 등록</Typography.Title>
      <Form.Item name={['order', 'round']} label="판매 방식 구분" initialValue={Round.FIRST}>
        <Radio.Group>
          <Radio.Button value={Round.FIRST}>1차 판매</Radio.Button>
          <Radio.Button value={Round.SECOND}>2차 판매</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={['orderType']} label="판매 방식" initialValue={OrderType.FixedPrice}>
        <Radio.Group>
          <Radio.Button value={OrderType.EnglishAuction}>경매</Radio.Button>
          <Radio.Button value={OrderType.FixedPrice}>고정가 판매</Radio.Button>
          <Radio.Button value={OrderType.OpenPrice}>가격 제안</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={['order', 'orderStatus']} label="주문 상태" initialValue={OrderStatus.NONE}>
        <Radio.Group>
          <Radio.Button value={OrderStatus.NONE}>상태 없음</Radio.Button>
          <Radio.Button value={OrderStatus.OPEN}>주문 가능</Radio.Button>
          <Radio.Button value={OrderStatus.CLOSE}>판매 종료</Radio.Button>
          <Radio.Button value={OrderStatus.COMPLETE}>판매 완료</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={['order', 'seller']} label="판매자 주소">
        <Input />
      </Form.Item>
      <Form.Item name={['order', 'collection']} label="컬렉션 주소">
        <Input />
      </Form.Item>
      <Form.Item name={['order', 'payment']} label="지불 화폐" initialValue="0x1b7aCAc0EA9956e1d238973Fc65e9945ddcebe4D">
        <Radio.Group>
          {/* TODO: 실제 토큰 컨트랙트 주소 할당 */}
          <Radio.Button value="0x0000000000000000000000000000000000000000">위믹스</Radio.Button>
          <Radio.Button value="0x2784039f85024708eA78c3E16CA5076762E27137">위믹스 달러</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={['order', 'buyer', 0]} label="구매자" initialValue="">
        <Input />
      </Form.Item>
      <Form.Item name={['order', 'orderID']} label="주문 아이디(Order ID)" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'orderAmount']} label="주문 수량" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'startTime']} label="경매 시작 시간" initialValue={moment().unix()}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'tid']} label="판매 토큰 아이디" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'price']} label="가격" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'limit']} label="구매 제한 수량" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'totalSoldAmount']} label="총 판매된 수량" initialValue={0}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['order', 'soldAmount', 0]} label="각 판매된 수량" initialValue={0}>
        <InputNumber controls={false} />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">판매 등록</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

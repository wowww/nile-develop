import { useCallback, useEffect, useState } from 'react';
import { Button, Form, InputNumber, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';

export type MarketNftMintingProps = {
  // TODO
};

export const MarketNftOfferBuy = ({ ...props }: MarketNftMintingProps) => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { login, wallet, contracts } = useWeb3Provider();

  const register = useCallback(({ orderId, amount }) => {
    const contract = contracts?.CurateMarket;
    setLoading(true);
    contract?.offerBuyOrder(orderId, amount)?.then((response) => {
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
    }
  }, [wallet, login, form]);

  return (
    <Form onFinish={register} form={form}>
      <Typography.Title>NFT 구매 제안</Typography.Title>
      <Form.Item name="orderId" label="오더 ID" initialValue={0} rules={[{ required: true }]}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name="amount" label="구매할 수량" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">구매 제안</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

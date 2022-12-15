import { useCallback, useEffect, useState } from 'react';
import { Button, Form, InputNumber, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';

export type MarketNftMintingProps = {
  // TODO
};

export const MarketNftOrderCancel = ({ ...props }: MarketNftMintingProps) => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { login, wallet, contracts } = useWeb3Provider();

  const register = useCallback(({ orderId }) => {
    const contract = contracts?.CurateMarket;
    setLoading(true);
    contract?.closeOrder(orderId)?.then((response) => {
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
      <Typography.Title>NFT 주문 취소</Typography.Title>
      <Form.Item name="orderID" label="오더 ID" initialValue={0} rules={[{ required: true }]}>
        <InputNumber controls={false} />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">주문 취소</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

import { Button, Form, Input, Space, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useWeb3Provider } from '@utils/web3/provider';

export const MarketCollectionReport = (props: any) => {
  const [form] = Form.useForm();
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);

  const register = useCallback(({ collection }) => {
    setLoading(true);
    contracts?.TokenManager.report(collection).then((response) => {
      console.log(response);
    }).finally(() => {
      setLoading(false);
    });
  }, [contracts]);

  useEffect(() => {
    if (!wallet.address) {
      login();
    }
  }, [wallet, login]);

  return (
    <Form onFinish={register} form={form}>
      <Typography.Title>컬렉션 신고</Typography.Title>
      <Form.Item name={['collection', 'addr']} label="컬렉션 주소" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">신고</Button>
      </Space>
    </Form>
  );
};

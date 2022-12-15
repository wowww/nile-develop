import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';
import { Address } from '@/models/nile/contract';

export const MarketCollectionRegisterWhitelist = (props: any) => {
  const [form] = Form.useForm();
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();

  const checkRegistered = useCallback((_, walletAddress: Address) => {
    return contracts?.TokenManager.isWhiteList(walletAddress).then((isWhitelisted) => {
      return isWhitelisted ? Promise.reject(new Error('이미 등록된 지갑 주소입니다.')) : Promise.resolve();
    });
  }, [contracts]);

  const addWhitelist = useCallback(({ walletAddress }) => {
    setLoading(true);
    contracts?.TokenManager.setWhiteList(walletAddress).then((response) => {
      console.log(response);
    }).finally(() => {
      setLoading(false);
    });
  }, [contracts]);

  useEffect(() => {
    if (!wallet.address) {
      login();
    } else {
      form.setFieldValue('walletAddress', wallet.address);
    }
  }, [wallet, login, form]);

  return (
    <Form onFinish={addWhitelist} form={form}>
      <Typography.Title>컬렉션 등록 화이트리스트 추가</Typography.Title>
      <Form.Item name="walletAddress" label="지갑 주소" rules={[{ required: true }, { validator: checkRegistered }]}>
        <Input />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">추가</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

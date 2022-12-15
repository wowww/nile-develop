import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';

export const MarketCollectionCreateWhitelist = (props: any) => {
  const [form] = Form.useForm();
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();
  const [isWhitelisted, setWhitelisted] = useState(false);

  const contract = useMemo(() => {
    return contracts?.DeployRouter;
  }, [contracts]);

  const checkWhitelist = useCallback(() => {
    if (wallet.address) {
      contract?.isWhiteList(wallet.address).then((response) => {
        setWhitelisted(response);
        console.log(response);
      });
    }
  }, [wallet, contract, setWhitelisted]);

  const addWhitelist = useCallback(({ walletAddress }) => {
    setLoading(true);
    contract?.setWhiteList([walletAddress]).then((response) => {
      setResult(response.transactionHash);
      console.log(response);
    }).finally(() => {
      setLoading(false);
    });
  }, [contract]);

  useEffect(() => {
    if (!wallet.address) {
      login();
    } else {
      form.setFieldValue('walletAddress', wallet.address);
    }
  }, [wallet, login, form]);

  return (
    <Form onFinish={addWhitelist} form={form}>
      <Typography.Title>컬렉션 생성 화이트리스트 추가</Typography.Title>
      <Form.Item name="walletAddress" label="지갑 주소" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">추가</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

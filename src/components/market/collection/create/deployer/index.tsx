import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';

export const MarketCollectionCreateDeploy = (props: any) => {
  const [form] = Form.useForm();
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);
  const contract = useMemo(() => {
    return contracts?.DeployRouter;
  }, [contracts]);

  const checkDeployer = useCallback(() => {
    contract?.getDeployers().then(([erc721, erc1155]) => {
      console.log(erc721, erc1155);
    });
  }, [contract]);

  const addDeployer = useCallback(({ walletAddress }) => {
    setLoading(true);
    contract?.registerDeployer(walletAddress, walletAddress).then((response) => {
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
    <Form onFinish={addDeployer} form={form}>
      <Typography.Title>컬렉션 생성권한 추가</Typography.Title>
      <Form.Item name="walletAddress" label="지갑 주소" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button loading={loading} htmlType="submit">등록</Button>
    </Form>
  );
};

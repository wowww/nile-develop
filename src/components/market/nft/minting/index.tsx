import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Space, Typography } from 'antd';
import { useWeb3Provider } from '@utils/web3/provider';

export type MarketNftMintingProps = {
  // TODO
};

export const MarketNftMinting = ({ ...props }: MarketNftMintingProps) => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { login, wallet, contracts } = useWeb3Provider();

  const register = useCallback(({ collection, owner, token }) => {
    if (wallet.address) {
      const contract = contracts?.NileERC721(collection.address);
      setLoading(true);
      const method = token.count > 1 ? contract?.mintBatch(owner.address, token.count) : contract?.mint(owner.address);
      method?.then((response) => {
        setResult(response.transactionHash);
        console.log(response);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [wallet, contracts]);

  useEffect(() => {
    if (!wallet?.address) {
      login();
    } else {
      form.setFieldValue(['owner', 'address'], wallet.address);
    }
  }, [wallet, login, form]);

  return (
    <Form onFinish={register} form={form}>
      <Typography.Title>NFT 민팅(토큰 생성)</Typography.Title>
      <Form.Item name={['collection', 'address']} label="컬렉션 주소" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['owner', 'address']} label="토큰 발행 후 소유권을 부여할 지갑 주소">
        <Input />
      </Form.Item>
      <Form.Item name={['token', 'count']} label="발행할 토큰 수량">
        <InputNumber controls={false} defaultValue={1} />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">민팅</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

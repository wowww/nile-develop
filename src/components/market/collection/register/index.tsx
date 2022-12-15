import { Button, Form, Input, InputNumber, Radio, Space, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useWeb3Provider } from '@utils/web3/provider';
import { Address, Collection, GenesisType } from '@/models/nile/contract';

export const MarketCollectionRegister = (props: any) => {
  const [form] = Form.useForm();
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();

  const checkRegistered = useCallback((_, collection: Address) => {
    return contracts?.TokenManager.isRegisteredCollection(collection).then((isRegistered) => {
      return isRegistered ? Promise.reject(new Error('이미 등록된 컬렉션입니다.')) : Promise.resolve();
    });
  }, [contracts]);

  const register = useCallback(({ collection }) => {
    setLoading(true);
    contracts?.TokenManager.registerCollection(collection as Collection).then((response) => {
      setResult(response.transactionHash);
    }).finally(() => {
      setLoading(false);
    });
  }, [contracts, setResult, setLoading]);

  useEffect(() => {
    if (!wallet.address) {
      login();
    }
  }, [wallet, login]);

  return (
    <Form onFinish={register} form={form}>
      <Typography.Title>컬렉션 등록</Typography.Title>
      <Form.Item name={['collection', 'name']} label="컬렉션 이름" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'addr']} label="컬렉션 주소" rules={[{ required: true }, { validator: checkRegistered }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'owner']} label="컬렉션 소유자 주소" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'genesis']} label="제네시스 주소">
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'fRecipient', 0]} label="1차 판매 수수료 수령자 주소">
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'sRecipient', 0]} label="2차 판매 수수료 수령자 주소">
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'fRate', 0]} label="1차 판매 수수료 비율" initialValue={10}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['collection', 'sRate', 0]} label="2차 판매 수수료 비율" initialValue={0}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['collection', 'genesisHolderFee']} label="제네시스 홀더의 수수료 비율" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['collection', 'featuredFee']} label="Featured 수수료 비율" initialValue={1}>
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item name={['collection', 'genesisType']} label="컬렉션 종류" initialValue={GenesisType.NONE}>
        <Radio.Group>
          <Radio.Button value={GenesisType.NONE}>일반 컨트랙트</Radio.Button>
          <Radio.Button value={GenesisType.GENESIS}>제네시스</Radio.Button>
          <Radio.Button value={GenesisType.GENERATION}>제너레이션</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">등록</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

import { Button, Form, Input, Space, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useWeb3Provider } from '@utils/web3/provider';

// TODO: BaseURI를 직접 전달하는 방식 대신 Slug를 지정하고, Slug로 BaseURI를 생성하는 로직으로 변경
export const MarketCollectionCreate = (props: any) => {
  const { wallet, login, contracts } = useWeb3Provider();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>();
  const [isWhitelisted, setWhitelisted] = useState(false);

  const checkWhitelisted = useCallback(() => {
    if (wallet.address) {
      contracts?.DeployRouter?.isWhiteList(wallet.address).then(setWhitelisted);
    }
  }, [wallet, contracts, setWhitelisted]);

  const create = useCallback(({ collection }) => {
    setLoading(true);
    contracts?.DeployRouter?.create721(collection.name, collection.symbol, collection.baseUri).then((response) => {
      setResult(response.transactionHash);
    }).finally(() => {
      setLoading(false);
    });
  }, [contracts]);

  useEffect(() => {
    if (!wallet.address) {
      login();
    } else {
      checkWhitelisted();
    }
  }, [wallet, login, checkWhitelisted]);

  return (
    <Form onFinish={create}>
      <Typography.Title>컬렉션 생성</Typography.Title>
      <Typography>현재 지갑 주소: {wallet.address}</Typography>
      <Typography>화이트리스트 등록 여부: {isWhitelisted ? '등록됨' : '미등록'}</Typography>
      <Form.Item name={['collection', 'name']} label="컬렉션 이름" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'symbol']} label="컬렉션 심볼" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['collection', 'baseUri']} label="컬렉션 URI" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Space size="large">
        <Button loading={loading} htmlType="submit">생성</Button>
        <Button disabled={!result} href={`https://microscope.test.wemix.com/tx/${result}`} target="_blank">결과 확인</Button>
      </Space>
    </Form>
  );
};

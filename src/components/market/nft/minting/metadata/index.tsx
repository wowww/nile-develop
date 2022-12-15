import { Button, Table, Tag, Upload } from 'antd';
import { useCallback, useState } from 'react';
import { UploadChangeParam } from 'antd/lib/upload/interface';
import read from 'read-excel-file';
import save from 'save-file';
import JSZip from 'jszip';

const schema = {
  ID: {
    prop: 'id',
    type: Number,
  },
  Name: {
    prop: 'name',
    type: String,
  },
  Description: {
    prop: 'description',
    type: String,
  },
  Zone: {
    prop: 'zone',
    type: String,
  },
  Line: {
    prop: 'line',
    type: String,
  },
  Parking: {
    prop: 'parking',
    type: String,
  },
  'Inside Toilet': {
    prop: 'insideToilet',
    type: String,
  },
  'Outside Toilet': {
    prop: 'outsideToilet',
    type: String,
  },
};

export const MarketNftMintingMetadata = (props: any) => {
  const [data, setData] = useState<any[]>([]);

  const onChange = useCallback(async ({ file }: UploadChangeParam) => {
    file.originFileObj?.arrayBuffer()?.then((data) => read(data, { schema }))
      ?.then(({ rows }) => {
        setData(rows);
      });
  }, [setData]);

  const onClickDownload = useCallback(async () => {
    const results = data.map((item) => {
      return {
        id: item.id,
        name: [
          {
            language: 'en',
            value: item.name,
          },
        ],
        description: [
          {
            language: 'en',
            value: item.description ?? '',
          },
        ],
        image: `https://file.nile.io/nft/lus264/${item.id}.png`,
        externalLink: '',
        backgroundColor: '',
        attributes: [
          item.zone && {
            type: 'Zone',
            value: item.zone.split(',').map((it: string) => Number(it.trim())),
          },
          item.line && {
            type: 'Line',
            value: item.line.split(',').map((it: string) => it.trim()),
          },
          item.parking && {
            type: 'Parking',
            value: item.parking.split(',').map((it: string) => it.trim()),
          },
          item.insideToilet && {
            type: 'Inside Toilet',
            value: item.insideToilet.split(',').map((it: string) => it.trim()),
          },
          item.outsideToilet && {
            type: 'Outside Toilet',
            value: item.outsideToilet.split(',').map((it: string) => it.trim()),
          },
        ].filter((item) => item),
      };
    });
    const zip = new JSZip();
    results.map(async (result) => {
      await zip.file(`${result.id}.json`, JSON.stringify(result, null, 2));
    });
    zip.generateAsync({ type: 'string' }).then((output) => {
      save(output, 'output.zip');
    });
  }, [data]);

  return (
    <>
      <Upload onChange={onChange} accept=".xlsx">
        <Button>업로드</Button>
      </Upload>
      <Button onClick={onClickDownload}>다운로드</Button>
      <Table
        columns={[
          {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Zone',
            dataIndex: 'zone',
            key: 'zone',
            render: (_, { zone }) => {
              return zone?.split(',')?.map((key: string) => {
                return <Tag key={key}>{key}</Tag>;
              });
            },
          },
          {
            title: 'Line',
            dataIndex: 'line',
            key: 'line',
            render: (_, { line }) => {
              return line?.split(',')?.map((key: string) => {
                return <Tag key={key}>{key}</Tag>;
              });
            },
          },
          {
            title: 'Parking',
            dataIndex: 'parking',
            key: 'parking',
            render: (_, { parking }) => {
              return parking?.split(',')?.map((key: string) => {
                return <Tag key={key}>{key}</Tag>;
              });
            },
          },
          {
            title: 'Inside Toilet',
            dataIndex: 'insideToilet',
            key: 'insideToilet',
            render: (_, { insideToilet }) => {
              return insideToilet?.split(',')?.map((key: string) => {
                return <Tag key={key}>{key}</Tag>;
              });
            },
          },
          {
            title: 'Outside Toilet',
            dataIndex: 'outsideToilet',
            key: 'outsideToilet',
            render: (_, { outsideToilet }) => {
              return outsideToilet?.split(',')?.map((key: string) => {
                return <Tag key={key}>{key}</Tag>;
              });
            },
          },
        ]}
        dataSource={data}
      />
    </>
  );
};

import cn from 'classnames';
import { Table } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { IconLogo } from '@/components/common/logo/icon';
import { useLayoutResize } from '@utils/layout';
import { TinyChartDefaultData } from '@components/tokens/chart/line/tiny/data/chartDummyData';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import type { ColumnsType } from 'antd/es/table';
import { TagData } from '@components/tagdata';

const TinyChart = dynamic(() => import('@/components/tokens/chart/line/tiny/TinyChart'), { ssr: false });

interface TokenDataType {
  key: number;
  name: string;
  shortenName: string;
  price: number;
  price24h: number;
  price7d?: number;
  volume7d: number;
  marketCap: number | string;
}

export type TokensTableProps = {
  data: TokenDataType[];
}

export const TokensTable = ({ data }: TokensTableProps) => {
  const router = useRouter();
  const { isTablet } = useLayoutResize();

  const tokensColumns: ColumnsType<TokenDataType> = [
    {
      title: <span>#</span>,
      dataIndex: 'key',
      width: isTablet ? 60 : 40,
      render: (text) => <span className={cn('index')}>{text}</span>,
      align: 'center',
      className: 'col-index',
    },
    {
      title: <span>Name</span>,
      dataIndex: ['name', 'shortenName'],
      width: isTablet ? 320 : '27.6%',
      align: 'left',
      render: (_: any, { name, shortenName }) => {
        return (
          <div className="flex gap-2">
            <IconLogo type={shortenName.toLowerCase()} size={20} />
            <div className={cn('coin-name')}>
              <span>
                {name}({shortenName})
              </span>
            </div>
          </div>
        );
      },
      className: 'col-name',
    },
    {
      title: <span>Price</span>,
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['ascend', 'descend', 'ascend'],
      showSorterTooltip: false,
      width: isTablet ? 164 : '11.6%',
      align: 'right',
      render: (text): string => {
        return `$${text}`;
      },
      className: 'col',
    },
    {
      title: <span>Price 24h</span>,
      dataIndex: 'price24h',
      sorter: (a, b) => a.price24h - b.price24h,
      sortDirections: ['ascend', 'descend', 'ascend'],
      showSorterTooltip: false,
      width: isTablet ? 164 : '11.6%',
      align: 'right',
      render: (rate): JSX.Element => {
        return (
          <TagDataWrapper>
            <TagData number={rate} showSign />
          </TagDataWrapper>
        );
      },
      className: 'col',
    },
    {
      title: <span>Price 7d</span>,
      dataIndex: 'price7d',
      sortDirections: ['ascend', 'descend', 'ascend'],
      showSorterTooltip: false,
      width: isTablet ? 164 : '14.5%',
      align: 'right',
      render: (data): JSX.Element => {
        return (
          <Chart>
            <TinyChart data={TinyChartDefaultData} height={40} />
          </Chart>
        );
      },
      className: 'col',
    },
    {
      title: <span>Volume 7d</span>,
      dataIndex: 'volume7d',
      sorter: (a, b) => a.volume7d - b.volume7d,
      sortDirections: ['ascend', 'descend', 'ascend'],
      showSorterTooltip: false,
      defaultSortOrder: 'ascend',
      width: isTablet ? 164 : '16.2%',
      align: 'right',
      render: (text): string => {
        return `$${text}M`;
      },
      className: 'col',
    },
    {
      title: <span>Market Cap</span>,
      dataIndex: 'marketCap',
      // sorter: (a, b) => a.TVL - b.TVL,
      sortDirections: ['ascend', 'descend', 'ascend'],
      showSorterTooltip: false,
      width: isTablet ? 164 : '12.5%',
      align: 'right',
      render: (text): string => {
        return `$${text}M`;
      },
      className: 'col',
    },
  ];
  return (
    <Container>
      <Title>Tokens</Title>
      <TableWrapper>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                router.push({
                  pathname: '/tokens/detail',
                  query: { token: record.shortenName },
                });
              },
            };
          }}
          columns={tokensColumns}
          dataSource={data}
          pagination={false}
          /* 22.10.28 수정: scroll 속성 수정 */
          scroll={{ x: true }}
        />
      </TableWrapper>
    </Container>
  );
};

const Chart = styled.div([
  tw`w-[73px]`,
  tw`ml-auto`,
]);

const TagDataWrapper = styled.div([
  tw`flex`,
  tw`justify-end`,
]);

const TableWrapper = styled.div([
  `
    .ant-table {
      table {
        min-width: 688px !important;
      }

      .ant-table-column-sort {
        .ant-table-column-sorter-inner {
          background: url('https://file.mir4global.com/nile/resources/icons/common/arrow/ico_sort.svg') 50% 50% / cover no-repeat;
        }
        .ant-table-column-sorter {
          margin-bottom: auto;
        }

        &[aria-sort=descending] {
          .ant-table-column-sorter-inner {
            transform: rotate(180deg);
          }
        }
      }

      &-row {
        cursor: pointer;
      }
    }
  `,
]);

const Title = styled.h2([
  tw`text-xl`,
  tw`leading-[1.2]`,
  tw`font-header`,
  tw`font-bold`,
  tw`md:text-[32px]`,
  tw`md:leading-[1.25]`,
  tw`xl:text-3xl`,
  tw`xl:leading-[1.2]`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`pl-5`,
  tw`mt-10`,
  tw`gap-4`,
  tw`md:gap-5`,
  tw`md:mt-[60px]`,
  tw`md:px-10`,
  tw`xl:gap-6`,
  tw`xl:px-0`,
  tw`xl:mx-auto`,
  tw`xl:max-w-[1200px]`,
]);

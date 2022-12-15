import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import tw from 'twin.macro';
import { Button } from '@/components/common/button';

export type CalendarProps = {
  // TODO
};

export const DaoCalendar = (props: CalendarProps) => {
  const [targetDate, setTargetDate] = useState(new Date());

  const [firstDayInMonth, lastDayInMonth] = useMemo(() => {
    return [moment(targetDate).startOf('month').toDate(), moment(targetDate).endOf('month').toDate()];
  }, [targetDate]);

  const [firstDay, lastDay] = useMemo(() => {
    return [moment(firstDayInMonth).startOf('week').toDate(), moment(lastDayInMonth).endOf('week').toDate()];
  }, [firstDayInMonth, lastDayInMonth]);

  const days = useMemo(() => {
    return Array.from({ length: 42 }, (_, i) => moment(firstDay).add(i, 'day').toDate());
  }, [firstDay]);

  return (
    <Container>
      <Header>
        <HeaderController>
          <HeaderButton onClick={() => setTargetDate((prev) => moment(prev).subtract(1, 'month').toDate())}>&lt;</HeaderButton>
          <HeaderButton onClick={() => setTargetDate((prev) => moment(prev).add(1, 'month').toDate())}>&gt;</HeaderButton>
          <HeaderButton onClick={() => setTargetDate(new Date())}>{moment(targetDate).format('MMM YYYY')}</HeaderButton>
        </HeaderController>
        <HeaderButton>X</HeaderButton>
      </Header>
      <Legends>
        <Legend>Weekly Call</Legend>
        <Legend>Proposal Ends</Legend>
        <Legend>Proposal Starts</Legend>
        <Legend>Gov Weekly</Legend>
      </Legends>
      <Table>
        <TableBody>
          {
            days.map((day: Date, index: number) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Cell key={`cell${index}`} thisMonth={targetDate.getMonth() === day.getMonth()} border={index > 6}>
                <CellWrapper>
                  <CellTitle>{moment(day).format('D')}</CellTitle>
                  <CellItem>test test test test test test test test</CellItem>
                  <CellItem>test test test test test test test test</CellItem>
                  <CellItem>test test test test test test test test</CellItem>
                  <CellItem>test test test test test test test test</CellItem>
                  <CellItem>test test test test test test test test</CellItem>
                  <CellItem>test test test test test test test test</CellItem>
                </CellWrapper>
              </Cell>;
            })
          }
        </TableBody>
      </Table>
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const Header = styled.div([
  tw`flex`,
  tw`justify-between`,
]);

const HeaderController = styled.div([]);

const Legends = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`m-4`,
  tw`space-x-2`,
  tw`justify-center`,
]);

const Legend = styled.div([
  tw`text-xs`,
]);

const Table = styled.div([
  tw`border`,
  tw`rounded-lg`,
  tw`w-full`,
]);

const TableBody = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`flex-wrap`,
  tw`justify-evenly`,
  tw`w-full`,
]);

const Cell = styled.div<{ thisMonth: boolean, border: boolean }>(({ thisMonth, border }) => [
  tw`w-[13.2%]`,
  tw`h-28`,
  tw`p-0.5`,
  border ? tw`border-t-[1px]`: tw`border-t-0`,
  thisMonth ? tw`text-black` : tw`text-gray-70`,
]);

const CellWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`flex-wrap`,
  tw`h-full`,
  tw`overflow-hidden`,
]);

const CellTitle = styled.p([
  tw`text-lg`,
]);

const CellItem = styled.p([
  tw`text-xs`,
  tw`w-full`,
  tw`truncate`,
]);

// @ts-ignore
const HeaderButton = styled(Button)([
  tw`bg-transparent hover:bg-transparent`,
  tw`text-black`,
]);

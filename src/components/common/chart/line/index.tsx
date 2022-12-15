import { useEffect, useMemo, useRef, useState } from 'react';
import { extent, max, sort } from 'd3-array';
import * as allCurves from '@visx/curve';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import styled from '@emotion/styled';
import genDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';
import tw from 'twin.macro';
import moment from 'moment';
import { Group } from '@visx/group';
import { AxisBottom, AxisLeft } from '@visx/axis';

export const LineChart = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(320);

  const height = useMemo(() => {
    return width * 0.6;
  }, [width]);

  const mapSum = (array: DateValue[]) => sort(array, (a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 0);

  const [data, setData] = useState<DateValue[]>(genDateValue(80, 5));

  const sumData = useMemo(() => {
    return mapSum(data);
  }, [data]);

  console.log('data', sumData);

  const getX = (d: DateValue) => d.date;
  const getY = (d: DateValue) => d.value;
  const date = (d: DateValue) => new Date(d.date).valueOf();

  const xScale = scaleTime<number>({
    domain: extent(sumData, date) as [number, number],
  });

  const yScale = scaleLinear<number>({
    domain: [0, max(sumData, getY) as number],
  });

  xScale.range([0, width - 50]);
  yScale.range([height - 2, 0]);

  useEffect(() => {
    xScale.range([0, width - 50]);
  }, [width, xScale]);

  useEffect(() => {
    yScale.range([height - 2, 0]);
  }, [height, yScale]);

  useEffect(() => {
    setWidth(containerRef.current?.clientWidth ?? 0);
  }, [containerRef.current?.clientWidth]);

  const handleTooltip = () => {
    // TODO
  };

  return (
    <Container ref={containerRef}>
      <svg width={width} height={height}>
        <Group>
          <AxisBottom top={height} scale={xScale} numTicks={width > 520 ? 10 : 5} />
          <AxisLeft scale={yScale} />
          <LinePath<DateValue>
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            shapeRendering="geometricPrecision"
            curve={allCurves.curveLinear}
            data={sumData}
            x={(d) => xScale(getX(d)) ?? 0}
            y={(d) => yScale(getY(d)) ?? 0}
            stroke="#333"
            strokeWidth={2}
            strokeOpacity={1}
          />
        </Group>
      </svg>
    </Container>
  );
};

const Container = styled.div([
  tw`w-full`,
]);

import styled from '@emotion/styled';
import tw from 'twin.macro';
import {css} from '@emotion/css'
import {useLayoutEffect, useMemo, useRef, useState} from "react";

export type DaoProgressbarProps = {
  currentValue: number;
  goalValue: number;
  msg: string;
  desc: boolean;
};

export const DaoProgressbar = ({currentValue, goalValue, msg, desc}: DaoProgressbarProps) => {
  const multiple = 1.5
  const maximumValue = useMemo(() => Math.max(goalValue, currentValue) * multiple, [goalValue, currentValue]);
  const currentPercent = useMemo(() => currentValue / maximumValue * 100, [maximumValue, currentValue]);
  const goalPercent = useMemo(() => goalValue / maximumValue * 100, [maximumValue, goalValue]);

  const descriptionRef = useRef<HTMLDivElement>(null)
  const [descriptionOffset, setDescriptionOffset] = useState<number>(0);

  useLayoutEffect(() => {
    const width = descriptionRef.current?.offsetWidth ?? 0;
    console.log(width);
    setDescriptionOffset(width);
  }, [])

  console.log(descriptionOffset);

  return (
    <Container>
      <Wrapper>
        <ProgressbarWrapper>
          <Progressbar className={css`width: ${currentPercent}%`}/>
        </ProgressbarWrapper>
        <Description id="desc" style={{
          left: `${goalPercent}%`,
          marginLeft: `-${descriptionOffset}px`,
        }}>
          <Title>{msg}</Title>
          <SubTitle>{desc && `${goalValue} WEMIX`}</SubTitle>
        </Description>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div([
  tw`flex`,
]);

const Wrapper = styled.div([
  tw`w-full`,
  tw`h-[12px]`,
  tw`bg-gray-90`,
  tw`rounded-[6px]`,
  tw`relative`,
]);

const ProgressbarWrapper = styled.div([
  tw`h-full`,
  tw`bg[#F2F2F2]`,
  tw`rounded-[6px]`,
  tw`relative`,
]);

const Progressbar = styled.div([
  tw`absolute`,
  tw`left-0`,
  tw`h-full`,
  tw`bg-[#5E5FF5]`,
  tw`rounded-[6px]`,
  tw`min-w-[12px]`,
  tw`before:content-['']`,
  tw`before:absolute`,
  tw`before:w-[6px]`,
  tw`before:h-[6px]`,
  tw`before:right-[3px]`,
  tw`before:top-[calc(50% - 6px/2)]`,
  tw`before:bg-white`,
  tw`before:rounded-full`,
]);

const Description = styled.div([
  tw`absolute`,
  tw`top-0`,
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`before:content-['']`,
  tw`before:w-[3px]`,
  tw`before:h-[15px]`,
  tw`before:top-[-16px]`,
  tw`before:right-1/2`,
  tw`before:translate-x-1/2`,
  tw`before:bg-black`,
]);

const Title = styled.h3([
  tw`text-[12px]`,
  tw`font-bold`,
  tw`text-black`,
]);

const SubTitle = styled.span([
  tw`text-[12px]`,
  tw`text-gray-40`,
])

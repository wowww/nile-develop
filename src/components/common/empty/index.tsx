import IconEmpty from '@/assets/icons/common/ico_empty.svg';
import IconSearch from '@/assets/icons/common/ico_search.svg';

import {useLayoutResize} from "@utils/layout";
import styled from "@emotion/styled";
import tw from "twin.macro";

interface EmptyProps {
  iconType?: 'filter' | 'search';
  text?: string | React.ReactElement;
  subText?: string | React.ReactElement;
  button?: React.ReactElement;
}

export const Empty = ({ iconType, text, subText, button }: EmptyProps) => {
  const { isTablet } = useLayoutResize();

  return (
    <Container>
      <IconWrapper>
        {iconType === 'filter' && <IconEmpty width={isTablet ? 40 : 32} height={isTablet ? 40 : 32} />}
        {iconType === 'search' && <IconSearch />}
      </IconWrapper>
      {typeof text === 'string' ? <Text>{text}</Text> : text}
      {typeof subText === 'string' ? <SubText>{subText}</SubText> : subText}
      {button && <ButtonWrapper>{button}</ButtonWrapper>}
    </Container>
  );
};

Empty.defaultProps = {
  iconType: 'filter',
  text: undefined,
  subText: undefined,
  button: undefined,
}

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`mt-3`,
]);

const Text = styled.strong([
  tw`block`,
  tw`mt-2`,
  tw`text-gray-60`,
  tw`font-bold`,
  tw`text-base`,
  tw`leading-none`,
  tw`text-center`,
]);

const SubText = styled.p([
  tw`mt-1`,
  tw`text-gray-60`,
  tw`text-xs`,
  tw`leading-[1.5]`,
  tw`text-center`,
]);

const IconWrapper = styled.div([
  tw`mb-1`,
]);

const Container = styled.div([
  tw`w-full`,
  tw`h-[400px]`,
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`items-center`,
]);
import data from './data.json';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { DaoNeithComponentsForMobile } from '@components/dao/neith/components/mobile';
import { DaoNeithComponentsForDesktop } from '@components/dao/neith/components/desktop';
import { Button } from '@components/common/button';
import { useLayoutResize } from "@utils/layout";
import {message} from "antd";
import classNames from "classnames";
import {useMemo} from "react";
import {useTranslation} from "next-i18next";

export type NeithComponent = {
  key: string;
  name: string;
  description: string;
  icon: string;
};

export type DaoNeithComponentsProps = {
  components?: NeithComponent[];
};

export const DaoNeithComponents = ({ components }: DaoNeithComponentsProps) => {
  const { isTablet } = useLayoutResize();

  const { i18n } = useTranslation('ko');
  const toast = useMemo(() => {
    return i18n.language === 'en' ? 'Further details on Neith Protocol will be disclosed in December.' : 'Neith Protocol의 자세한 내용은 12월에 공개됩니다.';
  }, [i18n.language]);

  const { t } = useTranslation('daoHome');

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>{t('neith.title')}</Title>
          <Description>{t('neith.desc')}</Description>
        </TitleWrapper>
        <ButtonWrapper>
          <StyledButton className={classNames('disabled')} onClick={() => message.info(`${toast}`)}>{t('neith.btn1')}</StyledButton>
        </ButtonWrapper>
        <ComponentsWrapper>
          {
            isTablet ?
              <DaoNeithComponentsForDesktop components={components} /> :
              <DaoNeithComponentsForMobile components={components} />
          }
        </ComponentsWrapper>
      </Wrapper>
    </Container>
  );
};

DaoNeithComponents.defaultProps = {
  components: data,
};

const Container = styled.div([
  tw`bg-gray-90`,
]);

const Wrapper = styled.div([
  tw`pt-10`,
  tw`pb-11`,
  tw`flex`,
  tw`flex-col`,
  tw`text-center`,
  tw`md:px-10`,
  tw`md:items-center`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);

const TitleWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`max-w-xs sm:max-w-xl`,
  tw`mx-2 sm:mx-auto`,
  tw`text-center`,
  tw`self-center`,
  tw`gap-y-3`,
]);

const Title = styled.h2([
  tw`text-[22px]`,
  tw`leading-[28px]`,
  tw`text-center`,
  tw`font-header`,
  tw`font-bold`,
  tw`md:text-4xl`,
  tw`md:leading-[48px]`,
]);

const ButtonWrapper = styled.div([
  tw`mt-5 md:mt-10`,
]);

// @ts-ignore
const StyledButton = styled(Button)(({ className }) => [
  tw`mx-auto`,
  tw`rounded-[2px]`,
  tw`font-header`,
  tw`px-5`,
  tw`h-9 md:h-10 xl:h-[38px]`,
  tw`hover:bg-gray-80`,
  tw`text-black`,
  tw`text-sm md:text-base`,
  tw`border`,
  tw`border-black`,
  tw`xl:h-[38px]`,
  tw`xl:text-base`,
  className?.includes('disabled') && [
    tw`text-gray-60`,
    tw`border-gray-60`,
    tw`hover:bg-transparent`,
  ],
]);

const ComponentsWrapper = styled.div([
  tw`flex`,
]);

const Description = styled.p([
  tw`font-header`,
  tw`text-center`,
  tw`text-sm`,
  tw`md:text-base`,
  tw`xl:text-sm`,
]);

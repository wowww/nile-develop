import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useTranslation } from 'next-i18next';

export const LifeNextBanner = () => {
  const { t } = useTranslation(['life']);

  return (
    <Container>
      <Wrapper>
        <Title>Who’s Next?</Title>
        <Desc>{t('home.nft.text')}</Desc>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`items-center`,
  tw`gap-1`,
  `
    @media (min-width: 768px) and (max-width: 1279px) {
      flex: 0 0 309px;
    }
  `,
]);

const Container = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`gap-6`,
  `
    @media (min-width: 768px) {
      &:before,
      &:after {
        content: '';
        width: 250px;
        height: 110px;
        flex: 0 0 250px;
      }

      &:before {
        background: url('https://file.mir4global.com/nile/resources/img/img_life_arrow_l.png') no-repeat 50% / cover;
      }

      &:after {
        background: url('https://file.mir4global.com/nile/resources/img/img_life_arrow_r.png') no-repeat 50% / cover;
      }
    }

    @media (min-width: 1280px) {
      &:before {
        width: 297px;
        height: 156px;
        flex: 0 0 297px;
      }

      &:after {
        width: 355px;
        height: 156px;
        flex: 0 0 355px;
      }
    }
  `,
  tw`md:gap-[50px]`,
]);

const Title = styled.strong([
  tw`font-header`,
  tw`text-black`,
  tw`text-2xl`,
  tw`leading-[1.2]`,
  tw`font-bold`,
  tw`md:text-[40px]`,
]);

const Desc = styled.p([
  tw`text-sm`,
  tw`text-gray-30`,
  tw`text-center`,
  tw`md:text-base`,
]);

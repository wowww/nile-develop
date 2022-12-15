import styled from '@emotion/styled';
import tw from 'twin.macro';

export const LifeBanner = () => {
  return (
    <Container>
      <Background />
      <TitleWrapper>
        <Title>Life beyond expectation</Title>
        <Desc>
          There are various projects in Life.
          <br />
          With Life, new experiences become <WordBreak /> a daily life.
        </Desc>
      </TitleWrapper>
    </Container>
  );
};

const WordBreak = styled.br([
  tw`md:hidden`,
]);

const Desc = styled.p([
  tw`text-xl`,
  tw`leading-[1.2]`,
  tw`mt-6`,
  tw`md:text-[32px]`,
  tw`xl:text-3xl`,
]);

const Title = styled.h2([
  tw`text-[32px]`,
  tw`font-bold`,
  tw`md:text-[64px]`,
  tw`xl:text-[60px]`,
]);

const TitleWrapper = styled.div([
  tw`relative`,
  tw`text-white`,
  tw`font-header`,
]);

const Background = styled.div([
  tw`w-[767px]`,
  tw`h-[540px]`,
  tw`absolute`,
  tw`top-0`,
  tw`left-1/2`,
  tw`animate-banner-resize`,
  tw`md:w-[1920px]`,
  tw`md:h-[680px]`,
  `
    background: url('https://file.mir4global.com/nile/resources/img/bg_life_hero_sm.png') no-repeat center / contain;
    transform: translateX(-50%);

    @media (min-width: 768px) {
      background: url('https://file.mir4global.com/nile/resources/img/bg_life_hero.png') no-repeat center / contain;
    }
  `,
]);

const Container = styled.div([
  tw`relative`,
  tw`flex`,
  tw`overflow-hidden`,
  tw`h-[680px]`,
  tw`items-center`,
  tw`justify-center`,
  tw`bg-black`,
  tw`text-center`,
]);

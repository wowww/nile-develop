import tw from "twin.macro";
import styled from "@emotion/styled";
import {IconLogo} from "@components/common/logo/icon";
import {useLayoutResize} from "@utils/layout";
import IconStar from '@/assets/icons/common/ico_star.svg';
import IconLink from '@/assets/icons/common/ico_link.svg';
import IconMore from '@/assets/icons/common/ico_more.svg';

import {useState} from "react";
import classNames from "classnames";
import {Dropdown} from "antd";
import Link from "next/link";
import {Button} from "@components";

export const TokensDetailHeader = () => {
  const {isTablet} = useLayoutResize();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <Container>
      <IconLogo size={40} type="wemix"/>
      <Info>
        <div className="flex">
          <Title>WEMIX(WEMIX)</Title>
          {isTablet &&
            <StyledButton className={classNames({isFavorite})} type="button" onClick={() => setIsFavorite(!isFavorite)}>
              <IconStar width={24} height={24}/>
            </StyledButton>
          }
        </div>
        {isTablet ?
          <ButtonWrapper>
            <Link href="/" target="_blank">
              <Text>
                <span>CoinmarketCap</span>
                <IconLink width={16} height={16} />
              </Text>
            </Link>
            <Link href="/" target="_blank">
              <Text>
                <span>Explorer</span>
                <IconLink width={16} height={16} />
              </Text>
            </Link>
            <Link href="https://coinmarketcap.com/currencies/wemix/" target="_blank">
              <Button
                className="hover:bg-gray-10"
                color="#fff"
                fontSize="12px"
                width="84px"
                height="28px"
                borderRadius="2px"
                background="#1A1A1A"
              >
                <Text>
                  <span>Swap</span>
                  <IconLinkDark width={16} height={16} />
                </Text>
              </Button>
            </Link>
          </ButtonWrapper>
          :
          <ButtonWrapper>
            <StyledButton className={classNames({isFavorite})} type="button"
                          onClick={() => setIsFavorite(!isFavorite)}>
              <IconStar width={24} height={24}/>
            </StyledButton>
            <Dropdown
              overlay={
                <ShareList>
                  <ShareListItem>
                    <Link href="https://coinmarketcap.com/currencies/wemix/" target="_blank">
                      <LinkText>Swap<IconLink width={16} height={16} /></LinkText>
                    </Link>
                  </ShareListItem>
                  <ShareListItem>
                    <Link href="/" target="_blank">
                      <LinkText>CoinmarketCap<IconLink width={16} height={16} /></LinkText>
                    </Link>
                  </ShareListItem>
                  <ShareListItem>
                    <Link href="/" target="_blank">
                      <LinkText>Explorer<IconLink width={16} height={16} /></LinkText>
                    </Link>
                  </ShareListItem>
                </ShareList>
              }
              trigger={['click']}
              placement="bottomRight"
              getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
            >
              <MoreButton type="button">
                <IconMore />
              </MoreButton>
            </Dropdown>
          </ButtonWrapper>
        }
      </Info>
    </Container>
  );
};

const Text = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`gap-1`,
  tw`text-xs`,
  tw`cursor-pointer`,
]);

const IconLinkDark = styled(IconLink)([
  `
    path {
      fill: #fff;
    }
  `,
])

const MoreButton = styled.button([
  `
    svg {
      path {
        fill: #1a1a1a;
      }
    }
  `,
]);

const LinkText = styled.span([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`cursor-pointer`,
]);

const ShareList = styled.ul([
  tw`flex`,
  tw`flex-col`,
  tw`border`,
  tw`border-black`,
  `box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2)`,
  tw`rounded`,
  tw`py-2`,
  tw`bg-white`,
  tw`w-[158px]`,
]);

const ShareListItem = styled.li([
  tw`py-[11px]`,
  tw`px-[12px]`,
  tw`hover:bg-gray-90`,
  tw`cursor-pointer`,
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`md:gap-5`,
  tw`xl:gap-6`,
]);

const Title = styled.h2([
  tw`text-black`,
  tw`font-bold`,
  tw`text-xl`,
  tw`md:text-2xl`,
]);

const StyledButton = styled.button(({className}) => [
  tw`ml-3`,
  `
    svg {
      path {
        fill: #d9d9d9;
      }
    }
  `,
  className?.includes('isFavorite') && [
    `
      svg {
        path {
          fill: #FFD138;
        }
      }
    `,
  ],
])

const Info = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`w-full`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[14px]`,
  tw`md:gap-2`,
  tw`md:flex-row`,
]);
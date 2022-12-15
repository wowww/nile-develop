import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { NileCDNLoader } from '@utils/image/loader';
import { Button } from '@components';
import { Tag } from '@components/common/tag';
import { Avatar, message } from 'antd';
import { useLayoutResize } from '@utils/layout';
import React, { useCallback, useState } from 'react';
import { ModalLayout } from '@components/common/modal/layout';
import { useTranslation } from 'next-i18next';

interface memberType {
  id: number;
  thumbnail: string;
  name: string;
}

export type CommunityListItemProps = {
  id: number;
  type: string; // DAO or NFT
  thumbnail: string;
  tags: string[];
  name: string;
  desc: string;
  members: memberType[];
  latestChat: number,
  marketCap?: number;
  totalVolume?: number;
  unit: string;
};

export const CommunityListItem = ({
  id,
  type,
  thumbnail,
  tags,
  name,
  desc,
  members,
  latestChat,
  marketCap,
  totalVolume,
  unit,
}: CommunityListItemProps) => {
  const { t } = useTranslation(['community']);
  const { isTablet } = useLayoutResize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickJoin = useCallback(() => {
    message.info({ content: t('unfoldingSoon', { ns: 'community' }), key: 'toast' }).then(() => {
      // nothing
    });
  }, [t]);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={thumbnail} loader={NileCDNLoader} layout="fill" width="100%" objectFit="cover" />
        </ImageContainer>
        <Content>
          <InfoWrapper>
            <TagList>
              {tags.map((item) => (
                <Tag color="#1A1A1A" border="1px solid #1a1a1a" key={item}>{item}</Tag>
              ))}
            </TagList>
            <Title>{name}</Title>
            <Desc>{desc}</Desc>
          </InfoWrapper>
          {isTablet &&
            <ButtonWrapper>
              <Button
                className="hover:bg-gray-10 disabled"
                width="100%"
                height="100%"
                background="#1A1A1A"
                color="#FFF"
                borderRadius="4px"
                onClick={onClickJoin}
              >
								Participate
              </Button>
            </ButtonWrapper>
          }
        </Content>
      </Wrapper>
      {false && <DataWrapper>
        <DataItem>
          <Name>Papyrus Members</Name>
          <Value>
            <Avatar.Group maxCount={3} className="mr-1">
              {members &&
                members.map((member) => (
                  <Avatar src={`https://file.mir4global.com/nile/resources${member.thumbnail}`} size={28} key={member.id}>
                    <span>{member.name}프로필 열기</span>
                  </Avatar>
                ))}
            </Avatar.Group>
            +{members.length}
          </Value>
        </DataItem>
        <DataItem>
          <Name>Latest Chat</Name>
          <Value className="items-end"><strong className="mr-2">{latestChat}</strong>minutes ago</Value>
        </DataItem>
        <DataItem>
          <Name>{type === 'dao' ? 'Market Cap' : 'Total NFT volume'}</Name>
          <Value><strong>{unit}{type === 'dao' ? marketCap : totalVolume}</strong></Value>
        </DataItem>
      </DataWrapper>
      }
      {!isTablet &&
        <ButtonWrapper>
          <Button
            className="hover:bg-gray-10 disabled"
            width="100%"
            height="100%"
            background="#1A1A1A"
            color="#FFF"
            borderRadius="4px"
            disabled
            onClick={onClickJoin}
          >
            {t('card.participate', { ns: 'community' })}
          </Button>
        </ButtonWrapper>
      }
      <ModalLayout
        title="월렛 연결이 필요합니다."
        size="sm"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        footer
        footerContent={[
          <Button
            className="hover:bg-gray-10"
            color="#FFF"
            background="#1A1A1A"
            fontSize="14px"
            width="100%"
            height="38px"
            borderRadius="4px"
            onClick={() => setIsOpen(false)}
          >확인</Button>,
        ]}
      >
        Community 입장을 위해 월렛을 연결해 주세요.
      </ModalLayout>
    </Container>
  );
};

CommunityListItem.defaultProps = {
  marketCap: null,
  totalVolume: null,
};

const Content = styled.div([
  tw`md:flex`,
  tw`md:flex-col`,
  tw`md:justify-between`,
  tw`md:h-[240px] xl:h-[200px]`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center md:items-start`,
  tw`md:flex-row`,
  tw`md:gap-8`,
  tw``,
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`w-full`,
  tw`h-[36px]`,
  tw`md:w-[165px]`,
  tw`md:h-[40px]`,
  tw`xl:w-[150px]`,
  tw`xl:h-[38px]`,
  tw`md:mt-5`,
  css`
    button {
      ${tw`w-[120px] md:w-[150px]`}
    }
    
    .disabled {
      ${tw`text-[rgba(255, 255, 255, 0.25)]`}
      ${tw`bg-[#d9d9d9]`}
      ${tw`border-[#d9d9d9]`}
      ${tw`text-[#a6a6a6]`}
      cursor: not-allowed;
      pointer-events: none;
    }
  `,
]);

const Value = styled.span([
  tw`text-base`,
  tw`text-black`,
  tw`flex`,
  tw`items-center`,
  tw`h-7`,
  `
    strong {
      font-weight: bold;
      font-size: 24px;
    }
  `,
  tw`xl:h-auto`,
]);

const DataItem = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:gap-3`,
]);

const Name = styled.span([
  tw`text-xs`,
  tw`text-gray-60`,
]);

const DataWrapper = styled.div([
  tw`flex`,
  tw`flex-wrap`,
  tw`gap-5`,
  tw`pt-5`,
  tw`md:gap-12`,
  tw`md:pb-5`,
  tw`md:border-b`,
  tw`md:border-gray-80`,
  tw`xl:flex-col`,
  tw`xl:gap-6`,
  tw`xl:border-b-0`,
  tw`xl:border-l`,
  tw`xl:pl-10`,
  tw`xl:w-[240px]`,
  tw`xl:py-0`,
  tw`xl:gap-0`,
  tw`xl:justify-between`,
]);

const Title = styled.h3([
  tw`font-bold`,
  tw`text-xl`,
  tw`text-black`,
  tw`mt-3`,
  tw`md:mt-4`,
  tw`md:text-2xl`,
]);

const Desc = styled.span([
  tw`text-sm`,
  tw`text-gray-30`,
  tw`mt-2`,
  tw`md:text-base`,
  tw`xl:text-sm`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center md:items-start`,
  tw`pb-5`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`border-0`,
]);

const TagList = styled.div([
  tw`flex`,
  tw`gap-1`,
  tw`mt-5`,
  tw`md:mt-0`,
  css`
    span {
      ${tw`h-[26px] xl:h-[20px]`}
      ${tw`text-sm xl:text-xs`}
      ${tw`py-0`}
      ${tw`font-bold`}
      ${tw`leading-[1px]`}
    }
  `,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-full`,
  `aspect-ratio: 320/174`,
  tw`overflow-hidden`,
  tw`w-[200px] md:w-[240px] xl:w-[200px]`,
  tw`md:h-[240px] xl:h-[200px]`,
  `
    min-width: 200px !important;
    min-height: 200px;
    img {
      ${tw`w-full`}
      ${tw`xl:min-w-[200px]`}
    }
    
    @media (min-width: 768px) {
      aspect-ratio: 1/1;
      min-width: 240px !important;
    }
    
    @media (min-width: 1280px) {
      aspect-ratio: 1/1;
      min-width: 200px !important;
    }
  `,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`xl:flex-row`,
  tw`xl:w-full`,
  tw`xl:justify-between`,
]);

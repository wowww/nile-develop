import { DaoNeithComponentsProps } from '@components/dao/neith/components';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import classNames from 'classnames';

import ImgStation from '@/assets/img/daoNeith/img_station.svg';
import ImgTrust from '@/assets/img/daoNeith/img_trust.svg';
import ImgTreasury from '@/assets/img/daoNeith/img_treasury.svg';
import ImgStaking from '@/assets/img/daoNeith/img_staking_pool.svg';
import ImgFurnace from '@/assets/img/daoNeith/img_furnace.svg';
import ImgGovernance from '@/assets/img/daoNeith/img_governance.svg';
import ImgCreator from '@/assets/img/daoNeith/img_creator.svg';
import {useTranslation} from "next-i18next";

const neithImage = (neithType: string) => {
  switch (neithType) {
    case 'station':
      return <ImgStation />;
    case 'trust':
      return <ImgTrust />;
    case 'treasury':
      return <ImgTreasury />;
    case 'staking-pool':
      return <ImgStaking />;
    case 'furnace':
      return <ImgFurnace />;
    case 'governance':
      return <ImgGovernance />;
    case 'creator':
      return <ImgCreator />;
    default:
      return false;
  }
};

export const DaoNeithComponentsForDesktop = ({
  components,
}: DaoNeithComponentsProps) => {
  const { t } = useTranslation('daoHome');

  return (
    <NeithItemWrapper>
      {components?.map((component) => (
        <NeithItem
          className={classNames(`${component.key}`)}
          key={component.name}
        >
          <ImageContainer>{neithImage(component.key)}</ImageContainer>
          <Desc>
            <ComponentTitle>{t(`${component.name}`)}</ComponentTitle>
            <ComponentDescription>{t(`${component.description}`)}</ComponentDescription>
          </Desc>
        </NeithItem>
      ))}
    </NeithItemWrapper>
  );
};

const ImageContainer = styled.div([
  tw`absolute`,
  tw`top-10`,
  tw`right-6`,
  tw`w-[140px]`,
  tw`text-[140px]`,
  `transition: top .4s`,
  `
    path.img_station_svg__dao-neith,
    path.img_trust_svg__dao-neith,
    path.img_treasury_svg__dao-neith,
    path.img_staking_pool_svg__dao-neith,
    path.img_governance_svg__dao-neith,
    path.img_creator_svg__dao-neith,
    path.img_furnace_svg__dao-neith {
      fill: #5e5ff5;
    }
  `,
]);

const NeithItemWrapper = styled.div([
  tw`w-full`,
  tw`mt-10`,
  tw`max-h-[700px]`,
  tw`xl:max-h-[564px]`,
  `
    column-count: 3;
    column-gap: 20px;
    column-fill: balance;
    
    @media (min-width: 1280px) {
      column-count: 4;
    }
  `,
]);

const ComponentTitle = styled.strong([
  tw`text-black`,
  tw`leading-none`,
  tw`text-base`,
  tw`font-bold`,
  tw`capitalize`,
  tw`xl:text-xl`,
]);

const Desc = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`items-start`,
  `
    transition: transform .5s;
    @media (min-width: 1280px) {
      transform: translateY(calc(100% - 20px));
    }
  `,
]);

const ComponentDescription = styled.span([
  tw`font-header`,
  tw`text-xs`,
  tw`leading-[20px]`,
  tw`text-gray-30`,
  tw`text-left`,
  tw`xl:opacity-0`,
  `transition: opacity .4s`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
]);

const NeithItem = styled.div([
  `column-width: 216px`,
  tw`relative`,
  tw`overflow-hidden`,
  tw`inline-flex`,
  tw`flex-col`,
  tw`justify-end`,
  tw`p-5`,
  tw`bg-white`,
  tw`mb-5`,
  `transition: background-color .4s`,
  css`
    @media (min-width: 1280px) {
      &:hover {
        ${tw`bg-[#5e5ff5]`}
        
        ${Desc} {
          transform: translateY(0);
        }
        
        ${ComponentDescription} {
          ${tw`xl:opacity-100`}
          ${tw`xl:text-white`}
        }
        
        ${ComponentTitle} {
          ${tw`xl:text-white`}
        }
        
        ${ImageContainer} {
          ${tw`top-5`}
        }
      }
    }
    
    &.trust,
    &.staking-pool,
    &.creator {
      ${tw`mb-0`}
    }
    
    &.treasury,
    &.furnace {
      ${tw`xl:mb-0`}
    }
   
    &.staking-pool {
      ${tw`mb-5`}
    }
    
    &.station,
    &.trust {
      ${tw`min-h-[330px]`}

      ${ImageContainer} {
        ${tw`right-auto`}
        ${tw`left-[50%]`}
        ${tw`max-w-[140px]`}
        ${tw`mx-auto`}
        transform: translate(-50%);
      }
    }

    &.treasury {
      ${tw`min-h-[420px]`}

      ${ImageContainer} {
        ${tw`left-10`}
        ${tw`text-[240px]`}
        ${tw`max-w-[176px]`}
        ${tw`w-[176px]`}
      }
    }

    &.staking-pool,
    &.creator {
      ${tw`min-h-[240px]`}

      ${ImageContainer} {
        ${tw`top-5`}
        ${tw`w-[100px]`}
        ${tw`text-[100px]`}
      }
    }

    &.furnace,
    &.governance {
      ${tw`min-h-[200px]`}

      ${ImageContainer} {
        ${tw`top-5`}
        ${tw`w-[100px]`}
        ${tw`text-[100px]`}
      }
    }
    
    &.station,
    &.furnace,
    &.governance {
      ${tw`xl:min-h-[220px]`}
    }
    
    &.trust,
    &.staking-pool,
    &.creator {
      ${tw`xl:min-h-[300px]`}
    }
    
    &.treasury {
      ${tw`xl:min-h-[540px]`}
    }
  `,
]);

import { ModalLayout } from '@components/common/modal/layout';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import IconAlbum from '@/assets/icons/common/ico_album.svg';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import IconClose from '@/assets/icons/common/ico_close.svg';

import { css, Global } from '@emotion/core';
import { NileApiService } from '@/services/nile/api';
import { MyPageOwnedListItem } from '@components/mypage/nft/owned/item';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import classNames from 'classnames';
import { useLayoutResize } from '@utils/layout';
import { Checkbox } from 'antd';
import { Button } from '@components';
import Nft from "@/models/nile/market/nft";
import {FC} from "preact/compat";
import {GetServerSideProps} from "next";

interface propertiesOptionType {
  index: number;
  value: string;
}

type MyPageNftAlbumModalProps = {
  nfts: Nft[];
}

export const MyPageNftAlbumModal = ({ nfts }: MyPageNftAlbumModalProps) => {
  const { isTablet } = useLayoutResize();

  const [isOpen, setIsOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('lus');

  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState<
    propertiesOptionType[]
  >([]);

  const collections = useMemo(
    () => [
      {
        text: 'LUS264',
        value: 'lus',
        thumbnail: '/img/banner/img_A02_Aldgate.png',
      },
      {
        text: 'Tangled',
        value: 'tangled',
        thumbnail: '/img/banner/img_A02_Aldgate.png',
      },
    ],
    [],
  );
  const properties = useMemo(
    () => [
      {
        id: 1,
        title: 'Zone',
        checkList: [
          'Zone1',
          'Zone2',
          'Zone3',
          'Zone4',
          'Zone5',
          'Zone6',
          'Zone7',
          'Zone8',
        ],
      },
      {
        id: 2,
        title: 'State Line',
        checkList: [
          'Bekerloo',
          'Central',
          'Central',
          'Circle',
          'District',
          'Hammersmith & City',
          'Jubilee',
          'Metropolitan',
          'Northern',
          'Piccadilly',
          'Victoria',
          'Victoria',
        ],
      },
      { id: 3, title: 'Staton with Car Parks', checkList: ['Yes', 'No'] },
      { id: 4, title: 'Station with Bicycle Parking', checkList: ['Yes', 'No'] },
      {
        id: 5,
        title: 'Toilets outside ticket gateline',
        checkList: ['None', 'Male', 'Female', 'Baby Changing', 'Accessible'],
      },
      {
        id: 6,
        title: 'Toilets inside ticket gateline',
        checkList: ['None', 'Male', 'Female', 'Baby Changing', 'Accessible'],
      },
    ],
    [],
  );

  const onClickCollection = useCallback((value: string) => {
    setCollectionOpen(false);
    setSelectedCollection(value);
  }, []);

  const selectClose = useCallback(() => {
    setCollectionOpen(false);
    setPropertiesOpen(false);
  }, []);

  const onClickProperty = useCallback(
    (e: any, idx: number, val: string) => {
      if (e.target.checked) {
        setSelectedProperties([
          ...selectedProperties,
          {
            index: idx,
            value: val,
          },
        ]);
      } else {
        setSelectedProperties(selectedProperties.filter(({ index, value }) => (index !== idx || value !== val)))
      }
    },
    [selectedProperties],
  );

  return (
    <div>
      <Global
        styles={css`
          .property-modal {
            ${tw`md:!w-[640px]`}
            ${tw`md:!h-[600px]`}
            ${tw`xl:!w-[800px]`}
            ${tw`xl:!h-[612px]`}
          
          .ant-modal-content {
            ${tw`h-full`}
          }
          
          .ant-modal-body {
            ${tw`p-0`}
            ${tw`md:max-h-[434px]`}
            ${tw`xl:max-h-[454px]`}
            height: calc(var(--vh, 1vh)*100 - 76px - 67px - 80px);
          }
        `}
      />
      <StyledButton type="button" onClick={() => setIsOpen(true)}>
        <Album />
        NFT Album
      </StyledButton>
      <ModalLayout
        className="property-modal"
        isOpen={isOpen}
        size="md"
        setIsOpen={setIsOpen}
        title={
          <ModalTitleWrapper>
            <ModalTitle>NFT 컬렉션 수집 현황</ModalTitle>
            <ModalSubTitle>
              전체 컬렉션 중 내가 소유한 NFT 개수를 확인할 수 있어요.
            </ModalSubTitle>
          </ModalTitleWrapper>
        }
      >
        <UtilsWrapper>
          <DropdownWrapper className={classNames({ isOpen: collectionOpen })}>
            <DropdownBtn
              onBlur={() => setCollectionOpen(false)}
              onClick={() => setCollectionOpen(!collectionOpen)}
            >
              {selectedCollection} <IconArrow />
            </DropdownBtn>
            <Dropdown>
              {!isTablet && <DropdownTitle>Collection</DropdownTitle>}
              <DropdownList>
                {collections.map((item) => (
                  <DropdownItem
                    key={item.value}
                    onClick={() => onClickCollection(item.value)}
                    className={classNames({
                      selected: selectedCollection === item.value,
                    })}
                  >
                    <ImageContainer>
                      <Image
                        src={item.thumbnail}
                        layout="fill"
                        loader={NileCDNLoader}
                      />
                    </ImageContainer>
                    <CollectionTitle>{item.text}</CollectionTitle>
                  </DropdownItem>
                ))}
              </DropdownList>
            </Dropdown>
          </DropdownWrapper>
          <DropdownWrapper
            className={classNames({ isOpen: propertiesOpen }, 'md:!w-full')}
          >
            <DropdownBtn
              className={classNames('properties', {
                checked: selectedProperties.length > 0,
              })}
              onClick={() => setPropertiesOpen(!propertiesOpen)}
            >
              <div className="flex gap-2 items-center">
                Properties
                {selectedProperties.length > 0 && (
                  <Tag>{selectedProperties.length}</Tag>
                )}
              </div>
              <IconArrow />
            </DropdownBtn>
            <Dropdown className="properties-dropdown">
              {!isTablet && (
                <DropdownTitle className="relative">
                  Properties
                  <button
                    type="button"
                    onClick={() => setPropertiesOpen(false)}
                  >
                    <Close />
                  </button>
                </DropdownTitle>
              )}
              <DropdownContent>
                <OptionList>
                  {properties.map((item, idx) => (
                    <OptionItem key={item.id}>
                      <OptionTitle>{item.title}</OptionTitle>
                      <CheckboxWrapper>
                        {item.checkList.map((text) => (
                          <Checkbox
                            key={`${text}-${item.id}`}
                            defaultChecked={false}
                            onChange={(e) => onClickProperty(e, idx, text)}
                          >
                            {text}
                          </Checkbox>
                        ))}
                      </CheckboxWrapper>
                    </OptionItem>
                  ))}
                </OptionList>
              </DropdownContent>
              <ControlBtnWrapper>
                <ControlBtn>
                  <Button
                    className="hover:bg-gray-90"
                    iconValue="reset"
                    iconType
                    background="#fff"
                    color="#1A1A1A"
                    border="1px solid #1a1a1a"
                    width="100%"
                    height="100%"
                    borderRadius="2px"
                  >
                    Reset
                  </Button>
                </ControlBtn>
                <ControlBtn>
                  <Button
                    className="hover:bg-gray-10"
                    background="#1a1a1a"
                    color="#fff"
                    width="100%"
                    height="100%"
                    borderRadius="2px"
                  >
                    Apply
                  </Button>
                </ControlBtn>
              </ControlBtnWrapper>
            </Dropdown>
          </DropdownWrapper>
        </UtilsWrapper>
        <ListWrapper>
          <Text>Owned {nfts.length}/264 NFT</Text>
          <List>
            {nfts.map((item) => (
              <MyPageOwnedListItem title={item.title} thumbnail={item.image} key={item.id}/>
            ))}
          </List>
        </ListWrapper>
        {!isTablet && (collectionOpen || propertiesOpen) && (
          <SelectMask onClick={selectClose} />
        )}
      </ModalLayout>
    </div>
  );
};

const ControlBtn = styled.div([
  tw`h-[44px]`,
  tw`w-full`,
  tw`text-base`,
  tw`leading-[100%]`,
  tw`md:w-fit`,
  tw`md:text-xs`,
  tw`md:h-[28px]`,
  css`
    button {
      ${tw`md:px-4`}
    }
  `,
]);

const ControlBtnWrapper = styled.div([
  tw`flex`,
  tw`justify-end`,
  tw`gap-2`,
  tw`py-4`,
  tw`px-5`,
  tw`bg-white`,
  tw`border-t`,
  tw`border-gray-80`,
  tw`md:px-6`,
]);

const CheckboxWrapper = styled.div([
  tw`grid`,
  tw`grid-cols-2`,
  tw`gap-x-4`,
  css`
    .ant-checkbox {
      &-wrapper {
        ${tw`!m-0`}
        ${tw`py-[13px]`}
      }
      &-inner {
        &:before {
          ${tw`absolute`}
          ${tw`content-['']`}
          ${tw`top-[1px]`}
          ${tw`left-[1px]`}
          ${tw`w-3`}
          ${tw`h-3`}
          background: url("https://file.mir4global.com/nile/resources/icons/common/ico_check_w1.svg") 50% / cover no-repeat;
          ${tw`md:w-4`}
          ${tw`md:h-4`}
          ${tw`xl:w-3`}
          ${tw`xl:h-3`}
        }
      }
    }
  `,
]);

const OptionTitle = styled.strong([
  tw`font-bold`,
  tw`text-base`,
  tw`pb-2`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`xl:text-sm`,
]);

const OptionItem = styled.li([tw`flex`, tw`flex-col`, tw`gap-3`, tw`md:gap-4`]);

const OptionList = styled.ul([tw`flex`, tw`flex-col`, tw`gap-7`]);

const DropdownContent = styled.div([
  tw`bg-white`,
  tw`md:max-h-[383px]`,
  tw`max-h-[413px]`,
  tw`p-5`,
  tw`overflow-y-scroll`,
]);

const Close = styled(IconClose)([
  tw`absolute`,
  tw`top-3`,
  tw`right-3`,
  tw`w-6`,
  tw`h-6`,
]);

const Tag = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`w-[22px]`,
  tw`h-4`,
  tw`bg-black`,
  tw`rounded-[100px]`,
  tw`text-white`,
  tw`text-[10px]`,
  tw`leading-[100%]`,
]);

const DropdownTitle = styled.h2([
  tw`p-3`,
  tw`text-base`,
  tw`font-bold`,
  tw`leading-[24px]`,
]);

const SelectMask = styled.div([
  tw`absolute`,
  tw`z-[1000]`,
  tw`inset-0`,
  tw`bg-[rgba(26, 26, 26, .7)]`,
]);

const CollectionTitle = styled.span([
  tw`text-sm`,
  tw`leading-[22px]`,
  tw`md:text-base`,
  tw`md:leading-[24px]`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
]);

const ImageContainer = styled.div([tw`relative`, tw`w-9`, tw`h-9`]);

const DropdownItem = styled.li(({ className }) => [
  tw`flex`,
  tw`items-center`,
  tw`gap-3`,
  tw`py-2`,
  tw`px-5`,
  tw`cursor-pointer`,
  tw`md:px-3`,
  tw`md:hover:bg-gray-90`,
  tw`relative`,
  className?.includes('selected') && [
    css`
      &::after {
        ${tw`content-['']`}
        ${tw`absolute`}
        ${tw`top-[50%]`}
        ${tw`right-5`}
        ${tw`md:right-3`}
        ${tw`w-3`}
        ${tw`h-3`}
        transform: translateY(-50%);
        background: url('https://file.mir4global.com/nile/resources/icons/common/arrow/ico_arrow_check.svg')
          no-repeat 50% / contain !important;
      }
    `,
  ],
]);

const DropdownList = styled.ul([
  tw`flex`,
  tw`flex-col`,
  tw`gap-1`,
  tw`pt-2`,
  tw`pb-5`,
  tw`md:py-3`,
  tw`bg-white`,
  tw`h-full`,
]);

const Dropdown = styled.div([
  tw`absolute`,
  tw`overflow-hidden`,
  tw`z-[2]`,
  tw`top-[34px]`,
  tw`w-full`,
  tw`h-0`,
  tw`border-b-0`,
  `
    transition: height 0.3s ease-in-out, border .3s ease .05s;
  `,
]);

const DropdownBtn = styled.button(({ className }) => [
  tw`border`,
  tw`w-full`,
  tw`border-black`,
  tw`items-center`,
  tw`flex`,
  tw`justify-between`,
  tw`text-black`,
  tw`text-sm`,
  tw`leading-[20px]`,
  tw`h-full`,
  tw`px-3`,
  tw`py-2`,
  tw`md:px-2`,
  tw`md:w-[200px]`,
  `
    svg {
      path {
        fill: #1a1a1a;
      }
    }
  `,
  className?.includes('properties') && [
    tw`border-gray-80`,
    tw`text-gray-60`,
    tw`md:w-full`,
    `
    svg {
      path {
        fill: #a6a6a6;
      }
    }
  `,
  ],
  className?.includes('properties') &&
    className?.includes('checked') && [tw`border-black`, tw`text-black`],
]);

const DropdownWrapper = styled.div(({ className }) => [
  tw`relative`,
  tw`w-[50%]`,
  tw`md:w-auto`,
  tw`h-[36px]`,
  className?.includes('isOpen') && [
    css`
      ${DropdownBtn} {
        &.properties {
          ${tw`border-black`}
          ${tw`text-black`}
        }
        svg {
          transform: rotate(180deg);
        }
      }

      ${Dropdown} {
        ${tw`md:h-[132px]`}
        ${tw`md:border`}
        ${tw`md:border-black`}
        
        &.properties-dropdown {
          ${tw`md:h-[446px]`}
        }

        @keyframes bottom-to-top {
          0% {
            transform: translateY(100%);
          }

          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          ${tw`fixed`}
          ${tw`bottom-0`}
          ${tw`left-0`}
          ${tw`w-full`}
          ${tw`h-auto`}
          ${tw`z-[1001]`}
          ${tw`bg-white`}
          transform: translateY(100%);
          border-radius: 8px 8px 0 0;
          top: initial;
          animation: bottom-to-top ease-in-out 0.2s forwards;
          
          &.properties-dropdown {
            ${tw`h-auto`}
          }
        }
      }
    `,
  ],
]);

const Album = styled(IconAlbum)([
  tw`w-4`,
  tw`h-4`,
  tw`md:w-5`,
  tw`md:h-5`,
  tw`xl:w-4`,
  tw`xl:h-4`,
]);

const ModalTitleWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-1`,
  tw`xl:gap-[7px]`,
]);

const ModalTitle = styled.h1([
  tw`text-base`,
  tw`font-bold`,
  tw`leading-[24px]`,
  tw`text-black`,
  tw`md:leading-[26px]`,
  tw`md:text-lg`,
  tw`xl:text-base`,
  tw`xl:leading-[24px]`,
]);

const ModalSubTitle = styled.span([
  tw`text-xs`,
  tw`leading-[20px]`,
  tw`font-normal`,
  tw`xl:leading-[100%]`,
]);

const StyledButton = styled.button([
  tw`flex`,
  tw`items-center`,
  tw`gap-2`,
  tw`hover:bg-gray-90`,
  tw`text-black`,
  tw`text-sm`,
  tw`border`,
  tw`border-black`,
  tw`px-5`,
  tw`h-9`,
  tw`rounded`,
  tw`md:h-10`,
  tw`md:text-base`,
  tw`xl:text-sm`,
  tw`xl:h-[38px]`,
]);

const List = styled.span([
  tw`grid`,
  tw`grid-cols-2`,
  tw`gap-4`,
  tw`md:grid-cols-3`,
  tw`md:gap-5`,
  tw`xl:gap-4`,
  tw`xl:grid-cols-4`,
]);

const Text = styled.span([
  tw`font-bold`,
  tw`text-black`,
  tw`text-sm`,
  tw`leading-[22px]`,
  tw`md:text-base`,
  tw`md:leading-[1.5]`,
  tw`xl:text-sm`,
  tw`xl:leading-[22px]`,
]);

const ListWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`h-full`,
  tw`gap-3`,
  tw`mt-[76px]`,
  tw`overflow-y-auto`,
  tw`px-5`,
  tw`md:mt-[84px]`,
  tw`md:gap-4`,
  tw`md:px-6`,
  tw`xl:mt-[80px]`,
]);

const UtilsWrapper = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`absolute`,
  tw`top-[80px]`,
  tw`left-5`,
  tw`py-5`,
  tw`md:top-[82px]`,
  tw`md:left-6`,
  tw`xl:py-4`,
  tw`xl:top-[78px]`,
  `
    width: calc(100% - 40px);
    
    @media (min-width: 768px) {
      width: calc(100% - 48px);
    }
  `,
]);

import { useRouter } from 'next/router';
import { FacebookShareButton, TwitterShareButton, TelegramShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Dropdown } from 'antd';
import styled from "@emotion/styled";
import tw from "twin.macro";

import IconShare from '@/assets/icons/common/ico_share.svg';

export const ShareButton = () => {
  const { pathname } = useRouter();

  // share용 정보
  const shareUrl = `https://www.nile.io${pathname}`;
  const shareTitle = 'NFT Is Life Evolution';
  const shareHashs = ['NILE'];
  const shareUsers = 'NILE_WM';

  return (
    <div>
      <Dropdown
        overlay={
          <ShareList>
            <ShareListItem>
              <FacebookShareButton title={shareTitle} url={shareUrl}>
                Facebook
              </FacebookShareButton>
            </ShareListItem>
            <ShareListItem>
              <TwitterShareButton title={shareTitle} url={shareUrl} hashtags={shareHashs} via={shareUsers}>
                Twitter
              </TwitterShareButton>
            </ShareListItem>
            <ShareListItem>
              <TelegramShareButton title={shareTitle} url={shareUrl}>
                Telegram
              </TelegramShareButton>
            </ShareListItem>
            <ShareListItem>
              <CopyToClipboard text={shareUrl}>
                <button type="button">Copy link</button>
              </CopyToClipboard>
            </ShareListItem>
          </ShareList>
        }
        trigger={['click']}
        placement="bottomRight"
        getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
      >
        <StyledButton type="button">
          <IconShare />
        </StyledButton>
      </Dropdown>
    </div>
  );
};

const ShareList = styled.ul([
  tw`flex`,
  tw`flex-col`,
  tw`border`,
  tw`border-black`,
  `box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2)`,
  tw`rounded`,
  tw`py-2`,
  tw`bg-white`,
]);

const ShareListItem = styled.li([
  tw`p-[12px]`,
  tw`w-[132px]`,
  tw`hover:bg-gray-90`,
  tw`cursor-pointer`,
]);

const StyledButton = styled.button([
  `
    svg {
      width: 24px;
      height: 24px;
      
      path {
        transition: fill 0.3s;
      }
    }
    
    &.ant-dropdown-open {
      svg {
        path {
          fill: #9860FF;
        }
      }
    }
  `,
]);

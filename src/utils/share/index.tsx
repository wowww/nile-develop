import { FacebookShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button } from '@components';
import { message } from 'antd';

export type ShareButtonProps = {
  title: string;
  url: string;
  hashtags?: string[];
  username?: string;
};

const useShareButton = ({ title, url, hashtags, username }: ShareButtonProps) => {
  return {
    twitter: <TwitterShareButton title={title} url={url} hashtags={hashtags} via={username}>Twitter</TwitterShareButton>,
    facebook: <FacebookShareButton title={title} url={url} hashtag={hashtags?.at(0)}>Facebook</FacebookShareButton>,
    telegram: <TelegramShareButton title={title} url={url}>Telegram</TelegramShareButton>,
    clipboard: <CopyToClipboard text={url}><Button onClick={() => message.info('링크가 복사되었습니다.')}>Copy Link</Button></CopyToClipboard>,
  };
};

export default useShareButton;

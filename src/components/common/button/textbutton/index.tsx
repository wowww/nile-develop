/* eslint-disable react/require-default-props */
import React from 'react';
import cn from 'classnames';
import { Button } from 'antd';
import { v4 as uid } from 'uuid';
// import { useTranslation, Trans } from 'next-i18next';
import IconScroll from '@/assets/icons/common/arrow/ico_arrow_scroll.svg';
import IconLineArrow from '@/assets/icons/common/arrow/ico_arrow_right.svg';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import IconNotice from '@/assets/icons/common/ico_notice.svg';
import IconNoticeActive from '@/assets/icons/common/ico_notice_active.svg';
import IconClose from '@/assets/icons/common/ico_close.svg';

interface buttonPropsType {
  onClick?: () => void;
  buttonText: string;
  iconValue?: string; // icon type
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined; // link 타입일 경우 link 타입 추가
  href?: string; // link 타입일 경우에만 추가
  target?: string; // link 타입이고 새창열림일 경우 추가
  prefix?: boolean; // 아이콘이 앞에 있는 경우
  gapSpacing?: 'lg' | 'md' | 'sm' | undefined; // 버튼 텍스트 사이 간격 (default: md) lg: 8px, md: 4px, sm: 2px
  size: string;
  direction?: 'right' | 'left' | 'top' | 'bottom' | undefined; // arrow 방향
}

export const TextButton: React.FC<buttonPropsType> = ({
  onClick,
  buttonText,
  iconValue,
  href,
  prefix,
  gapSpacing = 'md',
  size,
  type,
  target,
  direction = 'right',
}) => {
  // const { t } = useTranslation(['common']);
  const key = uid();
  const viewIcon = () => {
    switch (iconValue) {
      case 'line-arrow': // info icon
        return <IconLineArrow />;
      case 'arrow': // info icon
        return <IconArrow />;
      case 'scroll': // Papyrus icon
        return <IconScroll />;
      case 'notice':
        return <IconNotice />;
      case 'notice-active':
        return <IconNoticeActive />;
      case 'close':
        return <IconClose />;
      default:
        return false;
    }
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        `btn btn-text btn-spacing-${gapSpacing} ${size}`,
        iconValue !== undefined ? `btn-icon-${iconValue}` : '',
        iconValue === 'arrow' ? `arrow-dir-${direction}` : '',
      )}
      href={href}
      type={type}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      key={key}
      title={target === '_blank' ? ('blank') : undefined}
    >
      {iconValue && prefix && viewIcon()}
      <span>{buttonText}</span>
      {!prefix && viewIcon()}
    </Button>
  );
};

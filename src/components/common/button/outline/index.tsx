import React, { FC } from 'react';
import cn from 'classnames';
import { Button } from 'antd';

import IconInfo from '@/assets/icons/common/icon_info.svg';
import IconPapyrus from '@/assets/icons/common/logo/icon_logo_papyrus.svg';

export type buttonPropsType = {
  onClick?: () => void;
  buttonText: string;
  block?: boolean;
  color: string;
  size: string;
  disabled?: boolean;
  iconType?: boolean; // iconType 일 경우 true
  iconValue?: string; // icon name
  align?: boolean; // space-between 일 경우 true
};

export const OutlineButton: FC<buttonPropsType> = ({ onClick, buttonText, block, color, size, iconType, iconValue, align, disabled }) => {
  const viewIcon = () => {
    switch (iconValue) {
      case 'info': // info icon
        return <IconInfo />;
      case 'papyrus': // Papyrus icon
        return <IconPapyrus />;
      default:
        return undefined;
    }
  };

  const typeIcon = () => {
    if (!iconType) {
      return buttonText;
    }
    if (!align) {
      return (
        <span className={cn('btn-inner')}>
          {viewIcon()}
          <span>{buttonText}</span>
        </span>
      );
    }
    return (
      <span className={cn('btn-inner space-between')}>
        <span>{buttonText}</span>
        {viewIcon()}
      </span>
    );
  };

  return (
    <Button
      className={cn(`btn btn-outline outline-${color} btn-${size}`)}
      onClick={onClick}
      block={block}
      disabled={disabled}>
      {typeIcon()}
    </Button>
  );
};

OutlineButton.defaultProps = {
  onClick: undefined,
  block: undefined,
  disabled: false,
  iconType: false,
  iconValue: undefined,
  align: false,
};

export default OutlineButton;

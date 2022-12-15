import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import tw from 'twin.macro';
import classNames from 'classnames';
import { NileCDNLoader } from '@utils/image/loader';

export type MarketFavoriteToggleProps = {
  active?: boolean;
  direction: 'vertical' | 'horizontal',
  onChange: (changed: boolean) => void;
  showCount?: boolean;
  count?: number;
}

export const MarketFavoriteToggle = ({ active, direction, onChange, showCount, count }: MarketFavoriteToggleProps) => {
  const [isActive, setActive] = useState(false);

  // TODO: 설계에 따라서 사용하지 않게 될수도 있음
  const computedCount = useMemo(() => {
    const value = count ?? 0;
    return isActive ? value + 1 : value;
  }, [count, isActive]);

  const toggle = useCallback(() => {
    setActive((prev) => !prev);
  }, [setActive]);

  useEffect(() => {
    setActive(active ?? false);
  }, [setActive, active]);

  useEffect(() => {
    onChange(isActive);
  }, [onChange, isActive]);

  return (
    <Wrapper onClick={toggle} className={classNames(direction)}>
      <Image
        src={isActive ? '/icons/common/toggle/icon_toggle_favorite_on.svg' : '/icons/common/toggle/icon_toggle_favorite_off.svg'}
        loader={NileCDNLoader}
        width={24}
        height={24}
      />
      {showCount && <Count>+{computedCount}</Count>}
    </Wrapper>
  );
};

MarketFavoriteToggle.defaultProps = {
  active: false,
  showCount: true,
  count: 0,
};

const Wrapper = styled.div(({ className }) => [
  tw`inline-flex`,
  tw`gap-1`,
  tw`cursor-pointer`,
  tw`justify-end`,
  tw`items-center`,
  className?.includes('vertical') && [
    tw`flex-col`,
  ],
  className?.includes('horizontal') && [
    tw`flex-row`,
  ],
]);

const Count = styled.span([
  tw`text-black`,
  tw`text-xs`,
  tw`text-right`,
]);

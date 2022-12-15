import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import ListLoaderLottie from './data/list_loader.json';

export const InfiniteLoader = () => {
  const listLoader = useRef<any>(null);

  useEffect(() => {
    const lottieLoad = lottie.loadAnimation({
      container: listLoader.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ListLoaderLottie,
    });

    return () => lottieLoad.destroy();
  }, [listLoader]);

  return <div ref={listLoader} className="w-full h-full"/>;
};
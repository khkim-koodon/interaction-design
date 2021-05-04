import { useEffect, useState } from 'react';

// 창의 높이를 저장해두고 필요할 때마다 값을 제공
// 창의 높이가 변경되면 새로운 창의 높이로 다시 렌더링된다.
export const useWindowHeight = () => {
  // NextJS SSR의 window is not defined 에러 해결
  const innerHeight = typeof window !== 'undefined' && window.innerHeight;
  const [height, setHeight] = useState(innerHeight);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const onResize = () => setHeight(window.innerHeight);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, []);
  }

  return height;
};

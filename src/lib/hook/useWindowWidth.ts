import { useEffect, useState } from 'react';

// 창의 너비를 저장해두고 필요할 때마다 값을 제공
// 창의 너비가 변경되면 새로운 창의 너비로 다시 렌더링된다.
export const useWindowWidth = () => {
  const innerWidth = typeof window !== 'undefined' && window.innerHeight;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
};

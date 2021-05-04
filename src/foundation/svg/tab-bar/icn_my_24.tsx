import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconMy24 = ({ isActive }: { isActive: number }) => {
  const themeContext = useContext(ThemeContext);
  const color: string =
    isActive === 1 ? themeContext.primary : themeContext.gray3;
  const pathD: string =
    isActive === 1
      ? 'M18,11 L18,20 L6,20 L6,11 L18,11 Z M12,4 C13.654,4 15,5.346 15,7 C15,8.654 13.654,10 12,10 C10.346,10 9,8.654 9,7 C9,5.346 10.346,4 12,4 Z'
      : 'M18,11 L18,20 L6,20 L6,11 L18,11 Z M16,13 L8,13 L8,18 L16,18 L16,13 Z M12,4 C13.6568542,4 15,5.34314575 15,7 C15,8.65685425 13.6568542,10 12,10 C10.3431458,10 9,8.65685425 9,7 C9,5.34314575 10.3431458,4 12,4 Z M12,6 C11.4477153,6 11,6.44771525 11,7 C11,7.55228475 11.4477153,8 12,8 C12.5522847,8 13,7.55228475 13,7 C13,6.44771525 12.5522847,6 12,6 Z';

  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="000-Icon/24/icn_my_24"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path d={pathD} id="Shape" fill={color}></path>
        </g>
      </svg>
    </>
  );
};

export default IconMy24;

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconConsignment24 = ({ isActive }: { isActive: number }) => {
  const themeContext = useContext(ThemeContext);
  const color: string =
    isActive === 1 ? themeContext.primary : themeContext.gray3;
  const pathD: string =
    isActive === 1
      ? 'M22,11 L22,20 L14,20 L14,11 L22,11 Z M10,11 L10,20 L2,20 L2,11 L10,11 Z M13,14 L13,16 L11,16 L11,14 L13,14 Z M18,4 C19.654,4 21,5.346 21,7 C21,8.654 19.654,10 18,10 C16.346,10 15,8.654 15,7 C15,5.346 16.346,4 18,4 Z M6,4 C7.654,4 9,5.346 9,7 C9,8.654 7.654,10 6,10 C4.346,10 3,8.654 3,7 C3,5.346 4.346,4 6,4 Z'
      : 'M10,11 L10,20 L2,20 L2,11 L10,11 Z M22,11 L22,20 L14,20 L14,11 L22,11 Z M8,13 L4,13 L4,18 L8,18 L8,13 Z M20,13 L16,13 L16,18 L20,18 L20,13 Z M13,14 L13,16 L11,16 L11,14 L13,14 Z M6,4 C7.65685425,4 9,5.34314575 9,7 C9,8.65685425 7.65685425,10 6,10 C4.34314575,10 3,8.65685425 3,7 C3,5.34314575 4.34314575,4 6,4 Z M18,4 C19.6568542,4 21,5.34314575 21,7 C21,8.65685425 19.6568542,10 18,10 C16.3431458,10 15,8.65685425 15,7 C15,5.34314575 16.3431458,4 18,4 Z M6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 Z M18,6 C17.4477153,6 17,6.44771525 17,7 C17,7.55228475 17.4477153,8 18,8 C18.5522847,8 19,7.55228475 19,7 C19,6.44771525 18.5522847,6 18,6 Z';

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
          id="000-Icon/24/icn_consignment_24"
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

export default IconConsignment24;

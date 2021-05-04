import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconShopping24 = ({ isActive }: { isActive: number }) => {
  const themeContext = useContext(ThemeContext);
  const color: string =
    isActive === 1 ? themeContext.primary : themeContext.gray3;
  const pathD: string =
    isActive === 1
      ? 'M12,4 C14.209139,4 16,5.790861 16,8 L18,8 L20,21 L4,21 L6,8 L8,8 C8,5.790861 9.790861,4 12,4 Z M12,6 C10.8954305,6 10,6.8954305 10,8 L14,8 C14,6.8954305 13.1045695,6 12,6 Z'
      : 'M12,4 C14.209139,4 16,5.790861 16,8 L18,8 L20,21 L4,21 L6,8 L8,8 C8,5.790861 9.790861,4 12,4 Z M16.284,10 L7.715,10 L6.33,19 L17.669,19 L16.284,10 Z M12,6 C10.8954305,6 10,6.8954305 10,8 L14,8 C14,6.8954305 13.1045695,6 12,6 Z';

  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/SVG"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="000-Icon/24/icn_shopping_24"
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

export default IconShopping24;

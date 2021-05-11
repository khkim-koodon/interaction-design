import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconScrollDown24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.black;

  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="000-Icon/24/icn_scroll_down_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <polyline
          id="Path-2"
          stroke={color}
          strokeWidth="2"
          points="2 7 12 17 22 7"
        ></polyline>
      </g>
    </svg>
  );
};
export default IconScrollDown24;

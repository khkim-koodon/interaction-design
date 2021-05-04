import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconAddPhoto24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.black;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M0 0H24V24H0z"
                transform="translate(-70 -466) translate(48 466) translate(22)"
              />
              <path
                fill={color}
                fillRule="nonzero"
                d="M5.5 12c2.485 0 4.5 2.015 4.5 4.5S7.985 21 5.5 21 1 18.985 1 16.5 3.015 12 5.5 12zm11.22-9l1 3H23v13H10.4c.312-.61.513-1.285.578-2H21V8h-4.72l-1.001-3H10.72l-1 3H5v3.022c-.714.065-1.39.266-2 .577V6h5.279l1-3h7.442zM6 14H5v2H3v1h2v2h1v-2h2v-1l-2-.001V14zm7-6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"
                transform="translate(-70 -466) translate(48 466) translate(22)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default IconAddPhoto24;

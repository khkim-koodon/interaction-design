import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconChevronLeft24 = ({ className }: { className: string }) => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.black;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={color}>
          <g>
            <g>
              <path
                d="M17.496 4.136L18.504 5.864 7.983 12 18.504 18.136 17.496 19.864 4.015 12z"
                transform="translate(-16 -32) translate(0 20) translate(16 12)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default IconChevronLeft24;

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconHeartFill24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.primary;

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
                transform="translate(-257.000000, -607.000000) translate(241.000000, 595.000000) translate(16.000000, 12.000000)"
              />
              <path
                fill={color}
                d="M12.173 6.24c1.398-1.784 3.157-2.53 4.908-2.138l.21.053.21.063C19.55 4.893 21 7.04 21 9.398c0 2.946-2.582 6.305-7.662 10.238l-.367.282-.969.732-.977-.736C5.704 15.861 3 12.412 3 9.398c0-2.392 1.493-4.563 3.58-5.206 1.871-.575 3.761.151 5.247 2.049l.172.228.174-.23z"
                transform="translate(-257.000000, -607.000000) translate(241.000000, 595.000000) translate(16.000000, 12.000000)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconHeartFill24;

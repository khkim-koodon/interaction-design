import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const IconChannelTalk24 = ({ className }: { className: string }) => {
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
        <g>
          <g>
            <path
              d="M0 0H24V24H0z"
              transform="translate(-335 -32) translate(335 32)"
            />
            <path
              fill={color}
              d="M12 2c5.078 0 7.848 2.633 7.994 7.583C21.29 10.219 22 11.368 22 13c0 1.63-.706 2.777-2 3.413V20c0 .513-.386.936-.883.993L19 21h-6v-2h5l.001-2.05c-.211.022-.43.037-.656.044L17 17h-1V9h1c.336 0 .658.016.963.046-.275-3.37-2.092-4.97-5.698-5.043L12 4C8.218 4 6.32 5.593 6.037 9.046c.204-.02.414-.034.632-.04L7 9h1v8H7c-3.167 0-5-1.375-5-4 0-1.632.709-2.781 2.006-3.417.143-4.854 2.81-7.48 7.701-7.58L12 2zm-6 9.056l-.036.005C4.562 11.247 4 11.87 4 13c0 1.076.51 1.692 1.77 1.91l.194.03.036.003v-3.887zm12 0v3.887l.241-.035c1.128-.198 1.652-.718 1.744-1.603l.012-.16L20 13c0-1.076-.51-1.692-1.77-1.91l-.23-.034z"
              transform="translate(-335 -32) translate(335 32)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconChannelTalk24;

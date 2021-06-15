import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const IconHeartStroke24 = () => {
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
                fill="#363636"
                d="M6.58 4.192C4.494 4.835 3 7.006 3 9.398c0 3.014 2.704 6.463 8.025 10.516l.977.736.969-.732C18.293 15.863 21 12.415 21 9.398c0-2.358-1.451-4.505-3.499-5.18l-.21-.063c-1.82-.504-3.664.23-5.118 2.084l-.174.23-.008-.012c-1.51-2.058-3.47-2.862-5.41-2.265zm10.295 1.926C18.077 6.514 19 7.878 19 9.398l-.004.162c-.108 2.069-2.26 4.855-6.532 8.22l-.465.361-.093-.072C7.275 14.486 5 11.542 5 9.4c0-1.54.948-2.92 2.17-3.295 1.323-.407 2.767.403 3.936 2.741l.881 1.764 1.02-1.983c1.161-2.194 2.576-2.934 3.868-2.508z"
                transform="translate(-298.000000, -607.000000) translate(282.000000, 595.000000) translate(16.000000, 12.000000)"
              />
              <path
                d="M0 0H24V24H0z"
                transform="translate(-298.000000, -607.000000) translate(282.000000, 595.000000) translate(16.000000, 12.000000)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconHeartStroke24;

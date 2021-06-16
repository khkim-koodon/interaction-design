import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const IconCheck24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.white;

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
          id="Check-Animation-SVG"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <motion.path
            d="M4,11 C4,11 6,13 10,17 L20,5"
            id="Path"
            stroke={color}
            strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 0.2 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          ></motion.path>
        </g>
      </svg>
    </>
  );
};

export default IconCheck24;

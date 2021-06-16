import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const CheckCircle = () => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext.white;

  return (
    <CircleFill
      variants={CircleFillVariants}
      initial="initial"
      animate="animate"
    >
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
    </CircleFill>
  );
};

export default CheckCircle;

const CircleFill = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  width: 48px;
  height: 48px;
`;

const CircleFillVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
};

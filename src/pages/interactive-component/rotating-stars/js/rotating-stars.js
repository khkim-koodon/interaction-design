import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const RotateStars = () => {
  return (
    <>
      <StaggerContainer variants={stagger} initial="initial" animate="animate">
        <StarSVG variants={starRotate} />
        <StarSVG variants={starRotate} />
        <StarSVG variants={starRotate} />
        <StarSVG variants={starRotate} />
        <StarSVG variants={starRotate} />
      </StaggerContainer>
    </>
  );
};

export default RotateStars;

const StaggerContainer = styled(motion.div)``;

///////////////////////////////////////////////////////////////////////////////////
const StarSVG = ({ variants }) => {
  const themeContext = useContext(ThemeContext);
  const primaryColor = themeContext.primary;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      variants={variants}
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M0 0H24V24H0z"
                transform="translate(-224.000000, -152.000000) translate(128.000000, 152.000000) translate(96.000000, 0.000000)"
              />
              <path
                fill={primaryColor}
                d="M11.106 2.581c.347-.734 1.313-.773 1.724-.116l.064.116 2.549 5.405 5.703.867c.737.112 1.075.978.7 1.59l-.07.099-.078.089-4.126 4.206.974 5.942c.127.774-.568 1.381-1.244 1.183l-.101-.036-.1-.048L12 19.073l-5.1 2.805c-.663.365-1.427-.135-1.46-.867l.001-.117.013-.115.973-5.942-4.125-4.206c-.534-.544-.32-1.453.327-1.716l.112-.038.113-.024 5.702-.867 2.55-5.405z"
                transform="translate(-224.000000, -152.000000) translate(128.000000, 152.000000) translate(96.000000, 0.000000)"
              />
            </g>
          </g>
        </g>
      </g>
    </motion.svg>
  );
};
///////////////////////////////////////////////////////////////////////////////////

export const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },

  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const starRotate = {
  initial: { opacity: 0, y: 4 },

  animate: { opacity: 1, y: 0, rotateY: 720 },
};

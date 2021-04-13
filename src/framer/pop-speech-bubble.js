import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PopSpeechBubble = ({ text, backgroundColor, duration, className }) => {
  PopSpeechBubble.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    className: PropTypes.string,
  };
  // 텍스트 길이가 너무 길면 안 됨.
  const [isClicked, setIsClicked] = useState(false);
  if (isClicked) return <></>;
  return (
    <motion.div
      variants={disappearVariants(duration)}
      animate="disappear"
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        setIsClicked(true);
      }}
    >
      <motion.div
        variants={popSpeechBubbleVariants}
        initial="start"
        animate="end"
      >
        <Container backgroundColor={backgroundColor}>
          <p>{text}</p>
          <svg width="10px" height="4px" viewBox="0 0 10 4" version="1.1">
            <g id="Home-Modal" stroke="none" fill="none" opacity="0.95">
              <g
                id="consignment-01-1"
                transform="translate(-183.000000, -543.000000)"
              >
                <g id="Group-3" transform="translate(86.000000, 507.000000)">
                  <polygon id="Triangle" points="102 40 107 36 97 36"></polygon>
                </g>
              </g>
            </g>
          </svg>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default PopSpeechBubble;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    background-color: ${({ backgroundColor, theme }) =>
      theme[backgroundColor] || backgroundColor};
    padding: 8px 16px;
    font-size: 14px;
    opacity: 0.95;
    border-radius: 2px;
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    line-height: 20px;
  }
  #Group-3 {
    fill: ${({ backgroundColor, theme }) =>
      theme[backgroundColor] || backgroundColor};
  }
`;

const disappearVariants = (duration) => {
  return {
    disappear: {
      scale: 0,
      opacity: 0,
      y: 12,
      transition: {
        delay: duration,
        type: 'spring',
        mass: 0.5,
      },
    },
  };
};

const popSpeechBubbleVariants = {
  start: {
    scale: 0,
    opacity: 0,
    y: 36,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
};

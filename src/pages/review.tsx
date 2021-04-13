import styled from 'styled-components';
import IconStar48Fill from '../svg/icon_star_48_fill';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PopSpeechBubble from '../framer/pop-speech-bubble';

const Review = () => {
  const starCount = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(false);

  const setStar = () => {
    setSelected(!selected);
  };

  return (
    <Main>
      <MotionStarContainer
        variants={stagger}
        initial="initial"
        animate={selected ? 'animate' : 'initial'}
      >
        {starCount.map((index) => (
          <motion.button
            onClick={() => setStar()}
            key={index}
            variants={variants}
          >
            <IconStar48Fill selected={selected} />
          </motion.button>
        ))}

        <PopSpeechBubble
          text="📷 포토 리뷰 작성 시 포인트 10,000원 지급"
          backgroundColor="primary"
          duration={2}
          className="className"
        />
      </MotionStarContainer>
    </Main>
  );
};

export default Review;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const MotionStarContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-width: 375px;
  max-width: 480px;
  min-height: 667px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 19px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 4px;
  }
  svg:nth-child(1) {
    margin-left: 0px;
  }
`;

const variants = {
  initial: { y: 0 },

  animate: { y: -120, rotateY: 720 },
};

const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
      // when: 'afterChildren',
    },
  },

  animate: {
    transition: {
      staggerChildren: 0.07,
      // delayChildren: 0.2,
    },
  },

  exit: {
    transition: {
      // when: 'beforeChildren',
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

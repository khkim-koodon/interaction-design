import { motion } from 'framer-motion';
import styled from 'styled-components';
import { stagger, starRotateUp } from '../../../framer/variants/write-review';
import IconStar48Fill from '../../../foundation/svg/icn_star_48_fill';

const Stars = ({
  starAnimation,
  setStarAnimation,
  starCount,
  setStarCount,
}: {
  starAnimation: boolean;
  setStarAnimation: Function;
  starCount: number[];
  setStarCount: Function;
}) => {
  const activeStarAnimation = () => {
    setStarAnimation(true);
  };

  return (
    <>
      <MotionStarContainer
        variants={stagger}
        initial="initial"
        animate={starAnimation ? 'animate' : 'initial'}
      >
        {starCount.map((_, idx) => (
          <MotionStarButton
            onClick={() => activeStarAnimation()}
            key={idx}
            variants={starRotateUp}
          >
            <IconStar48Fill
              idx={idx}
              starCount={starCount}
              setStarCount={setStarCount}
            />
          </MotionStarButton>
        ))}
      </MotionStarContainer>
    </>
  );
};

export default Stars;

const MotionStarContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 0 0;

  svg {
    margin-left: 4px;
  }
  svg:nth-child(1) {
    margin-left: 0px;
  }
`;

const MotionStarButton = styled(motion.button)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

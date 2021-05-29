import styled from 'styled-components';
import P314px400 from '../../../foundation/typography/p3-14px-400';
import BigBtn from '../../../components/big-btn';
import { fadeIn } from '../../../framer/variants/write-review';
import { motion } from 'framer-motion';

const BottomButton = ({
  starAnimation,
  validation,
}: {
  starAnimation: boolean;
  validation: boolean;
}) => {
  return (
    <>
      <MotionButtonArea
        variants={fadeIn}
        initial={false}
        animate={starAnimation ? 'animate' : 'initial'}
        style={{ display: starAnimation ? 'flex' : 'none' }}
      >
        <P314px400 color="gray2" marginTop="48px">
          글과 사진이 모두 있어야 리뷰를 등록할 수 있어요!
        </P314px400>
        <BigBtn
          text="포토 리뷰 등록"
          textColor="white"
          marginTop="16px"
          validation={validation}
        />
      </MotionButtonArea>
    </>
  );
};

export default BottomButton;

const MotionButtonArea = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
`;

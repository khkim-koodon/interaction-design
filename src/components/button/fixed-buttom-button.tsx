import styled from 'styled-components';
import { motion } from 'framer-motion';

const FixedBottomButton = ({ trigger }: { trigger: boolean }) => {
  return (
    <>
      <Button
        variants={show}
        initial={false}
        animate={trigger ? 'animate' : 'initial'}
      >
        <Label>판매 문의하기</Label>
      </Button>
    </>
  );
};

export default FixedBottomButton;

const Button = styled(motion.button)`
  position: fixed;
  bottom: 24px;
  width: 100%;
  height: 51px;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.p`
  font-family: SpoqaHanSans;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.white};
`;

export const show = {
  initial: {
    y: 48,
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

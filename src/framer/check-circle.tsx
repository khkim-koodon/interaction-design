import styled from 'styled-components';
import IconCheck24 from '../foundation/svg/icn_check_24';
import { motion } from 'framer-motion';

const CheckCircle = () => {
  return (
    <CircleFill
      variants={CircleFillVariants}
      initial="initial"
      animate="animate"
    >
      <IconCheck24 />
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

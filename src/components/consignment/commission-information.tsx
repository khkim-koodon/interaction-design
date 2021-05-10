import { motion } from 'framer-motion';
import styled from 'styled-components';
import P314px400 from '../../foundation/typography/p3-14px-400';
import IconInfo16 from '../../foundation/svg/icn-information-16';

const CommissionInformation = () => {
  return (
    <>
      <CommissionInformationContainer>
        {/* 모달 콜백 */}
        {/* <InfoButton onClick={openModal(CommissionInfoText(() => closeModal()))}> */}
        <InfoButton
          onClick={() => {}}
          variants={buttonHoverTapVariants}
          whileTap="whileTap"
        >
          <IconInfo16 />
          <P314px400 color="gray2">수수료 안내</P314px400>
        </InfoButton>
      </CommissionInformationContainer>
    </>
  );
};

export default CommissionInformation;

const CommissionInformationContainer = styled.div`
  margin: 48px auto 0;
`;

const InfoButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 0 auto;

  span {
    margin-top: 1px; // 시각 보정
  }

  p {
    margin-left: 4px;
  }
`;

const buttonHoverTapVariants = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.95,
    opacity: 0.6,
  },
};

import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import P314px400 from '../../foundation/typography/p3-14px-400';

const WhatCanKoodonDoForYou = () => {
  const [
    activeKoodonDoForYouAnimation,
    setActiveKoodonDoForYouAnimation,
  ] = useState(false);

  // 세션 동안 1번만 '?' 버튼 누를 수 있도록 유도
  // useEffect(() => {
  //   const activeKoodonDoForYouAnimation = window.sessionStorage.getItem(
  //     'activeKoodonDoForYouAnimation'
  //   );
  //   activeKoodonDoForYouAnimation === 'true' &&
  //     setActiveKoodonDoForYouAnimation(true);
  // }, []);

  return (
    <>
      <DoForYouWrap
        variants={stagger}
        initial={false}
        animate={activeKoodonDoForYouAnimation && 'animate'}
      >
        <DoForYouRow>
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_marketing_48.svg"
            text1="빠른 판매 위한"
            text2="마케팅"
          />
          <div className="gap" />
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_camera_48.svg"
            text1="전문적인"
            text2="상품 사진 촬영"
          />
        </DoForYouRow>

        <DoForYouRow>
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_packing_shipping_48.svg"
            text1="구매 고객에게"
            text2="포장 후 택배 발송"
          />
          <div className="gap" />
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_seoul_48.svg"
            text1="서울 지역"
            text2="무료 방문 수거"
          />
        </DoForYouRow>
        <Line />
        <P314px400 color="gray4" marginTop="24px">
          🏠 집에서 쉬고 있는 중고 명품 쿠돈에 맡겨
        </P314px400>
        <P314px400 color="gray4">편하게 판매해보면 어떠세요?</P314px400>
      </DoForYouWrap>
    </>
  );
};

export default WhatCanKoodonDoForYou;

const Line = styled.div`
  width: 1px;
  height: 48px;
  background-color: ${({ theme }) => theme.gray2};
  margin: 48px auto 0;
`;

const DoForYouBox = ({
  activeKoodonDoForYouAnimation,
  setActiveKoodonDoForYouAnimation,
  svgSrc,
  text1,
  text2,
}: {
  activeKoodonDoForYouAnimation: boolean;
  setActiveKoodonDoForYouAnimation: Function;
  svgSrc: string;
  text1: string;
  text2: string;
}) => {
  const onActiveKoodonDoForYouAnimation = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setActiveKoodonDoForYouAnimation(true); // Production에서 변경
    window.sessionStorage.setItem('activeKoodonDoForYouAnimation', 'true');
  };

  return (
    <>
      <DoForYouBoxContainer
        onClick={onActiveKoodonDoForYouAnimation}
        variants={doForYouBoxVariants}
      >
        {!activeKoodonDoForYouAnimation ? (
          <p className="question__mark">?</p>
        ) : (
          <>
            <motion.div
              variants={doForYouBoxItemVariants}
              initial="initial"
              animate="animate"
            >
              <img src={svgSrc} />
              <P314px400 color="gray4" marginTop="4px">
                {text1}
              </P314px400>
              <P314px400 color="gray4">{text2}</P314px400>
            </motion.div>
          </>
        )}
      </DoForYouBoxContainer>
    </>
  );
};

const DoForYouWrap = styled(motion.ul)`
  margin: 36px 16px 0;

  .gap {
    width: 11px;
    height: 100%;
  }

  li:nth-child(2) {
    margin-top: 16px;
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

const DoForYouRow = styled.li`
  display: flex;
  justify-content: space-evenly;

  .question__mark {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.gray4};
  }
`;

const DoForYouBoxContainer = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 13px rgba(52, 84, 33, 0.1);
  border-radius: 20px;
  width: 45vw;
  height: 45vw;
  max-width: 218px;
  max-height: 218px;
  font-family: Spoqa Han Sans, sans-serif;
  background-color: transparent;
`;

// framer-motion
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.04,
      // delayChildren: 0.2,
    },
  },
};

const doForYouBoxVariants = {
  initial: {
    rotateY: 0,
  },

  animate: {
    rotateY: 360,
  },
};

const doForYouBoxItemVariants = {
  initial: {
    // scale: 0,
    opacity: 0,
    x: -3,
  },

  animate: {
    // scale: 1,
    opacity: 1,
    y: 0,

    transition: {
      // delay: 0.4,
      ease: 'easeIn',
      duration: 0.3,
    },
  },
};

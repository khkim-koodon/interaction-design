import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import P314px400 from '../../foundation/typography/p3-14px-400';
import IconScrollDown24 from '../../foundation/svg/icn_scroll_down_24';

const WhatCanKoodonDoForYou = () => {
  const [
    activeKoodonDoForYouAnimation,
    setActiveKoodonDoForYouAnimation,
  ] = useState(false);

  useEffect(() => {
    const setAnimation = () => {
      setActiveKoodonDoForYouAnimation(true);
      window.sessionStorage.setItem('activeKoodonDoForYouAnimation', 'true');
      window.removeEventListener('scroll', setAnimation); // 스크롤 이벤트 감지하면 스크롤 이벤트 리스너까지 제거
    };
    window.addEventListener('scroll', setAnimation);
  }, []);

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
            text1="재빠른 판매 돕는"
            text2="광고"
          />
          <div className="gap" />
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_pricint_48.svg"
            text1="가격 상담 후"
            text2="자유로운 가격 조정"
          />
        </DoForYouRow>

        <DoForYouRow>
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_customer_center_48.svg"
            text1="내 명품"
            text2="거래 문의 응대"
          />
          <div className="gap" />
          <DoForYouBox
            activeKoodonDoForYouAnimation={activeKoodonDoForYouAnimation}
            setActiveKoodonDoForYouAnimation={setActiveKoodonDoForYouAnimation}
            svgSrc="/icons/icn_packing_shipping_48.svg"
            text1="구매 고객에게"
            text2="포장 후 택배 발송"
          />
        </DoForYouRow>
        <Line />
        <P314px400 color="gray4" marginTop="24px">
          ✍️ 판매 대행 신청 후 택배로 보내주세요!
        </P314px400>
        <P314px400 color="gray4">
          서울 지역은 무료 방문 수거 서비스를 제공합니다
        </P314px400>
      </DoForYouWrap>

      {!activeKoodonDoForYouAnimation && (
        <ScrollDownInteraction
          variants={ScrollDownInteractionVariants}
          initial="initial"
          animate="animate"
        >
          <IconScrollDown24 />
        </ScrollDownInteraction>
      )}
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

const ScrollDownInteraction = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 128px;
  left: 0;
  right: 0;
`;

const ScrollDownInteractionVariants: {
  initial: {
    y: number;
    opacity: number;
    scale: number;
  };

  animate: {
    y: number;
    opacity: number;
    scale: number;
    transition: {
      repeat: number;
      repeatType: 'reverse' | 'loop' | 'mirror' | undefined;
      duration: number;
    };
  };
} = {
  initial: {
    y: -12,
    opacity: 0,
    scale: 0.9,
  },

  animate: {
    y: 6,
    opacity: 0.4,
    scale: 1,

    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1.2,
    },
  },
};

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
          <motion.p
            variants={questionMarkVariants}
            initial="initial"
            animate="animate"
            className="question__mark"
          >
            ?
          </motion.p>
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
    opacity: 0,
    x: -3,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
};

const questionMarkVariants = {
  initial: { y: -1, scale: 0.7, rotateY: 0 },

  animate: {
    y: 1,
    scale: 1,
    rotateY: 360,
    transition: {
      duration: 1,
    },
  },
};

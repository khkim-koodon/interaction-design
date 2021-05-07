import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BigBtn from '../../components/big-btn';
import NavigationBar from '../../components/nav-bar';
import H227px400 from '../../foundation/typography/h2-27px-400';
import H227px700 from '../../foundation/typography/h2-27px-700';
import P118px400 from '../../foundation/typography/p1-18px-400';
import P314px400 from '../../foundation/typography/p3-14px-400';
import P314px700 from '../../foundation/typography/p3-14px-700';
import Confetti from 'react-dom-confetti';
import ReactCountUp from 'react-countup';
import P510px400 from '../../foundation/typography/p5-10px-400';
import { useRouter } from 'next/dist/client/router';
import IconInfo16 from '../../foundation/svg/icn-information-16';

const ConsignmentHome = () => {
  return (
    <>
      <NavigationBar rightAction="channelTalk" />
      <Main>
        <H227px700 color="black" marginTop="64px">
          중고 명품 판매
        </H227px700>
        <H227px400 color="black" marginTop="-2px">
          쿠돈이 도와드릴게요
        </H227px400>
        <P314px400 color="gray3" marginTop="16px">
          쉬고 있는 중고 명품 쿠돈에 맡겨
        </P314px400>
        <P314px400 color="gray3">편하게 판매해보면 어떠세요?</P314px400>

        <EventBox />

        <WhatCanKoodonDoForYou />

        <CommissionInformation />

        <BigButtonWrap>
          <BigBtn //
            text="판매 대행 신청"
            textColor="white"
            validation={true}
          />
        </BigButtonWrap>
      </Main>
    </>
  );
};

export default ConsignmentHome;

const Main = styled.main`
  overflow-x: hidden; // 애니메이션 작동 시 width 작아지는 문제 해결
  overflow-y: auto;
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 172px;
  min-height: 100vh;
  box-shadow: 0px 0px 19px 0px rgb(0, 0, 0, 0.16);
  text-align: center;

  h2 {
    letter-spacing: -0.8px;
  }
`;

const BigButtonWrap = styled.div`
  position: fixed;
  bottom: 63px; // 48 + 1 + 16
  left: 16px;
  right: 16px;
  max-width: 448px;
  margin: 0 auto;
`;

// S of EventBox Component
const EventBox = () => {
  const ConfettiConfig = {
    angle: 180,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  // 세션 동안 1번만 '?원 확인' 버튼 누를 수 있도록 유도
  useEffect(() => {
    const isActiveEventAnimationInSessionStorage = window.sessionStorage.getItem(
      'activeEventAnimation'
    );
    isActiveEventAnimationInSessionStorage === 'true' &&
      setActiveEventAnimation(true);
  }, []);

  const [activeEventAnimation, setActiveEventAnimation] = useState(false);
  const onActiveEventAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveEventAnimation(!activeEventAnimation); // Production에서 변경
    window.sessionStorage.setItem('activeEventAnimation', 'true');
  };

  const router = useRouter();
  const goToEventLanding = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/'); // 추후 랜딩 pathname으로 변경
  };

  return (
    <EventBoxContainer>
      <div className="event__sticker">
        <P510px400 color="gray4">이벤트</P510px400>
      </div>

      <Confetti active={activeEventAnimation} config={ConfettiConfig} />
      <div className="emoji__wrap">
        {!activeEventAnimation ? (
          // 두 motion.p를 리액트가 구분하기 위해 key 필요
          <motion.p
            key="emojiAstonishedFaceVariants"
            className="emoji"
            variants={emojiAstonishedFaceVariants}
            initial="initial"
            animate="animate"
          >
            😲
          </motion.p>
        ) : (
          <motion.p
            key="emojiCelebrationVariants"
            className="emoji"
            variants={emojiCelebrationVariants}
            initial="initial"
            animate="animate"
          >
            🎉
          </motion.p>
        )}
      </div>

      <P314px400 color="gray4" marginTop="16px">
        첫 판매는
      </P314px400>
      <div className="p__wrap">
        {activeEventAnimation ? (
          <>
            <ReactCountUp
              start={0}
              end={100}
              duration={1}
              className="react__count__up"
            />
          </>
        ) : (
          <>
            <P314px700 color="gray4">?</P314px700>
          </>
        )}
        <P314px700 color="gray4">원</P314px700>
        <P314px400 color="gray4">에 도와드려요</P314px400>
      </div>
      <SmallButton
        onClick={
          !activeEventAnimation ? onActiveEventAnimation : goToEventLanding
        }
        variants={smallButtonVariants}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        {!activeEventAnimation ? (
          <P314px700 color="gray1">?원 확인하기</P314px700>
        ) : (
          <P314px700 color="gray1">자세히 보기</P314px700>
        )}
      </SmallButton>
    </EventBoxContainer>
  );
};

const EventBoxContainer = styled.div`
  margin: 24px 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 1px 2px 13px rgba(52, 84, 33, 0.1);
  border-radius: 20px;

  .emoji__wrap {
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px auto 0;
  }

  .emoji {
    font-size: 64px;
  }

  .p__wrap {
    display: flex;
    justify-content: center;
    p {
      display: inline-block;
    }
  }

  .react__count__up {
    font-family: Spoqa Han Sans, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray4};
    line-height: 20px;
  }

  .event__sticker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: solid 1px ${({ theme }) => theme.gray4};
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 4px;

    p {
      font-weight: 700;
    }
  }
`;
// E of EventBox Component

const WhatCanKoodonDoForYou = () => {
  const [
    activeKoodonDoForYouAnimation,
    setActiveKoodonDoForYouAnimation,
  ] = useState(false);
  const onActiveKoodonDoForYouAnimation = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setActiveKoodonDoForYouAnimation(!activeKoodonDoForYouAnimation); // Production에서 변경
  };

  return (
    <>
      <H227px700 color="black" marginTop="48px">
        쿠돈이
      </H227px700>
      <H227px700 color="black" marginTop="-2px">
        무엇을 도와주나요? 🤔
      </H227px700>

      {/* {!activeKoodonDoForYouAnimation ? (
        <SmallButton
          onClick={onActiveKoodonDoForYouAnimation}
          variants={smallButtonVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <P314px700 color="gray1">? 확인하기</P314px700>
        </SmallButton>
      ) : (
        <></>`
      )} */}

      <DoForYouWrap>
        <DoForYouRow>
          <DoForYouBox>
            <p className="question__mark">?</p>
          </DoForYouBox>
          <div className="gap" />

          <DoForYouBox>
            <p className="question__mark">?</p>
          </DoForYouBox>
        </DoForYouRow>

        <DoForYouRow>
          <DoForYouBox>
            <p className="question__mark">?</p>
          </DoForYouBox>
          <div className="gap" />
          <DoForYouBox>
            <p className="question__mark">?</p>
          </DoForYouBox>
        </DoForYouRow>
      </DoForYouWrap>
    </>
  );
};

const DoForYouWrap = styled.div`
  margin: 24px 16px 0;

  .gap {
    width: 11px;
    height: 100%;
  }

  ul:nth-child(2) {
    margin-top: 16px;
  }
`;

const DoForYouRow = styled.ul`
  display: flex;
  justify-content: space-evenly;

  .question__mark {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.gray4};
  }
`;

const DoForYouBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 13px rgba(52, 84, 33, 0.1);
  border-radius: 20px;
  width: 45vw;
  height: 45vw;
  max-height: 220.48px;
`;

const CommissionInformation = () => {
  return (
    <>
      {/* 모달 콜백 */}
      {/* <InfoButton onClick={openModal(CommissionInfoText(() => closeModal()))}> */}
      <InfoButton onClick={() => {}}>
        <IconInfo16 />
        <P314px400 color="gray2">수수료 안내</P314px400>
      </InfoButton>
    </>
  );
};

const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 48px;

  span {
    margin-top: 1px; // 시각 보정
  }

  p {
    margin-left: 4px;
  }
`;

// Common elements & framer-motion variants
const SmallButton = styled(motion.button)`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.gray4};
  margin: 16px auto 36px;
  border-radius: 2px;
`;

const smallButtonVariants = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.95,
    opacity: 0.6,
  },
};

const emojiAstonishedFaceVariants = {
  initial: {
    scale: 0.85,
    rotateY: 45,
  },

  animate: {
    scale: [0.85, 1],
    rotateY: [45, 0],

    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const emojiCelebrationVariants = {
  initial: {
    scale: 0.85,
    opacity: 0,
  },

  animate: {
    scale: [0.85, 1],
    opacity: [0, 1],

    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

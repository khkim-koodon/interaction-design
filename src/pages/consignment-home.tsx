import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import BigBtn from '../components/big-btn';
import NavigationBar from '../components/nav-bar';
import H227px400 from '../foundation/typography/h2-27px-400';
import H227px700 from '../foundation/typography/h2-27px-700';
import P118px400 from '../foundation/typography/p1-18px-400';
import P314px400 from '../foundation/typography/p3-14px-400';
import P314px700 from '../foundation/typography/p3-14px-700';
import Confetti from 'react-dom-confetti';

const ConsignmentHome = () => {
  const [coinRotate, setCoinRotate] = useState(false);
  const [commission, setComminssion] = useState('?원');

  const activeCoinRotate = () => {
    const executed = sessionStorage.getItem('activeCoinRotate');

    if (commission === '?원' || !executed) {
      setCoinRotate(true);
      setComminssion('100원');
      sessionStorage.setItem('activeCoinRotate', 'true');
    }
  };

  const config = {
    angle: 90,
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

  return (
    <>
      <NavigationBar rightAction="channelTalk" />
      <Main>
        <H227px700 color="black" marginTop="72px">
          중고 명품 판매
        </H227px700>
        <H227px400 color="black">쿠돈에서 도와드릴게요 🙌</H227px400>
        <div className="p__wrap">
          <P314px400 color="gray3">첫 판매는</P314px400>
          <P314px700 color="gray3">{commission}</P314px700>
          <P314px400 color="gray3">에 도와드려요!</P314px400>
        </div>

        <Confetti active={coinRotate} config={config} />
        <MotionCoin
          onClick={activeCoinRotate}
          variants={CoinVariants}
          initial={false}
          animate={coinRotate === true ? 'animate' : 'initial'}
        >
          <P118px400 color="black">{commission}</P118px400>
        </MotionCoin>

        <ButtonWrap>
          <BigBtn //
            text="판매 대행 신청"
            textColor="white"
            validation={true}
          />
        </ButtonWrap>
      </Main>
    </>
  );
};

export default ConsignmentHome;

const Main = styled.main`
  overflow-x: hidden; // 애니메이션 작동 시 width 작아지는 문제 해결
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0px 0px 19px 0px rgb(0, 0, 0, 0.16);

  h2 {
    text-align: center;
    letter-spacing: -0.5px;
  }

  .p__wrap {
    display: flex;
    justify-content: center;
    margin-top: 48px;

    p {
      display: inline-block;
    }

    p:nth-child(2) {
      margin-left: 3px;
    }
  }
`;

const MotionCoin = styled(motion.div)`
  width: 240px;
  height: 240px;
  box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  /* border-style: solid; */
  border-width: 1px;
  border-image-source: linear-gradient(to bottom, #f8f8f8, #d0d0d0);
  margin: 16px auto 0;
  border-image-slice: 1;
  background-color: ${({ theme }) => theme.white};

  /* 텍스트 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 48px;
    font-weight: 700;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 72px 16px 0;
`;

const CoinVariants = {
  //   initial: { rotateY: 0 },

  animate: {
    scaleX: [1, 0.9, 1],
    scaleY: [1, 1.2, 1],
    rotateY: 5760,
    transition: { duration: 0.4 },
  },
};

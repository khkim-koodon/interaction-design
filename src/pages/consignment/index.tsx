import { motion } from 'framer-motion';
import { useState } from 'react';
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

const ConsignmentHome = () => {
  const [commission, setComminssion] = useState('?원');
  const [activeCountUp, setActiveCountUp] = useState(false);

  const onActiveCountUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveCountUp(true);
  };

  const config = {
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

  return (
    <>
      <NavigationBar rightAction="channelTalk" />
      <Confetti active={true} config={config} />
      <Main>
        <H227px700 color="black" marginTop="72px">
          중고 명품 판매
        </H227px700>
        <H227px400 color="black" marginTop="-2px">
          쿠돈이 도와드릴게요
        </H227px400>

        <EventBox>
          <div className="emoji__wrap">
            <p className="emoji">😲</p>
          </div>

          <P314px400 color="gray4" marginTop="16px">
            첫 판매는
          </P314px400>
          <div className="p__wrap">
            {activeCountUp ? (
              <>{/* <ReactCountUp start={0} end={100} /> */}</>
            ) : (
              <>
                <P314px700 color="gray4">?</P314px700>
              </>
            )}
            <P314px700 color="gray4">원</P314px700>
            <P314px400 color="gray4">에 도와드려요</P314px400>
          </div>
          <SmallButton onClick={onActiveCountUp}>
            <P314px700 color="gray1">?원 확인하기</P314px700>
          </SmallButton>
        </EventBox>

        <H227px700 color="black" marginTop="48px">
          쿠돈이
        </H227px700>
        <H227px700 color="black" marginTop="-2px">
          무엇을 도와주나요? 🤔
        </H227px700>

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
  text-align: center;

  h2 {
    letter-spacing: -0.8px;
  }
`;

const EventBox = styled.div`
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
`;

const SmallButton = styled(motion.button)`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.gray4};
  margin: 16px auto 36px;
  border-radius: 2px;
`;

const ButtonWrap = styled.div`
  position: fixed;
  bottom: 63px; // 48 + 1 + 16
  left: 16px;
  right: 16px;
  max-width: 448px;
  margin: 0 auto;
`;

const CoinVariants = {
  initial: {
    scaleX: 1,
    scaleY: 1,
  },
  animate: {
    scaleX: [1, 0.8, 1],
    scaleY: [1, 1.05, 1],
    rotateY: 23040, // 11520*2
    transition: { duration: 0.4 },
  },
};

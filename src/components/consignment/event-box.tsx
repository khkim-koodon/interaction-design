import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import P314px400 from '../../foundation/typography/p3-14px-400';
import P314px700 from '../../foundation/typography/p3-14px-700';
import Confetti from 'react-dom-confetti';
import ReactCountUp from 'react-countup';
import P510px400 from '../../foundation/typography/p5-10px-400';
import P118px400 from '../../foundation/typography/p1-18px-400';
import P216px400 from '../../foundation/typography/p2-16px-400';
import P216px700 from '../../foundation/typography/p2-16px-700';

const EventBox = () => {
  const ConfettiConfig = {
    angle: 180,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 1500,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  // 세션 동안 1번만 '?원 확인' 버튼 누를 수 있도록 유도
  //   useEffect(() => {
  //     const isActiveEventAnimationInSessionStorage = window.sessionStorage.getItem(
  //       'activeEventAnimation'
  //     );
  //     isActiveEventAnimationInSessionStorage === 'true' &&
  //       setActiveEventAnimation(true);
  //   }, []);

  const [activeEventAnimation, setActiveEventAnimation] = useState(false);
  const onActiveEventAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveEventAnimation(!activeEventAnimation); // Production에서 변경
    window.sessionStorage.setItem('activeEventAnimation', 'true');
  };

  const eventInfoRef = useRef<HTMLDivElement>(null);
  const goToEventInfo = () => {
    eventInfoRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <EventBoxContainer>
      <div className="event__sticker">
        <P510px400 color="gray4">5월 이벤트</P510px400>
      </div>

      <Confetti active={activeEventAnimation} config={ConfettiConfig} />
      <div className="event__price__wrap">
        {!activeEventAnimation ? (
          <p className="p__react__count__up__big">?원</p>
        ) : (
          <>
            <ReactCountUp
              start={0}
              end={100}
              duration={1}
              className="react__count__up__big"
            />
            <p className="p__react__count__up__big">원</p>
          </>
        )}
      </div>

      <P216px400 color="gray4" marginTop="16px">
        첫 판매는
      </P216px400>
      <div className="p__wrap">
        {!activeEventAnimation ? (
          <>
            <P216px700 color="gray4">?</P216px700>
            <P216px700 color="gray4">원</P216px700>
            <P216px400 color="gray4">에 도와드려요 😲</P216px400>
          </>
        ) : (
          <>
            <ReactCountUp
              start={0}
              end={100}
              duration={1}
              className="react__count__up"
            />
            <P216px700 color="gray4">원</P216px700>
            <P216px400 color="gray4">에 도와드려요 🎉</P216px400>
          </>
        )}
      </div>
      <SmallButton
        onClick={!activeEventAnimation ? onActiveEventAnimation : goToEventInfo}
        variants={buttonHoverTapVariants}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        {!activeEventAnimation ? (
          <P314px700 color="gray1">?원 확인하기</P314px700>
        ) : (
          <P314px700 color="gray1">👇 이벤트 안내</P314px700>
        )}
      </SmallButton>

      {!activeEventAnimation ? (
        <></>
      ) : (
        <div ref={eventInfoRef} className="p__event__info__wrap">
          <P216px700 color="gray4">어떤 이벤트인가요?</P216px700>
          <P216px400 color="gray3" marginTop="4px">
            그동안 처분하고 싶었던 중고 명품의 판매를 쿠돈에 맡겨주세요. 이벤트
            기간에 맡기신 중고 명품 중 판매가 완료된 첫 번째 상품은 13%~14.9%의
            수수료 대신 100원의 수수료만 부담하시면 된답니다!
          </P216px400>
          <P216px700 color="gray4" marginTop="24px">
            이미 쿠돈에 맡긴 상품이 있어요! 이벤트에 참여할 수 없는 건가요?
          </P216px700>
          <P216px400 color="gray3" marginTop="4px">
            아니요! 이미 쿠돈에 맡긴 상품이 있는 고객님들은 자동으로 이벤트에
            참여가 되고, 맡기신 상품 중 첫 번째로 판매가 완료된 상품의 수수료는
            100원만 부담하시면 됩니다 😄
          </P216px400>
        </div>
      )}
    </EventBoxContainer>
  );
};

export default EventBox;

const EventBoxContainer = styled.div`
  margin: 24px 16px 0;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 1px 2px 13px rgba(52, 84, 33, 0.1);
  border-radius: 20px;

  .event__price__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 72px auto 0;
  }

  .p__wrap {
    display: flex;
    justify-content: center;
    p {
      display: inline-block;
    }
  }

  .react__count__up__big {
    font-family: Spoqa Han Sans, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.black};
    line-height: 1;
  }

  .p__react__count__up__big {
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.black};
    line-height: 1;
    display: inline-block;
  }

  .react__count__up {
    font-family: Spoqa Han Sans, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray4};
    line-height: 24px;
  }

  .event__sticker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: solid 1px ${({ theme }) => theme.gray4};
    position: absolute;
    top: 16px;
    left: 24px;
    padding: 2px 4px;

    p {
      font-weight: 700;
    }
  }

  .p__event__info__wrap {
    text-align: left;
    padding: 72px 24px 0;
  }
`;

const SmallButton = styled(motion.button)`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.gray4};
  margin: 16px auto 0;
  border-radius: 2px;
`;

// Framer motion
const buttonHoverTapVariants = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.95,
    opacity: 0.6,
  },
};

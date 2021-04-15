import styled from 'styled-components';
import IconStar48Fill from '../elements/svg/icon_star_48_fill';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PopSpeechBubble from '../framer/pop-speech-bubble';
import NavigationBar from '../components/nav-bar';
import H324px400 from '../elements/typography/h3-24px-400';
import H616px700 from '../elements/typography/h6-16px-700';
import P314px400 from '../elements/typography/p3-14px-400';
import TextareaAutosize from 'react-textarea-autosize';
import IconCamera24 from '../elements/svg/icon_camera_24';
import BigBtn from '../components/big-btn';

const Review = () => {
  const starCount = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(false);
  const setStar = () => {
    setSelected(!selected);
  };

  const [reviewText, setReviewText] = useState('');

  return (
    <Main>
      <MotionContainer
        variants={stagger}
        initial="initial"
        animate={selected ? 'animate' : 'initial'}
      >
        <NavigationBar title="포토 리뷰 작성" />

        <ProductBox>
          <img src="/images/review.jpg" />
          <ProductName>
            <H616px700 color="black">브랜드명</H616px700>
            <P314px400 text="상품 이름이 들어갑니다" color="gray4" />
          </ProductName>
        </ProductBox>

        <motion.div
          variants={textFadeOut}
          initial={false}
          animate={selected ? 'animate' : 'initial'}
        >
          <H324px400 text="쿠돈 구매 경험은 어떠셨어요?" color="black" />
        </motion.div>

        <StarContainer>
          {starCount.map((value, index) => (
            <motion.button
              onClick={() => setStar()}
              key={index}
              variants={starUp}
            >
              <IconStar48Fill selected={selected} />
            </motion.button>
          ))}
        </StarContainer>

        <MotionTextfield
          variants={fadeIn}
          initial={false}
          animate={selected ? 'animate' : 'initial'}
          style={{ display: selected ? 'block' : 'none' }}
        >
          <MultiLineTextField
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="쿠돈 구매 경험을 남겨주세요!(최소 20자)"
            minRows={3}
            minLength={19}
            maxLength={499}
          />
          <CountCharacters>
            <P314px400 text={String(reviewText.length)} color="gray2" />
            <P314px400 text="/500" color="gray2" />
          </CountCharacters>
        </MotionTextfield>

        <MotionUploadPhoto
          variants={fadeIn}
          initial={false}
          animate={selected ? 'animate' : 'initial'}
          style={{ display: selected ? 'flex' : 'none' }}
        >
          <IconCamera24 />
          <P314px400 text="사진 올리기" color="black" />
          <P314px400 text="0/5" color="black" />
        </MotionUploadPhoto>

        <MotionButtonArea
          variants={fadeIn}
          initial={false}
          animate={selected ? 'animate' : 'initial'}
          style={{ display: selected ? 'flex' : 'none' }}
        >
          <P314px400
            text="글과 사진이 모두 있어야 리뷰를 등록할 수 있어요!"
            color="gray2"
            marginTop="48px"
          />
          <BigBtn text="포토 리뷰 등록" color="white" marginTop="16px" />
        </MotionButtonArea>

        <PopSpeechBubbleWrap style={{ display: selected ? 'none' : 'block' }}>
          <PopSpeechBubble
            text="📷 포토 리뷰 작성 시 포인트 10,000원 지급"
            backgroundColor="primary"
            duration={2}
            className=""
            trianglePosition="top"
          />
        </PopSpeechBubbleWrap>
      </MotionContainer>
    </Main>
  );
};

export default Review;

const Main = styled.main`
  overflow-x: hidden; // 애니메이션 작동 시 width 작아지는 문제 해결
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 480px;
  box-shadow: 0px 0px 19px 0px rgb(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  h3 {
    margin: 36px auto 0;
    width: 166px;
    height: 72px;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.black};
  }
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  margin: 16px 16px 0;

  img {
    width: 48px;
    height: 48px;
    padding: 3px;
    border-radius: 2px;
    border: solid 1px ${({ theme }) => theme.gray1};
  }
`;

const ProductName = styled.div`
  margin-left: 16px;
  margin-bottom: 2px; // 시각 보정
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 0 0;

  svg {
    margin-left: 4px;
  }
  svg:nth-child(1) {
    margin-left: 0px;
  }
`;

const MotionTextfield = styled(motion.div)`
  margin: 36px 16px 0;
`;

const MultiLineTextField = styled(TextareaAutosize)`
  background-color: ${({ theme }) => theme.gray1__50};
  border: transparent;
  border-radius: 2px;
  resize: none; // 늘이고 줄이는 기능 없애기
  width: 100%;

  /* text */
  caret-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.black};
  font-weight: 400;
  line-height: 24px;
  padding: 16px 24px;
  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.gray2};
  }

  ::selection {
    background-color: ${({ theme }) => theme.primary40};
  }
`;

const CountCharacters = styled.div`
  display: flex;
  align-items: end;
  text-align: right;
  position: relative;
  margin-top: -1px;

  p:nth-child(1) {
    position: absolute;
    right: 31px; // 47 - 16
    /* top: 4px; */
  }

  p:nth-child(2) {
    position: absolute;
    right: 0;
    /* top: 4px; */
  }
`;

const MotionUploadPhoto = styled(motion.div)`
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  width: 133px;
  height: 133px;
  margin: 35px 0 0 16px; // Text Area 아래 생기는 5px 영역 보정
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PopSpeechBubbleWrap = styled.div`
  margin-top: 16px;
`;

const MotionButtonArea = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
`;

const starUp = {
  initial: { y: 0 },

  animate: { y: -120, rotateY: 720 },
};

const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },

  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const textFadeOut = {
  initial: {
    opacity: 1,
    scale: 1,
    y: 0,
  },

  animate: {
    opacity: 0,
    scale: 0,
    y: -16,
    transition: {
      duration: 0.2,
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
    scale: 1.2,
    y: 0,
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: -120,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};

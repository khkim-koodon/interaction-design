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

const Review = () => {
  const starCount = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const setStar = () => {
    setSelected(!selected);
  };

  return (
    <Main>
      <MotionContainer
        variants={stagger}
        initial="initial"
        animate={selected ? 'animate' : 'initial'}
      >
        {/* status bar image */}
        <img src="/images/statusBar_iPhone8@3x.jpg" />

        <NavigationBar title="포토 리뷰 작성" />

        <ProductBox>
          <img src="/images/review.jpg" />
          <ProductName>
            <H616px700 text="브랜드명" color="black" />
            <P314px400 text="상품 이름이 들어갑니다" color="gray4" />
          </ProductName>
        </ProductBox>

        <motion.div
          variants={fadeOut}
          initial={false}
          animate={selected ? 'animate' : 'initial'}
        >
          <H324px400 text="쿠돈 구매 경험은 어떠셨어요?" color="black" />
        </motion.div>

        <StarContainer>
          {starCount.map((index) => (
            <motion.button
              onClick={() => setStar()}
              key={index}
              variants={variants}
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
        {/* 
        <div
          style={{
            display: selected ? 'none' : 'block',
            transition: 'display 0.3s ease-in-out',
          }}
        >
          <PopSpeechBubble
            text="📷 포토 리뷰 작성 시 포인트 10,000원 지급"
            backgroundColor="primary"
            duration={2}
            className=""
            trianglePosition="top"
          />
        </div> */}
      </MotionContainer>
    </Main>
  );
};

export default Review;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 375px;
  min-height: 667px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 19px 0px;
  display: flex;
  flex-direction: column;
  position: relative;

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
  margin: 36px 0 16px;

  svg {
    margin-left: 4px;
  }
  svg:nth-child(1) {
    margin-left: 0px;
  }
`;

const MultiLineTextField = styled(TextareaAutosize)`
  background-color: ${({ theme }) => theme.gray1__50};
  border-radius: 2px;
  resize: none; // 늘이고 줄이는 기능 없애기

  border: transparent;
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

const MotionTextfield = styled(motion.div)`
  margin: 36px 16px 0;
`;

const MotionUploadPhoto = styled(motion.div)`
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  width: 133px;
  height: 133px;
  margin: 40px 0 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const variants = {
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

const fadeOut = {
  initial: {
    opacity: 1,
    y: 0,
  },

  animate: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.1,
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

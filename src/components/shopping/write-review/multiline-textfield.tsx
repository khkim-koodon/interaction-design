import styled from 'styled-components';
import { fadeIn } from '../../../framer/variants/write-review';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import P314px400 from '../../../foundation/typography/p3-14px-400';

const MultilineTextfield = ({
  starAnimation,
  reviewText,
  setReviewText,
}: {
  starAnimation: boolean;
  reviewText: string;
  setReviewText: Function;
}) => {
  return (
    <>
      <MotionTextfield
        variants={fadeIn}
        initial={false}
        animate={starAnimation ? 'animate' : 'initial'}
        style={{ display: starAnimation ? 'flex' : 'none' }}
      >
        <MultiLineTextField
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="쿠돈 구매 경험을 남겨주세요!(최소 20자)"
          minRows={3}
          minLength={19}
          maxLength={499}
        />
        <CountCharacters>
          <P314px400 color="gray2">{String(reviewText.length)}/500</P314px400>
        </CountCharacters>
      </MotionTextfield>
    </>
  );
};

export default MultilineTextfield;

const MotionTextfield = styled(motion.div)`
  margin: 36px 16px 0;
  display: flex;
  flex-direction: column;
`;

const MultiLineTextField = styled(TextareaAutosize)`
  max-width: 480px;
  outline-style: none;
  background-color: ${({ theme }) => theme.gray1__50};
  border: transparent !important; // 안드로이드 삼성 인터넷에서 작동 안 해서 !important
  border-radius: 2px;
  resize: none; // 늘이고 줄이는 기능 없애기
  display: flex; // flex를 넣으면 하단 이상한 마진이 사라짐.

  /* text */
  font-family: Spoqa Han Sans, sans-serif;
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
  margin-left: auto; //오른쪽 정렬
  text-align: right;
  margin-top: 4px;
  height: 20px;
`;

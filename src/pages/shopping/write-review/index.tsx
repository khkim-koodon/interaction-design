import styled from 'styled-components';
import { useState, useEffect } from 'react';
import NavigationBar from '../../../components/nav-bar';
import ProductBox from '../../../components/shopping/write-review/product-box';
import LeadText from '../../../components/shopping/write-review/lead-text';
import Stars from '../../../components/shopping/write-review/stars';
import MultilineTextfield from '../../../components/shopping/write-review/multiline-textfield';
import PhotoUpload from '../../../components/shopping/write-review/photo-upload';
import BottomButton from '../../../components/shopping/write-review/bottom-button';
import EventInfo from '../../../components/shopping/write-review/event-info';

const WriteReview = () => {
  // S of 서버로 전송할 데이터
  const [starCount, setStarCount] = useState([0, 0, 0, 0, 0]); // 0: off 1: on
  const [reviewText, setReviewText] = useState('');
  const [images, setImages] = useState<string[]>([]);
  // E of 서버로 전송할 데이터

  // S of Validation
  const [validation, setValidation] = useState(false); // 버튼 disabled + 상태 변경

  useEffect(() => {
    const starCountSum: number = starCount.reduce((a, b) => a + b);
    const reviewTextValidation: boolean = reviewText.length > 19;
    const imagesValidation: boolean = images.length > 0;

    starCountSum > 0 && reviewTextValidation && imagesValidation
      ? setValidation(true)
      : setValidation(false);
  }, [reviewText, images]);
  // star의 상태(starCount)는 1번 선택하면 무조건 활성화된 상태이기 때문에 의존성 배열에 포함 X
  // E of Validation

  const [starAnimation, setStarAnimation] = useState(false);

  return (
    <>
      <NavigationBar leftAction="back" title="포토 리뷰 작성" />
      <Main>
        <Container>
          <ProductBox />
          <LeadText starAnimation={starAnimation} />

          <Stars
            starAnimation={starAnimation}
            setStarAnimation={setStarAnimation}
            starCount={starCount}
            setStarCount={setStarCount}
          />

          <MultilineTextfield
            starAnimation={starAnimation}
            reviewText={reviewText}
            setReviewText={setReviewText}
          />

          <PhotoUpload
            starAnimation={starAnimation}
            images={images}
            setImages={setImages}
          />

          <BottomButton //
            starAnimation={starAnimation}
            validation={validation}
          />

          <EventInfo starAnimation={starAnimation} />
        </Container>
      </Main>
    </>
  );
};

export default WriteReview;

const Main = styled.main`
  overflow-x: hidden; // 애니메이션 작동 시 width 작아지는 문제 해결
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0px 0px 19px 0px rgb(0, 0, 0, 0.16);
`;

const Container = styled.div`
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

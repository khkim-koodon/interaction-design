import styled from 'styled-components';
import IconStar48Fill from '../elements/svg/icn_star_48_fill';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PopSpeechBubble from '../framer/pop-speech-bubble';
import NavigationBar from '../components/nav-bar';
import H324px400 from '../elements/typography/h3-24px-400';
import H616px700 from '../elements/typography/h6-16px-700';
import P314px400 from '../elements/typography/p3-14px-400';
import TextareaAutosize from 'react-textarea-autosize';
import IconAddPhoto24 from '../elements/svg/icn_add_photo_24';
import BigBtn from '../components/big-btn';
import IconTextClose24 from '../elements/svg/icn-textfield-x-24';

const WriteReview = () => {
  const [starCount, setStarCount] = useState([0, 0, 0, 0, 0]); // 0: off 1: on
  const [starAnimation, setStarAnimation] = useState(false);
  const activeStarAnimation = () => {
    setStarAnimation(!starAnimation); // production에서는 true로
  };
  const [reviewText, setReviewText] = useState('');

  // S of upload Image
  const [images, setImages] = useState<string[]>([]);
  const imageHandler = (e: any) => {
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );

    // https://www.youtube.com/watch?v=iBonBC-ySgo
    if (e.target.files) {
      // Array.cancat()
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
      images.length + fileArray.length < 6 // 사진은 5장까지만 올릴 수 있음.
        ? setImages((prevImages: string[]) => prevImages.concat(fileArray))
        : alert('사진은 5장까지만 올릴 수 있어요 😂');

      Array.from(e.target.files).map((file: any) => URL.revokeObjectURL(file));
    }
  };

  // 올린 사진 배치
  const renderPhotos = (source: string[]) => {
    return source.map((photo: string) => {
      return (
        <PreviewPhotoWrap key={photo}>
          <PreviewPhoto src={photo} />
          <button onClick={() => removePhoto(photo)}>
            <IconTextClose24 />
          </button>
        </PreviewPhotoWrap>
      );
    });
  };

  // 올린 사진 삭제
  const removePhoto = (key: string) => {
    const updateImages: string[] = images.filter(
      (photo: string) => photo !== key
    );
    setImages(updateImages);
  };

  return (
    <>
      <NavigationBar leftAction="back" title="포토 리뷰 작성" />
      <Main>
        <Container>
          <ProductBox>
            <img className="product__img" src="/images/review.jpg" />
            <ProductName>
              <H616px700 color="black">브랜드명</H616px700>
              <P314px400 color="gray4">상품 이름이 들어갑니다</P314px400>
            </ProductName>
          </ProductBox>

          <motion.div
            variants={textFadeOut}
            initial={false}
            animate={starAnimation ? 'animate' : 'initial'}
          >
            <H324px400 color="black">쿠돈 구매 경험은 어떠셨어요?</H324px400>
          </motion.div>

          {/* S of Star Area */}
          <MotionStarContainer
            variants={stagger}
            initial="initial"
            animate={starAnimation ? 'animate' : 'initial'}
          >
            {starCount.map((_, idx) => (
              <MotionStarButton
                onClick={() => activeStarAnimation()}
                key={idx}
                variants={starRotateUp}
              >
                <IconStar48Fill
                  idx={idx}
                  starCount={starCount}
                  setStarCount={setStarCount}
                />
              </MotionStarButton>
            ))}
          </MotionStarContainer>
          {/* E of Star Area */}

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
              <P314px400 color="gray2">{String(reviewText.length)}</P314px400>
              <P314px400 color="gray2">/500</P314px400>
            </CountCharacters>
          </MotionTextfield>

          {/* https://github.com/facebook/react/issues/310 */}
          <PhotoUploadArea
            variants={fadeIn}
            initial={false}
            animate={starAnimation ? 'animate' : 'initial'}
            style={{ display: starAnimation ? 'flex' : 'none' }}
          >
            <MotionUploadPhotoLabel htmlFor="upload-photo">
              <IconAddPhoto24 />
              <P314px400 color="black">사진 올리기</P314px400>
              <P314px400 color="black">{String(images.length)}/5</P314px400>
              <input
                // display: 'none'은 접근성 문제 발생
                style={{ opacity: '0', height: '0', width: '0' }}
                id="upload-photo"
                type="file"
                accept="image/*"
                multiple
                onChange={imageHandler}
              />
            </MotionUploadPhotoLabel>
            <PreviewPhotoTotalWrap>
              {images && renderPhotos(images)}
            </PreviewPhotoTotalWrap>
          </PhotoUploadArea>
          {/* https://helloinyong.tistory.com/275 */}

          <MotionButtonArea
            variants={fadeIn}
            initial={false}
            animate={starAnimation ? 'animate' : 'initial'}
            style={{ display: starAnimation ? 'flex' : 'none' }}
          >
            <P314px400 color="gray2" marginTop="48px">
              글과 사진이 모두 있어야 리뷰를 등록할 수 있어요!
            </P314px400>
            <BigBtn text="포토 리뷰 등록" color="white" marginTop="16px" />
          </MotionButtonArea>

          <PopSpeechBubbleWrap
            style={{ display: starAnimation ? 'none' : 'block' }}
          >
            <PopSpeechBubble
              text="📷 포토 리뷰 작성 시 포인트 10,000원 지급"
              backgroundColor="primary"
              duration={2}
              className=""
              trianglePosition="top"
            />
          </PopSpeechBubbleWrap>
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

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  margin: 64px 16px 0; // 48px + 16px

  .product__img {
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

const MotionStarContainer = styled(motion.div)`
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

const MotionStarButton = styled(motion.button)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  margin-left: auto; //오른쪽으로
  text-align: right;
  margin-top: 4px;
  height: 20px;
`;

const PhotoUploadArea = styled(motion.div)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap; // white-space: nowrap: 줄바꿈을 하지 않겠다
  margin-top: 36px;
  padding-left: 16px;
  display: flex;

  /* S of scroll 숨김 */
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  /* E of scroll 숨김 */
`;

const PreviewPhotoTotalWrap = styled.div`
  padding-right: 16px; // 이미지 wrap을 씌워줘야 작동
  display: flex; // 가로 정렬
`;

const PreviewPhotoWrap = styled.div`
  position: relative; // x(delete) - position: absolute 버튼 위치 조정 위해 필요

  svg {
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

const PreviewPhoto = styled.img`
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  width: 133px;
  height: 133px;
  margin-left: 8px;
  display: inline-block;
  object-fit: cover; // 비율에 맞지 않아도 이미지 확대해 박스를 채움.
`;

const MotionUploadPhotoLabel = styled(motion.label)`
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  max-width: 133px;
  padding: 0 40px; // 가로만 패딩 적용, 패딩이 없으면 가로로 작아짐. -> max-width와 함께 이용.
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

// Framer-motion Variants
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

const starRotateUp = {
  initial: { y: 0 },

  animate: { y: -120, rotateY: 720 },
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
    scale: 1.25,
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

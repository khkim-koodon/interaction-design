import styled from 'styled-components';
import { motion } from 'framer-motion';
import IconAddPhoto24 from '../../../foundation/svg/icn_add_photo_24';
import P314px400 from '../../../foundation/typography/p3-14px-400';
import { useState } from 'react';
import IconTextClose24 from '../../../foundation/svg/icn-textfield-x-24';
import { fadeIn } from '../../../framer/variants/write-review';

// https://github.com/microsoft/TypeScript/issues/31816
// amatiasq's의 Comment
interface Event<T = EventTarget> {
  target: T;
}

const PhotoUpload = ({
  starAnimation,
  images,
  setImages,
}: {
  starAnimation: boolean;
  images: string[];
  setImages: Function;
}) => {
  const imageHandler = (e: Event<HTMLInputElement>) => {
    const fileArray = Array.from(e.target.files as any).map((file) =>
      URL.createObjectURL(file)
    );

    // https://www.youtube.com/watch?v=iBonBC-ySgo
    if (e.target.files) {
      images.length + fileArray.length < 6 // 사진은 5장까지만 올릴 수 있음. 5장 미만인 상태에서 파일 업로드 화면으로 온 사용자가 5개가 넘는 사진을 올리는 걸 대비
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
      (image: string) => image !== key
    );
    setImages(updateImages);
  };

  // 사진 가이드 모달 보았는지 체크
  // 최초 리뷰 등록, 리뷰 수정에서 모두 '사진 올리기' 버튼을 눌렀을 때 최초 1회만 보여줌
  const [seePhotoGuide, setSeePhotoGuide] = useState(false);

  const seePhotoGuideCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    if (images.length >= 5) {
      e.preventDefault();
      alert('사진은 5장까지만 올릴 수 있어요 😂');
    }

    !seePhotoGuide &&
      alert(
        '직접 촬영하지 않은 캡처 이미지 등을 올리시면 포인트가 지급되지 않아요 😭 구매하신 상품의 전체 모습이 나온 사진을 올려주세요! 📸 '
      );
    setSeePhotoGuide(true);
  };

  return (
    <>
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
            onClick={seePhotoGuideCheck}
            onChange={imageHandler}
          />
        </MotionUploadPhotoLabel>
        <PreviewPhotoTotalWrap>
          {images && renderPhotos(images)}
        </PreviewPhotoTotalWrap>
      </PhotoUploadArea>
      {/* https://helloinyong.tistory.com/275 */}
    </>
  );
};

export default PhotoUpload;

const PhotoUploadArea = styled(motion.div)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap; // white-space: nowrap: 줄바꿈을 하지 않겠다
  margin-top: 16px;
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

const MotionUploadPhotoLabel = styled(motion.label)`
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  padding: 0 50px; // 가로만 패딩 적용, 패딩이 없으면 가로로 작아짐. -> max-width와 함께 이용.
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // 바뀌는 속성
  width: 164px;
  height: 164px;

  @media all and (max-width: 400px) {
    max-width: calc((100vw - 32px) / 1.618 / 1.618);
    height: calc((100vw - 32px) / 1.618 / 1.618);
  }
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
  margin-left: 8px;
  display: inline-block;
  object-fit: cover; // 비율에 맞지 않아도 이미지 확대해 박스를 채움.

  // 바뀌는 속성
  width: 164px;
  height: 164px;

  @media all and (max-width: 400px) {
    width: calc((100vw - 32px) / 1.618 / 1.618);
    height: calc((100vw - 32px) / 1.618 / 1.618);
  }
`;

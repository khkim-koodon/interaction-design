import styled from 'styled-components';
import PopSpeechBubble from '../../../framer/js/pop-speech-bubble';

const EventInfo = ({ starAnimation }: { starAnimation: boolean }) => {
  return (
    <>
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
    </>
  );
};

export default EventInfo;

const PopSpeechBubbleWrap = styled.div`
  margin-top: 16px;
`;

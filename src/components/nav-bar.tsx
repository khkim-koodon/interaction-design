import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import IconChannelTalk24 from '../foundation/svg/icn_channel-talk_24';
import IconChevronLeft24 from '../foundation/svg/icn_chevron_left_24';
import P216px400 from '../foundation/typography/p2-16px-400';

const NavigationBar = ({
  leftAction,
  title,
  rightAction,
}: {
  leftAction?: 'back';
  title?: string;
  rightAction?: 'channelTalk';
}) => {
  const router = useRouter();

  return (
    <>
      <Nav>
        <Container>
          {leftAction === 'back' && (
            <IconChevronLeft24
              onClick={() => router.back()}
              className="left__icon"
            />
          )}
          {title && <P216px400 color="black">{title}</P216px400>}
          {rightAction === 'channelTalk' && (
            <IconChannelTalk24 className="right__icon" />
          )}
        </Container>
      </Nav>
    </>
  );
};

export default NavigationBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
`;

const Container = styled.div`
  height: 48px;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; // 전체 중앙 정렬
  background-color: ${({ theme }) => theme.white};

  // 부모 relative
  position: relative;

  .left__icon {
    position: absolute;
    left: 16px;
  }

  p {
    text-align: center;
    margin: 0 auto;
  }

  .right__icon {
    position: absolute;
    right: 16px;
  }
`;

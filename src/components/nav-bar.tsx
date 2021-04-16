import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import IconChevronLeft24 from '../elements/svg/icon_chevron_left_24';
import P216px400 from '../elements/typography/p2-16px-400';

const NavigationBar = ({
  leftAction,
  title,
}: {
  leftAction?: 'back';
  title: string;
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
          <P216px400 color="black">{title}</P216px400>
        </Container>
      </Nav>
      <FillNavHeight />
    </>
  );
};

export default NavigationBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
`;

const Container = styled.div`
  width: 100vw;
  height: 48px;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.white};

  .left__icon {
    position: absolute;
    left: 16px;
  }

  p {
    text-align: center;
    margin: 0 auto;
  }
`;

const FillNavHeight = styled.div`
  width: 100vw;
  height: 48px;
  max-width: 480px;
`;

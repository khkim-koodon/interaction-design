import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import IconChevronLeft24 from '../elements/svg/icon_chevron_left_24';
import P216px400 from '../elements/typography/p2-16px-400';

const NavigationBar = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <>
      <Nav>
        <Container>
          <IconChevronLeft24
            onClick={() => router.back()}
            className="left__icon"
          />
          <P216px400 text={title} color="black" />
        </Container>
      </Nav>
    </>
  );
};

export default NavigationBar;

const Nav = styled.nav`
  margin: 0 16px;
`;

const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .left__icon {
    position: absolute;
    left: 0;
  }
`;

import styled from 'styled-components';
import { useState } from 'react';
import P510px400 from '../foundation/typography/p5-10px-400';
import IconShopping24 from '../foundation/svg/tab-bar/icn_shopping_24';
import IconConsignment24 from '../foundation/svg/tab-bar/icn_consignment_24';
import IconMy24 from '../foundation/svg/tab-bar/icn_my_24';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const TabBar = ({ pathname }: { pathname: string }) => {
  const currentTab = () => {
    if (pathname === '/') {
      return [1, 0, 0];
    } else if (pathname === '/consignment') {
      return [0, 1, 0];
    } else if (pathname === '/mypage') {
      return [0, 0, 1];
    } else {
      return [1, 0, 0];
    }
  };

  const [onOff, setOnOff] = useState<number[]>(currentTab());
  const onColor = 'primary';
  const offColor = 'gray3';

  const themeContext = useContext(ThemeContext);
  const hoverAndTapColor: string = themeContext.primary40;

  return (
    <>
      <Nav>
        {/* 1번째 탭 */}
        <Link href="/">
          <Tab
            onClick={() => setOnOff([1, 0, 0])}
            // whileHover={{ backgroundColor: hoverAndTapColor }}
            // whileTap={{ backgroundColor: hoverAndTapColor }}
          >
            <IconShopping24 isActive={onOff[0]} />
            <P510px400 color={onOff[0] === 1 ? onColor : offColor}>
              쇼핑
            </P510px400>
          </Tab>
        </Link>
        {/* 2번째 탭 */}
        <Link href="consignment">
          <Tab
            onClick={() => setOnOff([0, 1, 0])}
            // whileHover={{ backgroundColor: hoverAndTapColor }}
            // whileTap={{ backgroundColor: hoverAndTapColor }}
          >
            <IconConsignment24 isActive={onOff[1]} />
            <P510px400 color={onOff[1] === 1 ? onColor : offColor}>
              판매 대행
            </P510px400>
          </Tab>
        </Link>
        {/* 3번째 탭 */}
        <Link href="/mypage">
          <Tab
            onClick={() => setOnOff([0, 0, 1])}
            // whileHover={{ backgroundColor: hoverAndTapColor }}
            // whileTap={{ backgroundColor: hoverAndTapColor }}
          >
            <IconMy24 isActive={onOff[2]} />
            <P510px400 color={onOff[2] === 1 ? onColor : offColor}>
              마이 쿠돈
            </P510px400>
          </Tab>
        </Link>
      </Nav>
    </>
  );
};

export default TabBar;

const Nav = styled.nav`
  width: 100vw;
  max-width: 480px;
  margin: 0 auto;
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: solid 1px ${({ theme }) => theme.gray1};
  z-index: 10000;
  background-color: ${({ theme }) => theme.white};

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Tab = styled(motion.a)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-family: Spoqa Han Sans;
  }
`;

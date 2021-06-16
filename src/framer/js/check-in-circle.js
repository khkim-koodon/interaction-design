import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

const CheckInCircle = ({ toggle, setToggle }) => {
  const themeContext = useContext(ThemeContext);
  const [animateToggle, setAnimateToggle] = useState(false);
  // duration은 animateHandler의 setTimeout, <TouchArea />의 delay, resetVariants의 duration에 쓰임.
  const duration = 0.3;

  const toggleHandler = () => {
    const animateHandler = () => {
      setAnimateToggle(true);
      setTimeout(() => setAnimateToggle(false), duration * 1000);
    };

    const isActive = () => {
      setToggle(!toggle);
      animateHandler();
    };

    // 필터 비활성화 상태일 때에는 onClick 이벤트 작동하지 않도록 하는 조건
    toggle === true && isActive();
  };

  return (
    <>
      <TouchArea onClick={toggleHandler} delay={duration}>
        <svg
          width="96px"
          height="96px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Design-System"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="000-Icon/24/icn_check_24">
              <rect id="area" x="0" y="0" width="24" height="24"></rect>
              <motion.polyline
                id="Path-2"
                stroke="#363636"
                strokeWidth="2"
                points="4 11 10 17 20 5"
              ></motion.polyline>
            </g>
          </g>
        </svg>
      </TouchArea>
    </>
  );
};

export default CheckInCircle;

const resetVariants = (duration) => {
  return {
    initial: {
      scale: 1,
      rotate: 360,
    },

    animate: {
      scale: [1, 1.2, 1.4, 1.4, 1.2, 1],
      rotate: [0, 90, 180, 270, 365, 360],

      transition: {
        duration,
      },
    },
  };
};

// https://stackoverflow.com/questions/20012240/using-css-to-transition-the-fill-property-of-an-svg-path-on-hover
const TouchArea = styled.button`
  padding: 8px;

  /* path {
    transition: fill 0.15s ease;
    transition-delay: ${({ delay }) => delay}s;
  } */
`;

import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

const FilterReset = ({ toggle, setToggle }) => {
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
        <motion.svg
          variants={resetVariants(duration)}
          initial={false}
          animate={animateToggle === true && 'animate'}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="000-Icon/24/icn_reset_24">
              <rect id="area" x="0" y="0" width="24" height="24"></rect>
              <path
                d="M19.9895,11.9993 C19.4875,11.9993 19.0635,12.3703 19.0015,12.8663 C18.5725,16.3183 15.6095,18.9993 12.0315,18.9993 C7.6965,18.9993 4.2665,15.0663 5.1455,10.5933 C5.6855,7.8443 7.9225,5.6403 10.6855,5.1243 C13.2925,4.6393 15.6965,5.6113 17.2555,7.3523 L16.4325,8.0633 C16.2905,8.1863 16.3315,8.4163 16.5075,8.4823 L20.2995,9.9233 C20.4745,9.9903 20.6575,9.8463 20.6345,9.6603 L20.0865,5.4123 C20.0615,5.2163 19.8275,5.1273 19.6785,5.2563 L18.7645,6.0463 C16.8175,3.8553 13.8345,2.6033 10.5755,3.1133 C6.8695,3.6943 3.8455,6.6083 3.1595,10.2843 C2.0945,15.9963 6.4885,20.9993 12.0315,20.9993 C16.6295,20.9993 20.4355,17.5573 20.9925,13.1223 C21.0675,12.5263 20.5915,11.9993 19.9895,11.9993"
                id="Fill-1"
                fill={
                  toggle === true && animateToggle === false
                    ? themeContext.black
                    : themeContext.gray1
                }
              ></path>
            </g>
          </g>
        </motion.svg>
      </TouchArea>
    </>
  );
};

export default FilterReset;

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

  path {
    transition: fill 0.15s ease;
    transition-delay: ${({ delay }) => delay}s;
  }
`;

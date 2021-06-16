import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

const LikeMicroInteraction = ({ type, toggle, setToggle }) => {
  const themeContext = useContext(ThemeContext);
  const deactivatedColor =
    type === 'List' ? themeContext.gray1 : themeContext.black;

  const [animateToggle, setAnimateToggle] = useState(false);
  const duration = 0.3;
  const toggleHandler = () => {
    setToggle(!toggle);

    const animateHandler = () => {
      setAnimateToggle(true);
      // 애니메이션 진행되는 동안(duration)에만 animateToggle을 true로 유지
      setTimeout(() => setAnimateToggle(false), duration * 1000);
    };

    // 사용자가 like 아이콘이 false인 상태에서 like를 탭한 경우에만 animateHandler() 실행
    toggle === false && animateHandler();
  };

  if (toggle === false)
    return (
      <>
        <TouchArea onClick={toggleHandler}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="000-Icon/24/icn_heart_24"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M6.58091415,4.19230246 C4.4928644,4.83477931 3,7.00621844 3,9.39808147 C3,12.4123568 5.70401973,15.8608877 11.0245556,19.9143016 L12.0023496,20.6498437 L12.9707654,19.9178353 C18.2930679,15.8627569 21,12.4146409 21,9.39808147 C21,7.03993234 19.5487069,4.89327042 17.5011325,4.21844328 L17.2912502,4.15482521 C15.4711397,3.65110379 13.6269555,4.38441654 12.1730387,6.239335 L11.999,6.46908147 L11.9908405,6.45655409 C10.4813507,4.39868914 8.52066838,3.595455 6.58091415,4.19230246 Z M16.8751075,6.11794128 C18.0773363,6.51416454 19,7.87891099 19,9.39808147 L18.995749,9.56002353 C18.8881135,11.6287919 16.7358298,14.414924 12.4637332,17.7808943 L11.999,18.1410815 L11.9055002,18.0691129 C7.27474377,14.4856045 5,11.5424373 5,9.39808147 C5,7.85812632 5.94768438,6.47967631 7.16908585,6.10386048 C8.49262963,5.69661624 9.93654218,6.50723381 11.1055728,8.84529506 L11.9874755,10.6091005 L13.0071832,8.62616927 C14.1681248,6.43151123 15.582799,5.69203007 16.8751075,6.11794128 Z"
                id="icn/24/icn_heart_24"
                fill={deactivatedColor}
              ></path>
              <rect id="area" x="0" y="0" width="24" height="24"></rect>
            </g>
          </svg>
        </TouchArea>
      </>
    );
  else
    return (
      <TouchArea onClick={toggleHandler}>
        <motion.svg
          variants={likeVariants(duration)}
          // 이미 하트가 true인 상태에서는 애니메이션이 작동하지 않음.
          animate={
            animateToggle === true && toggle === true ? 'animate' : 'initial'
          }
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="000-Icon/24/icn_heart_24_fill"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <rect id="area" x="0" y="0" width="24" height="24"></rect>
            <path
              d="M12.1730387,6.239335 C13.5710356,4.45575956 15.3298567,3.70917164 17.0811542,4.10218674 L17.2912502,4.15482521 L17.5011325,4.21844328 C19.5487069,4.89327042 21,7.03993234 21,9.39808147 C21,12.3444884 18.4175077,15.7026128 13.3378442,19.6359054 L12.9707654,19.9178353 L12.0023496,20.6498437 L11.0245556,19.9143016 C5.70401973,15.8608877 3,12.4123568 3,9.39808147 C3,7.00621844 4.4928644,4.83477931 6.58091415,4.19230246 C8.45139144,3.61677099 10.3413287,4.3431011 11.8274045,6.24087607 L11.999,6.46908147 L12.1730387,6.239335 Z"
              id="icn/24/icn_heart_24_fill"
              fill={themeContext.primary}
            ></path>
          </g>
        </motion.svg>
      </TouchArea>
    );
};

export default LikeMicroInteraction;

const likeVariants = (duration) => {
  return {
    initial: {
      scale: 1,
    },

    animate: {
      scale: [0.9, 1.3, 1],

      transition: {
        duration,
      },
    },
  };
};

const TouchArea = styled.button`
  padding: 8px;
`;

import { useState } from 'react';
import styled from 'styled-components';
import FilterReset from '../framer/filter-reset';

const Index = () => {
  // onAnimationEnd={() => setMotion(false)}
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* <RefreshButton //
        onClick={() => setCount(count + 1)}
        onClick={() => runAnimation()}
      /> */}
      <Main>
        {/* <PopSpeechBubble
          key={count}
          text="1월 한 달간 택배 신청이 무료!"
          backgroundColor="primary2"
          duration={2.5}
        /> */}
        {/* <StaggerDots color="#d2c6cb" /> */}
        {/* <SkeletonRect width="80px" height="40px" duration="1.3" /> */}
        {/* <LikeMicroInteraction //
          type="List" // type은 총 2가지로 명명합니다. List, DetailPage
          toggle={toggle}
          setToggle={setToggle}
        /> */}
        <FilterReset //
          toggle={toggle}
          setToggle={setToggle}
        />
        {/* <CheckInCircle /> */}
      </Main>
    </>
  );
};

export default Index;

const Main = styled.main`
  margin-top: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

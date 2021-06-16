import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import FilterReset from '../framer/js/filter-reset';
import H616px700 from '../foundation/typography/h6-16px-700';

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
        <Link href="/shopping/write-review">
          <a>
            <H616px700 color="black">Review</H616px700>
          </a>
        </Link>

        <Link href="/interactive-component/like-morphing">
          <a>
            <H616px700 color="black" marginTop="72px">
              LikeMorphing
            </H616px700>
          </a>
        </Link>

        <Link href="/interactive-component/check-circle">
          <a>
            <H616px700 color="black" marginTop="72px">
              CheckCircle
            </H616px700>
          </a>
        </Link>
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
        {/* <FilterReset //
          toggle={toggle}
          setToggle={setToggle}
        /> */}
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

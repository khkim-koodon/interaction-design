import { useState } from 'react';
import styled from 'styled-components';
import IconHeartFill24 from '../../foundation/svg/icn_heart_fill_24';
import IconHeartStroke24 from '../../foundation/svg/icn_heart_stroke_24';

const LikeMorphingComponent = ({ active }: { active: boolean }) => {
  return (
    <>
      <Container active={active}>
        {!active ? <IconHeartStroke24 /> : <IconHeartFill24 />}
        {!active ? <Text>찜</Text> : <ActiveText>찜했어요</ActiveText>}
      </Container>
    </>
  );
};

export default LikeMorphingComponent;

const Container = styled.div<{ active: boolean }>`
  /* padding: 12px 16px; */
  width: ${({ active }) => (!active ? 77 : 116)}px;
  /* transition: width 0.05s; */
  height: 48px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 1px 2px 13px 0 rgba(52, 84, 33, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
  margin-left: 8px;
  margin-bottom: 0.5px; // 시각 보정
`;

const ActiveText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-left: 8px;
  margin-bottom: 0.5px; // 시각 보정
  /* transition: 0.1s; */
`;

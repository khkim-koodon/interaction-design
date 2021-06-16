import { useState } from 'react';
import styled from 'styled-components';
import CheckCircle from '../../../framer/check-circle';

const CheckCircleIndex = () => {
  return (
    <>
      <Container>
        <CheckCircle />
      </Container>
    </>
  );
};

export default CheckCircleIndex;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 144px auto 0;
`;

import FixedBottomButton from '../../../components/button/fixed-buttom-button';
import styled from 'styled-components';
import { useState } from 'react';

const FixedBottomButtonIndex = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Container>
        <button onClick={() => setActive(!active)}>동작</button>
        <FixedBottomButton trigger={active} />
      </Container>
    </>
  );
};

export default FixedBottomButtonIndex;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 144px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 100%;
`;

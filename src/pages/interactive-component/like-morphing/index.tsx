import { useState } from 'react';
import styled from 'styled-components';
import LikeMorphingComponent from '../../../components/interactive-component/like-morphing';

const LikeMorphing = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Button onClick={() => setActive(!active)}>
        <LikeMorphingComponent active={active} />
      </Button>
    </>
  );
};

export default LikeMorphing;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 144px auto 0;
  background-color: transparent;
`;

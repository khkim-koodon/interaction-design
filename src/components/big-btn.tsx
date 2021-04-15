import styled from 'styled-components';
import P118px400 from '../elements/typography/p1-18px-400 copy';

const BigBtn = ({
  text,
  color,
  marginTop,
}: {
  text: string;
  color: string;
  marginTop?: string;
}) => {
  return (
    <Button marginTop={marginTop}>
      <P118px400 text={text} color={color} />
    </Button>
  );
};

export default BigBtn;

const Button = styled.button<{ marginTop?: string }>`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.primary40};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop};
`;

import styled from 'styled-components';
import P118px400 from '../foundation/typography/p1-18px-400';

const BigBtn = ({
  text,
  textColor,
  marginTop,
  validation,
}: {
  text: string;
  textColor: string;
  marginTop?: string;
  validation?: boolean;
}) => {
  return (
    <Button
      marginTop={marginTop}
      validation={validation}
      disabled={!validation}
    >
      <P118px400 color={textColor}>{text}</P118px400>
    </Button>
  );
};

export default BigBtn;

const Button = styled.button<{ marginTop?: string; validation?: boolean }>`
  width: 100%;
  height: 48px;
  background-color: ${({ theme, validation }) =>
    validation ? theme.primary : theme.primary40};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop};
  -webkit-transition: background-color 0.23s ease-in-out;
  transition: background-color 0.23s ease-in-out;

  p {
    -webkit-transition: color 0.23s ease-in-out, font-weight 0.23s ease-in-out;
    transition: color 0.23s ease-in-out, font-weight 0.23s ease-in-out;
  }
`;

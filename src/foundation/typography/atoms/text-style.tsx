import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const TextStyle = ({
  type, // 기본값은 styled-components에서 p
  children,
  fontSize,
  weight,
  lineHeight,
  letterSpacing,
  color,
  opacity,
  marginTop,
}: {
  type: any;
  children: JSX.Element | string;
  fontSize: string;
  weight: number;
  lineHeight?: string;
  letterSpacing?: string;
  color: string;
  opacity?: number;
  marginTop?: string;
}) => {
  const themeContext = useContext(ThemeContext);
  const textColorFunc = () => {
    if (color === 'gray1') {
      return themeContext['gray1'];
    } else if (color === 'gray2') {
      return themeContext['gray2'];
    } else if (color === 'gray3') {
      return themeContext['gray3'];
    } else if (color === 'gray4') {
      return themeContext['gray4'];
    } else if (color === 'black') {
      return themeContext['black'];
    } else if (color === 'white') {
      return themeContext['white'];
    } else if (color === 'primary') {
      return themeContext['primary'];
    }
  };
  const textColor = textColorFunc();

  return (
    <Text
      as={type} // HTML 태그 결정
      fontSize={fontSize}
      weight={weight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textColor={textColor}
      opacity={opacity}
      marginTop={marginTop}
    >
      {children}
    </Text>
  );
};

export default TextStyle;

const Text = styled.p<TextType>`
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ textColor }) => textColor};
  opacity: ${({ opacity }) => opacity};
  margin-top: ${({ marginTop }) => marginTop};
  font-size: ${({ fontSize }) => fontSize};
`;

type TextType = {
  fontSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  textColor: any;
  opacity?: number;
  marginTop?: string;
};

import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const TextStyle = ({
  type, // 기본값은 Styled-components에서 p
  // text,
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
  // text: string;
  children: any;
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
    // if (color === 'gray1') {
    //   return themeContext['gray1'];
    // } else if (color === 'gray2') {
    //   return themeContext['gray2'];
    // } else if (color === 'gray3') {
    //   return themeContext['gray3'];
    // } else if (color === 'gray4') {
    //   return themeContext['gray4'];
    // } else if (color === 'black') {
    //   return themeContext['black'];
    // } else if (color === 'white') {
    //   return themeContext['white'];
    // }
    return themeContext[color] || themeContext['black'];
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

const Text = styled(motion.p)<TextType>`
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

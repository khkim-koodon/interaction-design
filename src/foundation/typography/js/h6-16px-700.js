import TextStyle from './atoms/text-style';

const H616px700 = ({ children, color, marginTop }) => {
  return (
    <TextStyle
      type="h6"
      fontSize="16px"
      weight={700}
      color={color}
      lineHeight="24px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H616px700;

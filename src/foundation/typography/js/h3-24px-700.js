import TextStyle from './atoms/text-style';

const H324px700 = ({ children, color, marginTop }) => {
  return (
    <TextStyle
      type="h3"
      fontSize="24px"
      weight={700}
      color={color}
      lineHeight="36px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H324px700;

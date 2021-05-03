import TextStyle from './atoms/text-style';

const P412px400 = ({ children, color, marginTop }) => {
  return (
    <TextStyle
      type="p"
      fontSize="12px"
      weight={400}
      color={color}
      lineHeight="18px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P412px400;

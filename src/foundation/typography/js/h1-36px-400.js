import TextStyle from './atoms/text-style';

const H136px400 = ({ children, color, marginTop }) => {
  return (
    <TextStyle
      type="h1"
      fontSize="36px"
      weight={400}
      color={color}
      lineHeight="54px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H136px400;

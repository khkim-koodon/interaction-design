import TextStyle from './atoms/text-style';

const H421px400 = ({ children, color, marginTop }) => {
  return (
    <TextStyle
      type="h4"
      fontSize="21px"
      weight={400}
      color={color}
      lineHeight="31px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H421px400;

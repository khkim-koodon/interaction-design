import TextStyle from './atoms/text-style';

const P118px400 = ({
  text,
  color,
  marginTop,
}: {
  text: string;
  color: string;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="p"
      text={text}
      fontSize="18px"
      weight={400}
      color={color}
      lineHeight="27px"
      marginTop={marginTop}
    />
  );
};

export default P118px400;

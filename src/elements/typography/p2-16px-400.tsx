import TextStyle from './atoms/text-style';

const P216px400 = ({
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
      fontSize="16px"
      weight={400}
      color={color}
      lineHeight="24px"
      marginTop={marginTop}
    />
  );
};

export default P216px400;

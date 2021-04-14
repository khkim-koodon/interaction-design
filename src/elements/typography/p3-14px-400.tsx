import TextStyle from './atoms/text-style';

const P314px400 = ({
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
      fontSize="14px"
      weight={400}
      color={color}
      lineHeight="20px"
      marginTop={marginTop}
    />
  );
};

export default P314px400;

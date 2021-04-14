import TextStyle from './atoms/text-style';

const H324px400 = ({
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
      type="h3"
      text={text}
      fontSize="24px"
      weight={400}
      color={color}
      lineHeight="36px"
      marginTop={marginTop}
    />
  );
};

export default H324px400;

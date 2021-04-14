import TextStyle from './atoms/text-style';

const H616px700 = ({
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
      type="h6"
      text={text}
      fontSize="16px"
      weight={700}
      color={color}
      lineHeight="24px"
      marginTop={marginTop}
    />
  );
};

export default H616px700;

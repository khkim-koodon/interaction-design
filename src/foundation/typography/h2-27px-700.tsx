import TextStyle from './atoms/text-style';

const H227px700 = ({
  children,
  color,
  marginTop,
}: {
  children: string;
  color: string;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="h2"
      fontSize="27px"
      weight={700}
      color={color}
      lineHeight="40px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H227px700;

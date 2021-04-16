import TextStyle from './atoms/text-style';

const H136px700 = ({
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
      type="h1"
      fontSize="36px"
      weight={700}
      color={color}
      lineHeight="54px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H136px700;

import TextStyle from './atoms/text-style';

const H421px700 = ({
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
      type="h4"
      fontSize="21px"
      weight={700}
      color={color}
      lineHeight="31px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H421px700;

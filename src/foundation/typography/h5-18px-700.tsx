import TextStyle from './atoms/text-style';

const H518px700 = ({
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
      type="h5"
      fontSize="18px"
      weight={700}
      color={color}
      lineHeight="27px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H518px700;

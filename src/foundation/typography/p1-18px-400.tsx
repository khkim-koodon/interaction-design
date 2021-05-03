import TextStyle from './atoms/text-style';

const P118px400 = ({
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
      type="p"
      fontSize="18px"
      weight={400}
      color={color}
      lineHeight="27px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P118px400;

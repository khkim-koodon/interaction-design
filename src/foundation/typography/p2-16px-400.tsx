import TextStyle from './atoms/text-style';

const P216px400 = ({
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
      fontSize="16px"
      weight={400}
      color={color}
      lineHeight="24px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P216px400;

import TextStyle from './atoms/text-style';

const P216px700 = ({
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
      weight={700}
      color={color}
      lineHeight="24px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P216px700;

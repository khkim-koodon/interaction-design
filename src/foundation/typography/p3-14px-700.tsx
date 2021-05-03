import TextStyle from './atoms/text-style';

const P314px700 = ({
  children,
  color,
  marginTop,
}: {
  children: any;
  color: string;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="p"
      fontSize="14px"
      weight={700}
      color={color}
      lineHeight="20px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P314px700;

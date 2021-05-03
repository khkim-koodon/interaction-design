import TextStyle from './atoms/text-style';

const P314px400 = ({
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
      weight={400}
      color={color}
      lineHeight="20px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P314px400;

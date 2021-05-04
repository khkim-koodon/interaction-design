import TextStyle from './atoms/text-style';

const P510px400 = ({
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
      fontSize="10px"
      weight={400}
      color={color}
      lineHeight="15px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default P510px400;

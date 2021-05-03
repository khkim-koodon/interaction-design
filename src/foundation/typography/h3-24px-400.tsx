import TextStyle from './atoms/text-style';

const H324px400 = ({
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
      type="h3"
      fontSize="24px"
      weight={400}
      color={color}
      lineHeight="36px"
      marginTop={marginTop}
    >
      {children}
    </TextStyle>
  );
};

export default H324px400;

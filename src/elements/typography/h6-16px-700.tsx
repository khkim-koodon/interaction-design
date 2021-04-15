import TextStyle from './atoms/text-style';

const H616px700 = ({
  // text,
  children,
  color,
  marginTop,
}: {
  // text: string;
  children: any;
  color: string;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="h6"
      // text={text}
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

export default H616px700;

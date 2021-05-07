import styled from 'styled-components';

const IconInfo16 = (props: any) => {
  return (
    <IconInfo16Box {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fill="#999"
          fillRule="evenodd"
          d="M8 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm1 5H7v5h2V7zm0-3H7v2h2V4z"
        />
      </svg>
    </IconInfo16Box>
  );
};

export default IconInfo16;

const IconInfo16Box = styled.span`
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

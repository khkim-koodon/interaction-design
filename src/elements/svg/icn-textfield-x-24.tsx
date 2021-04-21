import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconTextClose24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.black;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" transform="translate(0 .5)" />
        <path
          fill="#999"
          d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm3.293 4.293L12 10.585 8.707 7.293 7.293 8.707 10.585 12l-3.292 3.293 1.414 1.414L12 13.415l3.293 3.292 1.414-1.414L13.415 12l3.292-3.293-1.414-1.414z"
          transform="translate(0 .5)"
        />
      </g>
    </svg>
  );
};

export default IconTextClose24;

import React, { memo } from 'react';
import styled from 'styled-components';

interface HumburgerTypes {
  isOpenMenu: boolean;
  onCLick: (toggle: boolean) => void;
}

const Button = styled.button`
  margin-right: 22px;
`;

const Humburger: React.FC<HumburgerTypes> = ({ onCLick, isOpenMenu }) => {
  const toggleMenu = () => onCLick(!isOpenMenu);
  return (
    <Button type="button" onClick={toggleMenu}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpenMenu ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3 7.1C18.6866 6.7134 18.6866 6.0866 18.3 5.7C17.9134 5.3134 17.2866 5.3134 16.9 5.7L12 10.6L7.1 5.7C6.7134 5.3134 6.0866 5.3134 5.7 5.7C5.3134 6.0866 5.3134 6.7134 5.7 7.1L10.6 12L5.7 16.9C5.3134 17.2866 5.3134 17.9134 5.7 18.3C6.0866 18.6866 6.7134 18.6866 7.1 18.3L12 13.4L16.9 18.3C17.2866 18.6866 17.9134 18.6866 18.3 18.3C18.6866 17.9134 18.6866 17.2866 18.3 16.9L13.4 12L18.3 7.1Z"
            fill="#00BCD4"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="#00BCD4"
          />
        )}
      </svg>
    </Button>
  );
};

export default memo(Humburger);

import React from 'react';
import styled from 'styled-components';

interface ButtonType {
  bg: 'mainBlue' | 'white' | '';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e) => void;
}

const StyledBtn = styled.button<ButtonType>`
  height: 64px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
  transition: background-color 250ms;

  ${({ bg, theme }) => {
    switch (bg) {
      case 'mainBlue':
        return `
        background-color: ${theme.colors.mainBlue};
        color: ${theme.colors.white};
        
        &:hover, &:focus {
          background-color: ${theme.colors.mainBlueDarker};
        }
        
        &:active {
          background-color: ${theme.colors.mainBlueDarkest};
        }
        `;
      case 'white':
        return `
        color: ${theme.colors.mainBlue};
        background-color: ${theme.colors.white};
        `;
      default:
        return `
            color: ${theme.colors.white};
            `;
    }
  }};
`;

const Button: React.FC<ButtonType> = ({ children, bg, type = 'button', ...props }) => {
  return (
    <StyledBtn type={type} bg={bg} {...props}>
      {children}
    </StyledBtn>
  );
};

export default Button;

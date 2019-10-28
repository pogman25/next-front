import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkStyled = styled.a<{ isActive: boolean }>`
  padding: 22px 15px 20px;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.mainBlue};
  position: relative;
  text-transform: lowercase;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0)')};
    height: 3px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    transition: transform 0.25s;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

interface HeaderLinkType {
  href: string;
  title: string;
}

const HeaderLink: React.SFC<HeaderLinkType> = ({ href, title }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <LinkStyled isActive={href === pathname} title={title}>
        {title}
      </LinkStyled>
    </Link>
  );
};

export default HeaderLink;

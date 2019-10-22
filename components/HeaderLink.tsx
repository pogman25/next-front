import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkStyled = styled.a<{ isActive: boolean }>`
  ${({ isActive }) => isActive && 'border-bottom: 1px solid #000;'}
`;

const HeaderLink = ({ href, title }) => {
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

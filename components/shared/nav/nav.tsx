import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HookLogo from '../hook-logo';
import HeaderLink from '../header-link';
import useLocale from '../../../hooks/useLocale';

const NavStyled = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
`;

const links = [
  { href: '/', title: 'about' },
  { href: '/map', title: 'findPlace' },
  { href: '/download', title: 'download' },
  { href: '/contacts', title: 'support' },
];

const LinkStyled = styled.a`
  margin-left: 25px;
`;

const Nav = () => {
  const { setEN, setRU, dictionary } = useLocale();
  return (
    <NavStyled>
      <Link href="/">
        <LinkStyled>
          <HookLogo />
        </LinkStyled>
      </Link>
      <Ul>
        {links.map(({ href, title }) => (
          <li key={href}>
            <HeaderLink href={href} title={dictionary[title]} />
          </li>
        ))}
      </Ul>
      <button type="button" onClick={setRU}>
        RU
      </button>
      <button type="button" onClick={setEN}>
        EN
      </button>
    </NavStyled>
  );
};

export default Nav;

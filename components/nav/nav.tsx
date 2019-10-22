import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HookLogo from '../hook-logo';
import HeaderLink from '../header-link';

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
  { href: '/about', title: 'о приложении' },
  { href: '/map', title: 'искать рыбное место' },
  { href: '/download', title: 'скачать' },
  { href: '/contacts', title: 'поддержка' },
];

const LinkStyled = styled.a`
  margin-left: 25px;
`;

const Nav = () => {
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
            <HeaderLink href={href} title={title} />
          </li>
        ))}
      </Ul>

      <style jsx>
        {`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
              sans-serif;
          }
        `}
      </style>
    </NavStyled>
  );
};

export default Nav;

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.warning};
`;

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT', key: null },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', key: null },
].map(link => {
  // eslint-disable-next-line no-param-reassign
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/swapi">
          <a>SWAPI</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
            sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </nav>
);

export default Nav;

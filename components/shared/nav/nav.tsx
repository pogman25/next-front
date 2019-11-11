import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMedia } from 'react-use';
import Link from 'next/link';
import Humburger from './humburger';
import HookLogo from '../hook-logo';
import HeaderLink from '../header-link';
import useLocale from '../../../hooks/useLocale';
import MobileMenu from '../mobile-menu';

const EmptyBlock = styled.div`
  height: 64px;
`;

const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.white};
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
  const [isOpenMenu, setMenuStatus] = useState(false);
  const { dictionary } = useLocale();
  const isMobile = useMedia('(max-width: 880px)');

  useEffect(() => {
    if (isOpenMenu && !isMobile) {
      setMenuStatus(false);
    }
  }, [isOpenMenu, isMobile]);

  return (
    <>
      <EmptyBlock />
      <NavStyled>
        <Link href="/">
          <LinkStyled>
            <HookLogo />
          </LinkStyled>
        </Link>
        {isMobile ? (
          <Humburger onCLick={setMenuStatus} isOpenMenu={isOpenMenu} />
        ) : (
          <Ul>
            {links.map(({ href, title }) => (
              <li key={href}>
                <HeaderLink href={href} title={dictionary[title]} />
              </li>
            ))}
          </Ul>
        )}
      </NavStyled>
      {isOpenMenu && <MobileMenu links={links} dictionary={dictionary} />}
    </>
  );
};

export default memo(Nav);

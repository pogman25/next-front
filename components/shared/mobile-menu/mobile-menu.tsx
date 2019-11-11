import React from 'react';
import styled from 'styled-components';
import { LocaleType } from '../../../locale/locales';
import HeaderLink from '../header-link';

interface MobileMenuType {
  links: { href: string; title: string }[];
  dictionary: LocaleType;
}

const Container = styled.nav`
  position: fixed;
  z-index: 10;
  top: 64px;
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 72px;
  line-height: 1.05;
  font-weight: bold;
  margin-left: 56px;
  margin-top: 33px;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

const Ul = styled.ul`
  margin-top: auto;
  background-image: url('/images/waves.svg');

  @media (max-width: 768px) {
  }
`;

const Li = styled.li`
  display: flex;
  margin: 42px 56px 78px;
`;

const StyledLinks = styled(HeaderLink)`
  padding: 0;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const MobileMenu: React.FC<MobileMenuType> = ({ links, dictionary }) => {
  return (
    <Container>
      <P>меню</P>
      <Ul>
        {links.map(({ href, title }) => (
          <Li key={href}>
            <StyledLinks href={href} title={dictionary[title]} />
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default MobileMenu;

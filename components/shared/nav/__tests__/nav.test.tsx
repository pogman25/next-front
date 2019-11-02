import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Nav from '../nav';
import { theme } from '../../../../pages/_app';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    };
  },
}));

describe('Nav Test', () => {
  test('Nav render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Nav />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

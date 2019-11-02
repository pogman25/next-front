import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../_app';
import 'jest-styled-components';
import Home from '..';

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
          <Home />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../pages/_app';
import Home from '../pages';

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
    (window as any).matchMedia = (matches: string) => ({
      matches: true, // <-- Set according to what you want to test
      addListener: () => {},
      removeListener: () => {},
      media: '',
    });
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

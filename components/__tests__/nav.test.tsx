import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Nav from '../nav';
import { theme } from '../../pages/_app';
import 'jest-styled-components';

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

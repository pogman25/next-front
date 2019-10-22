import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';

export const theme = {
  colors: {
    mainGray: '#eee',
    mainBlue: '#00bcd4',
    primary: '#0070f3',
    warning: 'red',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import LocaleContext, { locales } from '../locale';

export const theme = {
  colors: {
    white: '#fff',
    mainGray: '#eee',
    mainBlue: '#00bcd4',
    primary: '#0070f3',
    warning: 'red',
  },
  fontSizes: {
    xxl: '72px',
    xl: '56px',
    l: '24px',
    ml: '20px',
  },
};

export default class MyApp extends App {
  state = {
    locale: 'ru',
  };

  changeLocale = (locale: string) => {
    this.setState({ locale });
  };

  getContextValue = () => {
    return {
      current: this.state.locale,
      changeLocale: this.changeLocale,
      ru: locales.ru,
      en: locales.en,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <LocaleContext.Provider value={this.getContextValue()}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </LocaleContext.Provider>
    );
  }
}

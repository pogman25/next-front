import React from 'react';
import Head from 'next/head';
import Nav from '../components/shared/nav';
import Banner from '../components/home/banner';
import useLocale from '../hooks/useLocale';

const Home = () => {
  const { dictionary } = useLocale();
  return (
    <div>
      <Head>
        <title>{dictionary.slogan}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Banner />
      </main>
    </div>
  );
};

export default Home;

import React from 'react';
import Head from 'next/head';
import Nav from '../components/shared/nav';
import Footer from '../components/shared/footer';
import Banner from '../components/home/banner';
import useLocale from '../hooks/useLocale';
import Advantages from '../components/home/advantages';

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
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

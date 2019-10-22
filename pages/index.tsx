import React from 'react';
import Head from 'next/head';
import Nav from '../components/shared/nav';
import Banner from '../components/home/banner';

const Home = () => (
  <div>
    <Head>
      <title>Hook - знаем где рыба!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <main>
      <Banner />
    </main>
  </div>
);

export default Home;

import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Carousel
        title='Lugares Más Populares'
        description='Conoce los lugares más populares de los últimos años visitados únicamente por aquellos que son más atrevidos y audaces.'
      />
      <Carousel
        title='Lugares Embrujados'
        description='No apto para cardiacos. Conoce los lugares embruajdos del mundo para vivir una experiencia fuera de este mundo, una experiencia con el más allá.'
      />
      <Footer />
    </>
  );
};

export default Home;

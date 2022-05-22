import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />

      <main className='bg-white' style={{height: `89vh`}}>
        <section className='w-full h-full text-zinc-400 bg-zinc-900 body-font'>
          <div className='w-full h-full bg-zinc-900'>
            <iframe
              title='map'
              style={{filter: `grayscale(1) contrast(1.2) opacity(0.7)`}}
              marginHeight='0'
              marginWidth='0'
              scrolling='no'
              src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
              width='100%'
              height='100%'
              frameBorder='0'
            ></iframe>
          </div>
        </section>
      </main>

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

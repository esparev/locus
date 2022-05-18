import React from 'react';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  return (
    <section className='text-zinc-400 bg-zinc-900 body-font'>
      <div className='px-5 py-12 mx-auto'>
        <div className='flex flex-col'>
          <div className='h-1 overflow-hidden rounded bg-zinc-800'>
            <div className='w-24 h-full bg-red-600'></div>
          </div>
          <div className='flex flex-col flex-wrap py-6 mb-12 sm:flex-row'>
            <h1 className='mb-2 text-3xl font-bold text-white sm:w-2/5 font-display title-font sm:mb-0'>
              Lugares Embrujados
            </h1>
            <p className='pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10'>
              No apto para cardiacos. Conoce los lugares embruajdos del mundo
              para vivir una experiencia fuera de este mundo, una experiencia
              con el más allá.
            </p>
          </div>
        </div>

        <div className='flex -mx-4 -mt-4 -mb-10 overflow-x-scroll overscroll-x-contain snap-x sm:-m-4'>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </div>
    </section>
  );
};

export default Carousel;

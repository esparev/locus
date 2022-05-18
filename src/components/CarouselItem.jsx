import React from 'react';

const CarouselItem = () => {
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
          <div className='p-4 mb-6 snap-center min-w-5/6 md:min-w-9/19 lg:min-w-5/16 sm:mb-0'>
            <div className='h-64 overflow-hidden rounded-lg'>
              <img
                className='object-cover object-center w-full h-full'
                src='https://images.unsplash.com/photo-1516822671976-480ad5131e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='content'
              />
            </div>
            <h2 className='mt-5 text-xl font-medium text-white title-font'>
              Kolmanskop, Namibia
            </h2>
            <p className='mt-2 text-base leading-relaxed'>
              Swag shoindxgoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className='inline-flex items-center mt-3 text-red-500'>
              Ver Más
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselItem;

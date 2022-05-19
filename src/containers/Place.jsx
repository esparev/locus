import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Place = () => {
  return (
    <>
      <Header />

      <main className='text-zinc-400 bg-zinc-900 body-font'>
        <div className='container flex flex-col px-5 py-12 mx-auto'>
          <div className='mx-auto lg:w-4/6'>
            <div className='overflow-hidden rounded-lg h-80'>
              <img
                className='object-cover object-center w-full h-full'
                src='https://images.unsplash.com/photo-1617609026795-91a36f12cb53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                alt='content'
              />
            </div>
            <div className='flex flex-col mt-10 sm:flex-row'>
              <div className='text-center sm:w-1/3 sm:pr-8 sm:py-8'>
                <div className='flex flex-col items-center justify-center text-center'>
                  <h2 className='text-lg font-medium text-white title-font'>
                    Pripyat
                  </h2>
                  <div className='w-12 h-1 mt-2 mb-4 bg-red-600 rounded'></div>
                  <div className='text-left'>
                    <p className='text-base text-zinc-300'>
                      <strong> País: </strong>
                      Ucrania
                    </p>
                    <p className='my-2 text-base text-zinc-300'>
                      <strong> Ciudad: </strong>
                      Pripyat
                    </p>
                    <div className='flex items-center'>
                      <p className='text-base text-zinc-300'>
                        <strong> Calificación: </strong>
                      </p>
                      <svg
                        className='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        className='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        className='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        className='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        className='w-5 h-5 text-zinc-300 dark:text-zinc-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    </div>
                    <div className='flex items-center justify-between my-2'>
                      <span className='text-base font-medium text-red-700 dark:text-white'>
                        <strong>Nivel de peligro </strong>
                      </span>
                      <span className='text-sm font-medium text-red-700 dark:text-white'>
                        45%
                      </span>
                    </div>
                    <div className='w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-700'>
                      <div
                        className='bg-red-600 h-2.5 rounded-full'
                        style={{ width: `45%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-4 mt-4 border-t border-zinc-800 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0'>
                <p className='mb-4 text-lg leading-relaxed'>
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Carousel
        title='Más Lugares por Explorar'
        description='Descubre y explora nuevos lugares que nunca hayas imaginado que exiten en el mundo.'
      />

      <Footer />
    </>
  );
};

export default Place;

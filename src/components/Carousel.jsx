import React from 'react';
import CarouselItem from './CarouselItem';

const Carousel = (props) => {
  const { title, description } = props;
  return (
    <section className='bg-white text-zinc-700 dark:text-zinc-400 dark:bg-zinc-900 body-font'>
      <div className='px-5 py-12 mx-auto'>
        <div className='flex flex-col'>
          <div className='h-1 overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800'>
            <div className='w-24 h-full bg-red-600'></div>
          </div>
          <div className='flex flex-col flex-wrap py-6 mb-12 sm:flex-row'>
            <h1 className='mb-2 text-3xl font-bold text-zinc-800 dark:text-white sm:w-2/5 font-display title-font sm:mb-0'>
              {title}
            </h1>
            <p className='pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10'>
              {description}
            </p>
          </div>
        </div>

        <div className='flex -mx-4 -mt-4 -mb-10 overflow-x-scroll overscroll-x-contain snap-x sm:-m-4'>
          <CarouselItem
            image='https://images.unsplash.com/photo-1512420502149-ebd993111c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJhbmRvbmVkJTIwZGlzbmV5bGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Buzludzha, Bulgaria'
            description='Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual. '
          />
          <CarouselItem
            image='https://images.unsplash.com/photo-1512420502149-ebd993111c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJhbmRvbmVkJTIwZGlzbmV5bGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Buzludzha, Bulgaria'
            description='Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual. '
          />
          <CarouselItem
            image='https://images.unsplash.com/photo-1512420502149-ebd993111c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJhbmRvbmVkJTIwZGlzbmV5bGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Buzludzha, Bulgaria'
            description='Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual. '
          />
          <CarouselItem
            image='https://images.unsplash.com/photo-1512420502149-ebd993111c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJhbmRvbmVkJTIwZGlzbmV5bGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Buzludzha, Bulgaria'
            description='Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual. '
          />
          <CarouselItem
            image='https://images.unsplash.com/photo-1512420502149-ebd993111c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJhbmRvbmVkJTIwZGlzbmV5bGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Buzludzha, Bulgaria'
            description='Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual. '
          />
          <CarouselItem
            image='https://images.unsplash.com/photo-1512420502149-ebd993111c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJhbmRvbmVkJTIwZGlzbmV5bGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
            title='Buzludzha, Bulgaria'
            description='Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual. '
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;

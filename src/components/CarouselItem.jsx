import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CarouselItem = (props) => {
	const { image, title, description } = props;
	return (
		<div className="p-4 mb-6 snap-center min-w-5/6 md:min-w-9/19 lg:min-w-5/16 sm:mb-0">
			<div className="h-64 overflow-hidden rounded-lg">
				<Image className="object-cover object-center w-full h-full" src={image} alt={`Imagen de ${title}`} width={500} height={500} />
			</div>
			<h2 className="mt-5 text-xl font-medium text-white title-font">{title}</h2>
			<p className="mt-2 text-base leading-relaxed">{description}</p>
			<Link href="/lugares/pripyat" className="inline-flex items-center mt-3 text-red-500">
				<>
					Ver Más
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</>
			</Link>
		</div>
	);
};

export default CarouselItem;

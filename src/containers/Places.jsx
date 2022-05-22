import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Places = () => {
	return (
		<>
			<Header />

			<Carousel title="Los Más Populares" description="Conoce los lugares más populares de los últimos años visitados únicamente por aquellos que son más atrevidos y audaces." />

			<Carousel title="Embrujados" description="No apto para cardiacos. Conoce los lugares embruajdos del mundo para vivir una experiencia fuera de este mundo, una experiencia con el más allá." />

			<Carousel
				title="Parques Abandonados"
				description="Mucho cuidado al intentar divertirte en estos lugares. Ya que lo más seguro es que las atracciones lleven años sin mantenimiento. Definitivamente no querras subirte a una montaña rusa abandonada."
			/>

			<Footer />
		</>
	);
};

export default Places;

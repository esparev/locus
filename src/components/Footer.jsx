import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800">
			<span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
				© 2022{' '}
				<a href="https://flowbite.com" className="hover:underline">
					Locus™{' '}
				</a>
				Todos los derechos reservados.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
				<li>
					<Link href="/" className="mr-4 hover:underline md:mr-6">
						<>Acerca de</>
					</Link>
				</li>
				<li>
					<Link href="/" className="mr-4 hover:underline md:mr-6">
						<>Política de Privacidad</>
					</Link>
				</li>
				<li>
					<Link href="/" className="mr-4 hover:underline md:mr-6">
						<>Licencia</>
					</Link>
				</li>
				<li>
					<Link href="/" className="hover:underline">
						<>Contacto</>
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;

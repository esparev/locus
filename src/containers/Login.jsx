import React from 'react';

const Login = () => {
	const background = 'https://images.unsplash.com/photo-1517061093373-db94568ace5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
	
  return (
		<div className="flex items-center h-screen bg-zinc-900 pattern">
			<div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-zinc-800 lg:h-auto lg:max-w-4xl">
				<div
					className="hidden bg-cover lg:block lg:w-1/2"
					style={{
						backgroundImage: `url(${background})`,
					}}
				></div>

				<div className="flex flex-col justify-center w-full px-6 py-8 md:px-8 lg:w-1/2">
					<h2 className="text-2xl font-black text-center uppercase font-display text-zinc-700 dark:text-white">Locus</h2>

					<p className="text-xl text-center text-zinc-600 dark:text-zinc-200">¡Bienvenido de nuevo!</p>

					<div className="mt-4">
						<label className="block mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="LoggingEmailAddress">
							Correo electrónico
						</label>
						<input
							id="LoggingEmailAddress"
							className="block w-full px-4 py-2 bg-white border rounded-lg text-zinc-700 focus:outline focus:outline-2 focus:outline-red-600 focus:ring-red-500 focus:border-red-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:focus:border-red-500"
							type="email"
							placeholder="correo@ejemplo.com"
							required
						/>
					</div>

					<div className="mt-4">
						<div className="flex justify-between">
							<label className="block mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="loggingPassword">
								Contraseña
							</label>
							<a href="#" className="text-xs text-zinc-500 hover:underline dark:text-zinc-300">
								¿Olvidaste tu contraseña?
							</a>
						</div>

						<input
							id="loggingPassword"
							className="block w-full px-4 py-2 bg-white border rounded-lg text-zinc-700 focus:outline focus:outline-2 focus:outline-red-600 focus:ring-red-500 focus:border-red-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:focus:border-red-500"
							type="password"
							placeholder="••••••••"
							required
						/>
					</div>

					<div className="mt-8">
						<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-lg font-display hover:bg-red-600 focus:bg-red-600 focus:outline-none">
							Iniciar sesión
						</button>
					</div>

					<div className="flex items-center justify-between mt-4">
						<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

						<a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
							o crea una cuenta
						</a>

						<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

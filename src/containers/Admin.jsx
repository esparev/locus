import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Admin = () => {
	return (
		<div className="flex flex-col justify-between h-screen">
			<Header />

			<main className="relative h-full px-5 overflow-x-auto bg-white dark:bg-zinc-900">
				<div className="md:flex md:items-center">
					<div className="p-4">
						<label htmlFor="table-search" className="sr-only">
							Search
						</label>
						<div className="relative mt-1">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
								</svg>
							</div>
							<input
								id="table-search"
								className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-80 pl-10 p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
								placeholder="Search for items"
								type="text"
							/>
						</div>
					</div>

					{/* <!-- Modal toggle --> */}
					<button
						className="block mx-4 mb-4 md:m-0 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm py-2.5 px-5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
						data-modal-toggle="place-modal"
						type="button"
					>
						Agregar Lugar
					</button>

					{/* <!-- Main modal --> */}
					<div id="place-modal" className="fixed top-0 left-0 right-0 z-50 hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" aria-hidden="true" tabIndex="-1">
						<div className="relative w-full h-full max-w-md p-4 md:max-w-4xl md:h-auto">
							{/* <!-- Modal content --> */}
							<div className="relative bg-white rounded-lg shadow dark:bg-zinc-700">
								<button
									className="absolute top-3 right-2.5 text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-800 dark:hover:text-white"
									data-modal-toggle="place-modal"
									type="button"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
								<div className="px-6 py-6 lg:px-8">
									<h3 className="mb-4 text-xl font-medium text-zinc-900 dark:text-white">Agregar un Nuevo Lugar</h3>
									<form className="space-y-6" action="#">
										<div className="md:flex">
											<div className="w-full md:mr-2">
												<div>
													<label htmlFor="place" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">
														Nombre del lugar
													</label>
													<input
														id="place"
														className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white"
														placeholder="Palacio del arte"
														name="place"
														type="text"
														required
													/>
												</div>
												<div className="md:flex">
													<div className="md:mr-2">
														<label htmlFor="city" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">
															Ciudad
														</label>
														<input
															id="city"
															className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white"
															placeholder="San Francisco"
															name="city"
															type="text"
															required
														/>
													</div>
													<div className="md:ml-2">
														<label htmlFor="country" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">
															País
														</label>
														<input
															id="country"
															className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white"
															placeholder="Estados Unidos"
															name="country"
															type="text"
															required
														/>
													</div>
												</div>
												<div>
													<label htmlFor="description" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">
														Descripcion
													</label>
													<textarea
														id="description"
														className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white"
														placeholder="Descripcion del lugar..."
														name="description"
														type="text"
														required
													></textarea>
												</div>
											</div>
											<div className="flex items-center justify-center w-full md:ml-2 mt-7">
												<label
													htmlFor="dropzone-file"
													className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer border-zinc-300 bg-zinc-50 dark:hover:bg-bray-800 dark:bg-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-600"
												>
													<div className="flex flex-col items-center justify-center pt-5 pb-6">
														<svg className="w-10 h-10 mb-3 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
														</svg>
														<p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
															<span className="font-semibold">Haga clic para cargar </span>o arrastrar y soltar
														</p>
														<p className="text-xs text-zinc-500 dark:text-zinc-400">PNG o JPG (MAX. 800x400px)</p>
													</div>
													<input id="dropzone-file" className="hidden" type="file" />
												</label>
											</div>
										</div>

										<button
											className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
											type="submit"
										>
											Agregar lugar
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="overflow-hidden overflow-x-scroll rounded-lg md:overflow-x-hidden">
					<table className="w-full text-sm text-left shadow-md text-zinc-700 dark:text-zinc-400">
						<thead className="text-xs uppercase text-zinc-700 bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Lugar
								</th>
								<th scope="col" className="px-6 py-3">
									Ciudad
								</th>
								<th scope="col" className="px-6 py-3">
									País
								</th>
								<th scope="col" className="px-6 py-3">
									Fecha
								</th>
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600">
								<th scope="row" className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">
									Dalquharran Castle
								</th>
								<td className="px-6 py-4">Girvan</td>
								<td className="px-6 py-4">UK</td>
								<td className="px-6 py-4">$2999</td>
								<td className="px-6 py-4 text-right">
									<a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline focus:outline focus:outline-2 focus:outline-red-600">
										Edit
									</a>
								</td>
							</tr>
							<tr className="border-b bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600">
								<th scope="row" className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">
									Pripyat
								</th>
								<td className="px-6 py-4">Pripyat</td>
								<td className="px-6 py-4">Ucrania</td>
								<td className="px-6 py-4">$1999</td>
								<td className="px-6 py-4 text-right">
									<a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline focus:outline focus:outline-2 focus:outline-red-600">
										Edit
									</a>
								</td>
							</tr>
							<tr className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-600">
								<th scope="row" className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">
									Buzludzha
								</th>
								<td className="px-6 py-4">Buzludzha</td>
								<td className="px-6 py-4">Bulgaria</td>
								<td className="px-6 py-4">$99</td>
								<td className="px-6 py-4 text-right">
									<a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline focus:outline focus:outline-2 focus:outline-red-600">
										Edit
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Admin;

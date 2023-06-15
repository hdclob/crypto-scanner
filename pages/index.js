import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Crypto Scanner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-center h-100 p-5 text-white bg-dark rounded-3">
				<h1 className="display-5">Crypto Scanner</h1>
				<p className="fs-4">Let's get scanning.</p>
				<button className="btn btn-outline-light btn-lg" type="button">Go</button>
			</div>
		</>
	)
}

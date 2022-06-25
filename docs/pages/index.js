import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mt-5">
      <Head>
        <title>Simply-UI | Get Simple</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row justify-center">
		<div className="col-12-xs col-5-md">
			<h2>
				<div className="font-xxl"> A <span className="font-xxl text-secondary">Simply</span><br />Simpler CSS<br />library</div>                    
			</h2>
			<p className="text-gray mt-2 mb-3">A simple, easy-to-use, powerful CSS library built upon Sass.</p>
			<a href="https://github.com/benjamin-Keller/Simply-UI" className="btn-outlined-secondary text-secondary text-hover-white">View On GitHub</a>
		</div>
		<div className="col-12-xs col-5-md">
			<img src="images/logo.svg" alt="Simply-UI green logo" />
		</div>
      </div>

    </div>
  )
}

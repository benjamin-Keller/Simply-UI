import Head from 'next/head'
import Link from 'next/link'

export default function Navbar({ children }) {
  return (
    <>
    <Head >
        <script src="https://kit.fontawesome.com/2fdf03cddc.js" crossOrigin="anonymous"></script>
        <body className="scrollbar-secondary" />
    </Head>
    <nav className="navbar-secondary text-white">
        <div className="container">
            <span className="display-f align-items-center flex-gap-20">
                <h1><Link href="/"><a>Simply-UI</a></Link></h1>
                <Link href="/docs/introduction/getting_started">
                    <a className="text-hover-black">Documentation</a>
                </Link>
            </span>
            <ul className="display-f">
                <li className="ml-1 text-hover-black">
                    <Link href="https://github.com/benjamin-Keller/Simply-UI">
                        <a><i className="fa-brands fa-github"></i></a>
                    </Link>
                </li>
                <li className="ml-1 text-hover-black">
                    <Link href="https://www.npmjs.com/package/simply-ui">
                        <a><i className="fa-brands fa-npm"></i></a>
                    </Link>

                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}
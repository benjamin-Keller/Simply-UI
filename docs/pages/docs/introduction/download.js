import Head from 'next/head'
import Image from 'next/image'
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Sidebar from '../../components/sidebar'


const cdnText = `<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css" />
	<title>Simply-UI Demo</title>
</head>
`;

const cloneText = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/simply.css">
    <title>Simply-UI Demo</title>
</head>
`;

export default function Download() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Download Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                
            </div>
      </main>

    </div>
  )
}

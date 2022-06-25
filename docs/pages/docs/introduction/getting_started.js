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

export default function Getting_Started() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Simply-UI | Get Simple</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div class="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Getting Started</h1>
                <h2>Get Setup</h2>
                <h3>CDN</h3>
                <p><code class="text-primary font-consolas">&lt;link&gt;</code> the CDN,
                    in your project's <code class="text-primary font-consolas">&lt;head&gt;</code>
                </p>
                <strong>JsDeliver:</strong>
                <ol>
                    <li>Full (87.3 KB): <a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css"
                            class="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css</a>
                    </li>
                    <li>Min (70.1 KB): <a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css"
                            class="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css</a>
                    </li>
                </ol>

                <strong>UNPKG:</strong>
                <ol>
                    <li>Full (87.3 KB): <a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css"
                            class="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css</a>
                    </li>
                    <li>Min (70.1 KB): <a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css"
                            class="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css</a>
                    </li>
                </ol>

				<div>
					<SyntaxHighlighter language="html" style={dracula}>
						{cdnText}
					</SyntaxHighlighter>
				</div>



                <h3 class="mt-2">GitHub</h3>
                <ol>
                    <li>
                        <p>Download or Clone the <a href="https://github.com/benjamin-Keller/Simply-UI"
                                class="text-secondary">GitHub Repo</a> and
                            move the <a href="https://github.com/benjamin-Keller/Simply-UI/tree/master/simply-ui"
                                class="text-secondary">Simply-UI</a> and <a
                                href="https://github.com/benjamin-Keller/Simply-UI/blob/master/gulpfile.js"
                                class="text-secondary">gulpfile.js</a> folder to your project<br />(CDN and NPM coming
                            soon)
                        </p>
                    </li>
                    <li>
                        <p>In your project directory. Open Terminal and run <code
                                class="text-primary font-consolas">gulp</code> to build .css file.
                            <br /><strong>If you use simply.purged.css the file will only have used classes thanks to <a
                                    href="https://purgecss.com/plugins/gulp.html"
                                    class="text-secondary">gulp-purgecss</a>.</strong>
                        </p>
                    </li>
                    <li>
                        <p><code class="text-primary font-consolas">&lt;link&gt;</code> the built css, by default <code
                                class="text-primary font-consolas">dist/css/simply.html</code>,
                            in your project's <code class="text-primary font-consolas">&lt;head&gt;</code>
                        </p>

                    </li>
                </ol>
                <div>
                    <SyntaxHighlighter language="html" style={dracula}>
                        {cloneText}
                    </SyntaxHighlighter>
                </div>
            </div>
      </main>

    </div>
  )
}

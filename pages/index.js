import Head from 'next/head'
import HomePage from "./_home";
import Navbar from "../components/navbar";
import Script from "next/script";
import {ToastContainer} from "react-toastify";

export default function Home() {
    return (<div>
        {/* eslint-disable-next-line @next/next/no-script-component-in-head */}
        <Head>
            <title>Comston Technologies</title>
            <meta name="description" content="Mobile & web software development company"/>
            <link rel="icon" href="/Logo.svg"/>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-ZGXQT0Y6WD"
                    strategy={"lazyOnload"}/>
            <Script id={"sadf"} strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments)}; 
            gtag('js', new
            Date()); gtag('config', 'G-ZGXQT0Y6WD');`}
            </Script>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10933023663"/>
            <Script id={"as"} strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10933023663');`}
            </Script>
        </Head>
        <Navbar/>
        <main>
            <ToastContainer/>
            <HomePage/>
        </main>

        <footer>

        </footer>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"/>
        <script>
            AOS.init()
        </script>
    </div>)
}

import Head from 'next/head'
import HomePage from "./_home";
import Navbar from "../components/navbar";
import Script from "next/script";
import {ToastContainer} from "react-toastify";

export default function Home() {
    return (<div>
        <Head>
            <title>Comston Technologies</title>
            <meta name="description" content="Mobile & web software development company"/>
            <link rel="icon" href="/favicon.ico"/>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
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

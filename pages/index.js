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
        {/* <script>
            {`
                (function(w, d, s, o){
                    var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.io/v2.js';j.onload = function() {
                      if (document.readyState !== 'loading') Marquiz.init(o);
                      else document.addEventListener("DOMContentLoaded", function() {
                        Marquiz.init(o);
                      });
                    };
                    d.head.insertBefore(j, d.head.firstElementChild);
                  })(window, document, 'script', {
                      host: '//quiz.marquiz.io',
                      region: 'us',
                      id: '6335ed38ff00140027311ec6',
                      autoOpen: 5,
                      autoOpenFreq: 'once',
                      openOnExit: false,
                      disableOnMobile: false
                    }
                  );
            `}
        </script> */}
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

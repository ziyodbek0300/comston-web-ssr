import '../styles/globals.css'
import Script from "next/script";
import {useRouter} from 'next/router'
import * as gtag from '../lib/gtag'
import {useEffect} from "react";

function MyApp({Component, pageProps}) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log("handle")
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('hashChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (<>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ZGXQT0Y6WD"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZGXQT0Y6WD');
        `}
        </Script>

        <Component {...pageProps} />
    </>)
}

export default MyApp

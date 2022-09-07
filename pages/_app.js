import '../styles/globals.css'
import Script from "next/script";

function MyApp({Component, pageProps}) {
    return (<>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-10933023663"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-10933023663');
        `}
        </Script>


        <Component {...pageProps} />
    </>)
}

export default MyApp

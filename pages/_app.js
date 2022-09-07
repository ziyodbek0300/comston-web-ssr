import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return(
      <>
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
      </>
      )
}

export default MyApp

import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
              gtag('config', '${gtag.GA_TRACKING_ID}');
            `,
        }}
      />
      <Script
        id="marquiz-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
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
              );`,
        }}
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

// import { useEffect } from 'react';
// import TagManager from 'react-gtm-module';
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'G-YHPFPHLDG4' });
  //   console.log("Initialized")
  // }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YHPFPHLDG4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YHPFPHLDG4');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

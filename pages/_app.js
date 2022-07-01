import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
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

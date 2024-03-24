import "../styles/app.scss";
import Router from 'next/router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", () =>
  NProgress.start()
);
Router.events.on("routeChangeComplete", () =>
  NProgress.done()
);
Router.events.on("routeChangeError", () =>
  NProgress.done()
);
  return (  
    <>
    <Head>
      {/* Open Graph meta tags */}
      <meta property="og:title" content="Jay Winebrenner Web Developer Portfolio" />
      <meta property="og:description" content="A website which showcases Jay Winebrenner development portfolio, work history and various development projects." />
      <meta property="og:image" content="https://www.jaywinebrenner.com/graph-image2.png" />
      <meta property="og:url" content="https://www.jaywinebrennner.com" />
      <meta property="og:type" content="website" />

      {/* Google Analytics tracking code */}
      <script
        async
        src={'https://www.googletagmanager.com/gtag/js?id=' + process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}');
          `,
        }}
      />
    </Head>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp

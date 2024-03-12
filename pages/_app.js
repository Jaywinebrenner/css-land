
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
      {/* <Head>
      <link src="favicon.ico" />
      </Head> */}
      <Component {...pageProps} />
    </>

  )
}

export default MyApp

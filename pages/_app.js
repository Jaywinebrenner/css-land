
import "../styles/app.scss";
import Router from 'next/router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

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

        <Component {...pageProps} />

  )
}

export default MyApp

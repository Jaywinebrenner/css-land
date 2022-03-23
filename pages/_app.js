
import "../styles/app.scss";
import { LoadingProvider } from "./context/LoadingContext";
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';

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
    <LoadingProvider>
        <Component {...pageProps} />
    </LoadingProvider>
  )
}

export default MyApp

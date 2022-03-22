
import "../styles/app.scss";
import { LoadingProvider } from "./context/LoadingContext";

function MyApp({ Component, pageProps }) {
  return (  
    <LoadingProvider>
        <Component {...pageProps} />
    </LoadingProvider>
  )
}

export default MyApp

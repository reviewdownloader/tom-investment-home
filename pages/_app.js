import { LanguageProvider } from "../intl/LanguageProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <Component {...pageProps} />
        </LanguageProvider>
    );
}

export default MyApp;

// This app component setup provides global styling
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
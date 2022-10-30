 import { AppProps } from 'next/app'
 import '../styles/globals.css'
 import 'tailwindcss/tailwind.css'
 
 function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />;
 }

 export default MyApp;
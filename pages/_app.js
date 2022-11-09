import { ThemeProvider } from "styled-components";
import { CSSReset } from "../Styles/CSSReset";
import { ColorModeContext } from '../src/components/ColorMode'
import { useContext }from "react";
import { ProviderWrapper } from "../src/components/ProviderWrapper";
import { theme } from '../Styles/themes'


function App({ Component, pageProps }){
    const contexto = useContext(ColorModeContext)

    return (
        <ThemeProvider theme={theme[contexto.mode] }>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default function _App(props){
    return(
        <ProviderWrapper>
            <App {...props} />
        </ProviderWrapper>
    )
}
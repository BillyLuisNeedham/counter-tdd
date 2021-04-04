import React from "react"
import "../styles/globals.css"
import { Provider } from "react-redux"
import { useStore } from "../redux/store"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  //extract redux state overrides from page props
  const { counterState } = pageProps

  //initialize redux store with overrides
  const store = useStore({ counterState })

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp

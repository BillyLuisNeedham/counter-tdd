import "../styles/globals.css"
import { Provider } from "react-redux"
import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }) {
  //extract redux state overrides from page props
  const { counterState } = pageProps

  //initialize redux store with overrides
  const store = useStore({ counterState })

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

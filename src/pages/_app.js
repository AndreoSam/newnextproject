import "@/styles/globals.css";
import Wrapper from "../../layout/wrapper/wrapper";
import { Provider } from "react-redux";
import store from "../../Redux/Store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />;
      </Wrapper>
    </Provider>
  )
}

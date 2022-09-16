import GlobalStyle from "./Styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Providers from "./Providers";

function App() {
  return (
    <>
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle />
        <Routes />
      </Providers>
    </>
  );
}

export default App;

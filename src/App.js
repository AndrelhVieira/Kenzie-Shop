import "./App.css";
import Routes from "./routes";

import { GlobalStyle } from "./providers/styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;

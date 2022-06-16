import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

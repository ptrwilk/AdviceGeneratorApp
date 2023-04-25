import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import AdviceGeneratorApp from "./Components/AdviceGeneratorApp";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 28,
    },
    fontFamily: "Manrope",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AdviceGeneratorApp />
      </div>
    </ThemeProvider>
  );
}

export default App;

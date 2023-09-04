import { Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
const theme = createTheme({
  // color palette
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  // font
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

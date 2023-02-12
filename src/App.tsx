import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Start from "./pages/Start";
import Agenda from "./pages/Agenda";
import AgendaProvider from "./context/AgendaContext";
import Timer from "./pages/Timer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AgendaProvider>
        <BrowserRouter>
          <Routes>    
              <Route path="/" element={<Start />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/timer" element={<Timer />} />
          </Routes>
        </BrowserRouter>
      </AgendaProvider>
    </ThemeProvider>
  )
}

export default App

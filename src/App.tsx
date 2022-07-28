import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Agenda from "./pages/Agenda";
import AgendaProvider from "./context/AgendaContext";

const App = () => {
  return (
    <AgendaProvider>
      <BrowserRouter>
        <Routes>    
            <Route path="/" element={<Start />} />
            <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </BrowserRouter>
    </AgendaProvider>
  )
}

export default App

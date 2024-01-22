import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import Dashboard from "./pages/dashboard";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

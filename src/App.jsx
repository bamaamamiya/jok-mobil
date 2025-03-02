import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pel from "./components/Pel/Pel";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Pel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

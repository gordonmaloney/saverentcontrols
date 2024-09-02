import Header from "./Components/Header";
import { Frame } from "./Pages/Frame";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Data} from "./Pages/Data";

function App() {
  return (
    <div className="bodyFilter">
        <Header />

        <Router>
      <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/data" element={<Data />} />

        </Routes>
    </Router>
    </div>
  );
}

export default App;


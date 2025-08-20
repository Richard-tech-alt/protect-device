import { Routes, Route } from "react-router-dom";
import InternetScanLayout from "./InternetScanLayout";
import WifiSecurityLayout from "./WiFiSecurityLayout";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/scanning" element={<InternetScanLayout/>} />
        <Route path="/" element={<WifiSecurityLayout/>} />
      </Routes>
    </div>
  );
}
export default App;

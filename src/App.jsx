import { Routes, Route } from "react-router-dom";
import InternetScanLayout from "./InternetScanLayout";
import WifiSecurityLayout from "./WiFiSecurityLayout";
import SecurityAlertLayout from "./SecurityAlert";
import ATTSecurityAlert from "./AtScan";
import AccountSecurityScan from "./StartScan";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/scanning" element={<InternetScanLayout/>} />
        <Route path="/" element={<WifiSecurityLayout/>} />
        <Route path="/alert" element={<SecurityAlertLayout/>}/>
        <Route path="/tt" element={<AccountSecurityScan/>}/>

      </Routes>
    </div>
  );
}
export default App;

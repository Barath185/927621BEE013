import './App.css';
import LoginSignup from './Components/LoginSignup';
import { Components,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="./Components/LoginSignup/LoginSignup" element={<LoginSignup />} />
      </Routes> */}
       <LoginSignup/>
    </div>
  );
}

export default App;

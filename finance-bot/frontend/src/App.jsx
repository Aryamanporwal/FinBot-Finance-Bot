import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
   
    </>
  );
};

export default App;
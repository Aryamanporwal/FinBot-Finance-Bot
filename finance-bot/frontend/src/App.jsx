import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import NamePrompt from "./components/NamePromt";
import TopicSelection from "./components/TopicSelection";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/name" element={<NamePrompt/>}/>
      <Route path="/preference" element={<TopicSelection/>}/>
    </Routes>
      
      
    </>
  );
};

export default App;
import './App.css';
import Login from "./screens/login";
import Comments from "./screens/comments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App(){
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
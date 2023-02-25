import React from "react";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HelloPage from "./pages/HelloPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<LoginPage/>}/>
          <Route path ="/hello" element={<HelloPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

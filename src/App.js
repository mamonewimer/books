import React from "react";
import Add from "./pages/Add.jsx";
import Books from "./pages/Books.jsx";
import Update from "./pages/Update.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return <div className="App">

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/update/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </>
    
    </div>;
}

export default App;

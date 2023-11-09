import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Controlled from "./users/Controlled";
import Uncontrolled from "./users/Uncontrolled";
import UsersContainer from "./users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/controlled" element={<Controlled />} />
        <Route path="/uncontrolled" element={<Uncontrolled />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

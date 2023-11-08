import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from "./users/Test1";
import UserDetail from "./users/UserDetail";
import UsersContainer from "./users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test1/*" element={<Test1 />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UsersContainer from "./users/UsersContainer";

export const Context = createContext("");

function App() {
  return (
    <Context.Provider value="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

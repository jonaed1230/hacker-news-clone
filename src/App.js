import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Page from "./Page";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Page} />
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import Quiz from "./component/Quiz";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import EnglishQuiz from "./component/EnglishQuiz";
import ArabicQuiz from "./component/ArabicQuiz copy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/english" element={<EnglishQuiz />} />
        <Route path="/arabic" element={<ArabicQuiz />} />

        <Route path="/quiz/:id" element={<Quiz />} />

        {/* <Route path="/arabic" component={ArabicQuiz} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Quiz from "./component/Quiz";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import EnglishQuiz from "./component/EnglishQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/start" element={<EnglishQuiz />} />

        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;

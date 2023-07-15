import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProblemForm from "./components/Admin/ProblemForm.jsx";
import LoginForm from "./components/Auth/LoginForm.jsx";
import SignupForm from "./components/Auth/SignupForm.jsx";
import ProblemsList from "./components/Admin/ProblemsList.jsx";
import Problem from "./components/Admin/Problem.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/problem/:problemId"} element={<Problem />} />
          <Route path={"/add-problem"} element={<ProblemForm />} />
          <Route path={"/problems"} element={<ProblemsList />} />
          <Route path={"/login"} element={<LoginForm />} />
          <Route path={"/signup"} element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

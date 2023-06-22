import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Pomodoro from "./pages/Pomodoro";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setLoginUser] = useState({});

  

  return (
    <>
      <Routes>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard setLoginUser={setLoginUser} />
            </ProtectedRoute>
          }
        />
        <Route path="clock" element={<Pomodoro />} />

        <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

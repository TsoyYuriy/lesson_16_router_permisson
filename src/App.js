import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Landing } from "./pages/Landing/Landing";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Analytics/Analytics";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
import { useState } from "react";
import { ProtectedRoute } from "./hooks/ProtectedRoute/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    setUser({
      id: 1,
      name: "Dias",
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <div className="header-wrap">
        <Header />
        {/* {
          user 
          ? 
          <button onClick={signOut}>Sign Out</button> 
          : 
          <button onClick={signIn}>Sign In</button>
        } */}

        <button onClick={user ? signOut : signIn}>
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

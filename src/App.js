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
      permmision: ["analycs"],
      role: ["user"],
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <div className="header-wrap">
        <Header />
        <button onClick={user ? signOut : signIn}>
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<Landing />} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.permmision.includes("analycs")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.role.includes("admin")}
            >
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

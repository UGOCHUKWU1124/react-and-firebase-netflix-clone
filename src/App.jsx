import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Player from "./pages/Player/Player";
import Login from "./pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const App = () => {
  const navigate = useNavigate();  // Hook to programmatically change routes
  const location = useLocation();  // Hook to know the current URL path

  useEffect(() => {    //✅ code that runs after the component renders

        // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        // If user is NOT logged in and not already on login page
      if (!user && location.pathname !== "/login") {
        navigate("/login");  // Redirect to login page

      // If user IS logged in and currently on login page
      } else if (user && location.pathname === "/login") {
        navigate("/");  // Redirect to homepage
      }

    // Else: stay on current route (like /player/:id)

    });

// Clean up listener when component unmounts
    return () => unsubscribe();
  }, [navigate, location]);  // Dependency array: re-run when navigate or location changes

  return (
    <div>
      <ToastContainer theme="dark" />  {/* Toast popup for notifications */}
      <Routes>
        <Route path="/" element={<Home />} />      {/* Home route */}
        <Route path="/login" element={<Login />} />   {/* Login route */}
        <Route path="/player/:id" element={<Player />} />  {/* Movie player route */}
      </Routes>
    </div>
  );
};

export default App;

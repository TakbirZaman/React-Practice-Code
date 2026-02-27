import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import UserProfile from "./pages/UserProfile";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Register</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
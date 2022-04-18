import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Main/Checkout/Checkout";
import Home from "./Pages/Main/Home/Home";
import Services from "./Pages/Main/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequiredAuth from "./Pages/Shared/RequiredAuth/RequiredAuth";
import Login from "./Pages/Shared/User/Login/Login";
import Register from "./Pages/Shared/User/Register/Register";
import ResetPassword from "./Pages/Shared/User/ResetPassword/ResetPassword";
import Blogs from "./Pages/Main/Blogs/Blogs";
import About from "./Pages/Main/About/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/reset" element={<ResetPassword></ResetPassword>} />
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout></Checkout>
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

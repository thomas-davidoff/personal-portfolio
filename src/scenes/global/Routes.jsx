import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Blogs from "../Blogs";
import Contact from "../Contact";
import NoPage from "../NoPage";

const MyRoutes = () => {
    return (
        <Routes>        
          <Route path="/" element={<Home />} />          
          <Route path="blogs" element={<Blogs />} />          
          <Route path="contact" element={<Contact />} />          
          <Route path="*" element={<NoPage />} />        
        </Routes>
    );
}

export default MyRoutes;

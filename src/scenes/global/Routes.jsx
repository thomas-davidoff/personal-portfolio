import { Route, Routes } from "react-router-dom";
import Home from "src/scenes/Home";
import Blogs from "src/scenes/Blogs";
import Contact from "src/scenes/Contact";
import NoPage from "src/scenes/NoPage";

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

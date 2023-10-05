import { Routes, Route } from "react-router-dom";

// App Components
import ScrollToTop from "./components/ScrollToTop";
import Announcement from "./components/announcement/Announcement";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Characters from "./pages/characters/Characters";
import King from "./pages/character/King";
import Solfire from "./pages/character/Solfire";
import Reflex from "./pages/character/Reflex";
import Blog from "./pages/blog/Blog";

// Data Components
import Post from "./pages/blog/post/Post";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <ScrollToTop />
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/King" element={<King />} />
        <Route path="characters/Solfire" element={<Solfire />} />
        <Route path="characters/Reflex" element={<Reflex />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
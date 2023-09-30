import { Routes, Route } from "react-router-dom"

// App Components
import ScrollToTop from "./components/ScrollToTop"
import Announcement from "./components/announcement/Announcement"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"

// Pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Characters from "./pages/characters/Characters"
import Character1 from "./pages/character/Character1"
import Character2 from "./pages/character/Character2"
import Character3 from "./pages/character/Character3"
import Blog from "./pages/blog/Blog"

// Data Components
import Post from "./pages/blog/post/Post"
import NotFound from "./components/NotFound"

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
        <Route path="character_1" element={<Character1 />} />
        <Route path="character_2" element={<Character2 />} />
        <Route path="character_3" element={<Character3 />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
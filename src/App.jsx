import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<p>Страница не найдена</p>} />
        </Routes>
      </Layout>
    </Router>
  );
}
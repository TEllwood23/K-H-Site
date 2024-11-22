import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Router setup */}
      <Router>
        <NavBar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

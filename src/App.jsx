// with CONTAINER 24/11/24

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Router>
        {/* Static NavBar */}
        <div className="mb-6 md:mb-0">
         <NavBar />
        </div>
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 max-w-screen-lg pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;




//Burger menuy sidebar

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="bg-background min-h-screen ">
//       <Router>
//         <navbar className="flex justify-center">
//         {/* Static NavBar */}
//           <NavBar />
//         </navbar>

//         {/* Main Content */}
//         <main className="pt-2 p-2 flex justify-center">
//           {/* Add padding to ensure content is not hidden behind a fixed navbar */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// }

// export default App;


//TESTING POINTER EVENTS 24/11/24

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="bg-background min-h-screen relative">
//       <Router>
//         {/* Main Content */}
//         <main className="relative z-0 p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>

//         {/* Overlay NavBar */}
//         <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
//           <NavBar />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


//Testing Layering 24/11/24

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="bg-background min-h-screen relative">
//       <Router>
//         {/* Main Content */}
//         <main className="relative z-0 p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>

//         {/* Overlay NavBar */}
//         <div className="absolute top-0 left-0 w-full z-10">
//           <NavBar />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


// //THIRD VERSION
// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="bg-background min-h-screen relative">
//       <Router>
//         {/* Static NavBar */}
//         <NavBar />
//         {/* Main Content with negative margin */}
//         <main className="p-4 -mt-[64px] md:mt-0 relative z-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// }

// export default App;



//SECOND VERSION
// src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="bg-background min-h-screen relative">
//       <Router>
//         {/* Main Content */}
//         <main className="relative z-10 p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>

//         {/* Overlay NavBar */}
//         <NavBar />
//       </Router>
//     </div>
//   );
// }

// export default App;

// //SAFE VERSION
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="bg-background min-h-screen">
//       <Router>
//         {/* Static NavBar */}
//         <NavBar />

//         {/* Main Content */}
//         <main className="pt-16 p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// }

// export default App;

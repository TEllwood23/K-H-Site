//Start of Parallax Scroller

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';

import Home from './pages/Home'; // Adjust the path as necessary


function App() {
  return (
    <div className="w-full">
      {/* Full-Page Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/K-H-Hero-1.png')",
            // height: 150 // Replace with your image
          }}
        ></div>

        {/* Top Header */}
        <div className="fixed top-0 left-0 w-full bg-black">
          <h1
            className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center py-4 font-sans"
          >
            Kieran Hodgson
          </h1>
        </div>

        {/* Bottom Header */}
        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center flex items-center justify-center py-10">
  <h2 className="text-2xl md:text-4xl font-bold font-sub">Actor - Writer - Comedian</h2>
</div>
      </section>

      {/* Spacer Section */}
      <section
        id="home"
        className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16"
      >
        <Home />
      </section>
    </div>
  );
}

export default App;






// SAFE OPTION 29/11/24 with CONTAINER (24/11/24 11:28)

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="bg-background min-h-screen flex flex-col">
//       <Router>
//         {/* Static NavBar */}
//         <div className="mb-6 md:mb-0">
//          <NavBar />
//         </div>
//         {/* Main Content */}
//         <main className="flex-grow container mx-auto px-4 max-w-screen-lg pt-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//       </Router>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;




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

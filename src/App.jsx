//Start of Parallax Scroller

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NavBar from './components/NavBar';

// VERSION WITH SNAP SCROLLER

// import Home from './pages/Home'; // Adjust the path as necessary
// import About from './pages/About'; // Adjust the path as necessary
// import LiveComedy from './pages/LiveComedy';
// import TV from './pages/TV';
// import Videos from './pages/Videos';
// import Tickets from './pages/Tickets';
// import Contact from './pages/Contact';
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
//       {/* Full-Page Hero Section */}
//       <section className="relative h-screen">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/images/K-H-Hero-1.png')",
//           }}
//         ></div>

//         {/* Top Header */}
//         <div className="fixed top-0 md:pt-4 left-0 w-full bg-black">
//           <h1 className="text-white text-6xl md:text-6xl lg:text-6xl font-bold text-center py-4 font-sans">
//             Kieran Hodgson
//           </h1>
//         </div>

//         {/* Bottom Header */}
//         <div className="absolute bottom-8 md:bottom-0 left-0 w-full bg-black text-white text-center flex items-center justify-center py-10">
//           <h2 className="text-3xl md:text-4xl font-bold font-sub">
//             Actor - Writer - Comedian
//           </h2>
//         </div>
//       </section>

//       {/* Spacer Section (Snap Enabled) */}
//       <section
//         id="home"
//         className="min-h-screen bg-background text-textPrimary flex items-center justify-center py-16 snap-start"
//       >
//         <Home />
//       </section>

//       {/* Parallax Section for About */}
//       <section
//         className="relative h-screen"
//         style={{
//           backgroundImage: "url('/images/KH_Big_Scotland_2.jpeg')",
//         }}
//       ></section>

//       {/* About Section (Snap Enabled) */}
//       <section
//         id="about"
//         className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 snap-start"
//       >
//         <About />
//       </section>

//       {/* Parallax Section for LiveComedy */}
//       <section
//         className="relative h-screen"
//         style={{
//           backgroundImage: "url('/images/Maestro_Image.jpg')",
//         }}
//       ></section>

//       {/* LiveComedy Section (Snap Enabled) */}
//       <section
//         id="live comedy"
//         className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 snap-start"
//       >
//         <LiveComedy />
//       </section>

//       {/* Parallax Section for TV */}
//       <section
//         className="relative h-screen"
//         style={{
//           backgroundImage: "url('/images/Kieran_Navbar_Image.webp')",
//         }}
//       ></section>

//       {/* TV Section (Snap Enabled) */}
//       <section
//         id="tv"
//         className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-20 snap-start"
//       >
//         <TV />
//       </section>

//       {/* Parallax Section for Videos */}
//       <section
//         className="relative h-screen"
//         style={{
//           backgroundImage: "url('/images/Kieran_Prince_Andrew.jpg')",
//         }}
//       ></section>

//       {/* Videos Section (Snap Enabled) */}
//       <section
//         id="videos"
//         className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-20 snap-start"
//       >
//         <Videos />
//       </section>

//       {/* Parallax Section for Tickets */}
//       <section
//         className="relative h-screen"
//         style={{
//           backgroundImage: "url('/images/Kieran_Lance.jpg')",
//         }}
//       ></section>

//       {/* Tickets Section (Snap Enabled) */}
//       <section
//         id="tickets"
//         className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-20 snap-start"
//       >
//         <Tickets />
//       </section>

//       {/* Parallax Section for Contact */}
//       <section
//         className="relative h-screen"
//         style={{
//           backgroundImage: "url('/images/Kieran_Headshot_2.jpg')",
//         }}
//       ></section>

//       {/* Contact Section (Snap Enabled) */}
//       <section
//         id="contact"
//         className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-20 snap-start"
//       >
//         <Contact />
//       </section>

//       {/* Footer */}
//       <div className="w-full">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;


//SAFE VERSION 04/12/2024 18:21

import Sidebar from "./components/Sidebar"
import Home from './pages/Home'; // Adjust the path as necessary
import About from './pages/About'; // Adjust the path as necessary
import LiveComedy from './pages/LiveComedy';
import TV from './pages/TV';
import Videos from './pages/Videos';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import Footer from './components/Footer'


function App() {
  return (
    <div className="w-full">

      <Sidebar />


      {/* Full-Page Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/K-H-Hero-1.png')",
  }}>

    </div>
        {/* Top Header */}
        <div className="fixed top-0 md:pt-4 left-0 w-full bg-black">
          <h1
            className="text-white text-3xl md:text-6xl lg:text-6xl font-bold text-center py-4 font-sans"
          >
            Kieran Hodgson
          </h1>
        </div>

        {/* Bottom Header */}
        <div className="absolute bottom-8 md:bottom-0 left-0 w-full bg-black text-white text-center flex items-center justify-center py-10">
          <h2 className="text-3xl md:text-4xl font-bold font-sub">Actor - Writer - Comedian</h2>
        </div>
      </section>

      {/* Spacer Section */}
      <section
        id="home"
        className="min-h-screen bg-background text-textPrimary flex items-center justify-center py-16"
      >
        <Home />
      </section>

        {/* Parallax Section for About */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/KH_Big_Scotland_2.jpeg')", // Replace with your new image
          }}
        ></div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16"
      >
        <About />
      </section>

      {/* Parallax Section for LiveComedy */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/Maestro_Image.jpg')", // Replace with your new image
          }}
        ></div>
      </section>

      {/* LiveComedy Section */}
      <section
        id="comedy"
        className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16"
      >
        <LiveComedy />
      </section>

       {/* Parallax Section for TV */}
       <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/Kieran_Navbar_Image.webp')", // Replace with your new image
          }}
        ></div>
      </section>

      {/* TV Section */}
      <section
        id="tv"
        // className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-20"
        className="min-h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-16"
      >
        <TV />
      </section>

       {/* Parallax Section for Videos */}
       <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/Kieran_Prince_Andrew.jpg')", // Replace with your new image
          }}
        ></div>
      </section>

      {/* Videos Section */}
      <section
        id="videos"
        // className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16"
        className="min-h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-16"
      >
        <Videos />
      </section>

      {/* Parallax Section for Tickets */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/Kieran_Lance.jpg')", // Replace with your new image
          }}
        ></div>
      </section>

       {/* Tickets */}
       <section
        id="tickets"
        // className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16"
        className="min-h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-16"
      >
        <Tickets />
      </section>

        {/* Parallax Section for Contact */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/Kieran_Headshot_2.jpg')", // Replace with your new image
          }}
        ></div>
      </section>

       {/* Contact */}
      <section
        id="tickets"
        // className="h-screen bg-background text-textPrimary flex items-center justify-center pt-16"
        className="min-h-screen bg-background text-textPrimary flex items-center justify-center pt-16 pb-16"
      >
        <Contact />
      </section>

      <div className="w-full">
      {/* Other components */}
      <Footer />
    </div>

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




// Burger menuy sidebar

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

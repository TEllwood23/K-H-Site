import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-4 z-50 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none hover:bg-gray-800 transition"
      >
        <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <nav className="mt-16 space-y-6">
          <a
            onClick={() => handleNavigation("reviews")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Reviews
          </a>
          <a
            onClick={() => handleNavigation("about")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            About
          </a>
          <a
            onClick={() => handleNavigation("comedy")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Live Comedy
          </a>
          <a
            onClick={() => handleNavigation("tv")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            TV
          </a>
          <a
            onClick={() => handleNavigation("videos")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Videos
          </a>
          <a
            onClick={() => handleNavigation("tickets")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Tickets
          </a>
          <a
            onClick={() => handleNavigation("contact")}
            className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}

export default Sidebar;


// VERSION WITH CLOSING WHEN CLICKING ANYWHERE ON SCREEN

// import { useState } from "react";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavigation = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false); // Close sidebar after navigation
//   };

//   return (
//     <>
//       {/* Burger Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-2 left-4 z-50 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none hover:bg-gray-800 transition"
//       >
//         <span className="text-2xl">
//           {isOpen ? "✖" : "☰"} {/* Changes icon dynamically */}
//         </span>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full z-40 bg-black text-white shadow-lg transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-500`}
//       >
//         <nav className="mt-16 space-y-6">
//           <a
//             onClick={() => handleNavigation("home")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Home
//           </a>
//           <a
//             onClick={() => handleNavigation("about")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             About
//           </a>
//           <a
//             onClick={() => handleNavigation("comedy")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Live Comedy
//           </a>
//           <a
//             onClick={() => handleNavigation("tv")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             TV
//           </a>
//           <a
//             onClick={() => handleNavigation("videos")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Videos
//           </a>
//           <a
//             onClick={() => handleNavigation("tickets")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Tickets
//           </a>
//           <a
//             onClick={() => handleNavigation("contact")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Sidebar;


//SAFE VERSION 5/12/2024 13:51

// import { useState } from "react";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavigation = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false); // Close sidebar after navigation
//   };

//   return (
//     <>
//       {/* Burger Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-2 left-4 z-50 bg-black text-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none hover:bg-gray-800 transition"
//       >
//         <span className="text-3xl">&#9776;</span>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full z-40 bg-black text-white shadow-lg transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-500`}
//       >
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-4 right-4 text-xl focus:outline-none hover:text-gray-400"
//         >
//           &times;
//         </button>
//         <nav className="mt-16 space-y-6">
//           <a
//             onClick={() => handleNavigation("home")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Home
//           </a>
//           <a
//             onClick={() => handleNavigation("about")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             About
//           </a>
//           <a
//             onClick={() => handleNavigation("comedy")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Live Comedy
//           </a>
//           <a
//             onClick={() => handleNavigation("tv")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             TV
//           </a>
//           <a
//             onClick={() => handleNavigation("videos")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Videos
//           </a>
//           <a
//             onClick={() => handleNavigation("tickets")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Tickets
//           </a>
//           <a
//             onClick={() => handleNavigation("contact")}
//             className="block px-8 py-2 font-sans text-lg hover:text-blue-500 cursor-pointer transition"
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

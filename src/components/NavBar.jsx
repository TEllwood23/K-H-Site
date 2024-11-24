// Popping out from side 24/11/24

import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // For toggling the menu

  // Toggle the dropdown menu
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      {/* Full Navbar for Large Screens */}
      <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary">
        <ul className="flex gap-10">
          <li>
            <a href="#about" className="text-border text-6xl font-sans">About</a>
          </li>
          <li>
            <a href="#live" className="text-border text-border-default text-6xl font-sans">Live</a>
          </li>
          <li>
            <a href="#tv" className="text-border text-6xl font-sans">TV</a>
          </li>
          <li>
            <a href="#videos" className="text-border text-6xl font-sans">Videos</a>
          </li>
        </ul>
      </nav>

      {/* Burger Menu for Small Screens */}
      <div className="md:hidden fixed top-4 left-4">
        {/* Burger Icon */}
        <button
          onClick={handleClick}
          className="flex flex-col gap-1 cursor-pointer"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        {/* Slide-Out Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
        >
          <button
            onClick={handleClick}
            className="absolute top-4 right-4 text-textPrimary text-lg"
          >
            Close
          </button>
          <ul className="p-4">
            <li className="mb-4">
              <a href="#about" className="text-textPrimary text-lg font-sans">About</a>
            </li>
            <li className="mb-4">
              <a href="#live" className="text-textPrimary text-lg">Live</a>
            </li>
            <li className="mb-4">
              <a href="#tv" className="text-textPrimary text-lg">TV</a>
            </li>
            <li className="mb-4">
              <a href="#videos" className="text-textPrimary text-lg">Videos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;



//POINTRER EVENTS COMBINATION 24/11

// import { useState } from 'react';

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false); // For the burger menu
//   const [iconPosition, setIconPosition] = useState({ x: 50, y: 50 }); // Burger icon position
//   const [isDragging, setIsDragging] = useState(false); // Dragging state

//   // Toggle the dropdown menu
//   const handleClick = () => {
//     if (!isDragging) {
//       setIsOpen(!isOpen); // Only toggle menu if not dragging
//     }
//   };

//   // Start dragging
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     e.preventDefault(); // Prevent default browser behavior (e.g., text selection)
//   };

//   // Handle drag movement
//   const handleMouseMove = (e) => {
//     if (!isDragging) return; // Only move if dragging is true

//     setIconPosition({
//       x: e.clientX - 25, // Aligns the icon's center to the cursor
//       y: e.clientY - 25,
//     });
//   };

//   // Stop dragging
//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false); // Stops dragging
//     }
//   };

//   return (
//     <div
//       className="relative w-full min-h-screen pointer-events-none"
//       onMouseMove={handleMouseMove} // Handles drag events
//       onMouseUp={handleMouseUp} // Ensures drag state resets when mouse is released
//     >
//       {/* Full Navbar for Large Screens */}
//       <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary pointer-events-auto">
//         <ul className="flex gap-10">
//           <li>
//             <a href="#about" className="text-border text-6xl font-sans">About</a>
//           </li>
//           <li>
//             <a href="#live" className="text-border text-border-default text-6xl font-sans">Live</a>
//           </li>
//           <li>
//             <a href="#tv" className="text-border text-6xl font-sans">TV</a>
//           </li>
//           <li>
//             <a href="#videos" className="text-border text-6xl font-sans">Videos</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Static Contact Section */}
//       <div className="absolute top-4 right-4 flex items-center gap-4 pointer-events-auto">
//         <span className="font-sans text-border-tertiary">Contact at</span>
//         <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
//       </div>

//       {/* Burger Menu for Small Screens */}
//       <div className="md:hidden pointer-events-none">
//         {/* Draggable Burger Icon */}
//         <button
//           onClick={handleClick}
//           onMouseDown={handleMouseDown}
//           style={{
//             position: 'absolute',
//             top: `${iconPosition.y}px`,
//             left: `${iconPosition.x}px`,
//             cursor: 'move',
//             zIndex: 30, // Ensure it appears above all elements
//           }}
//           className="flex flex-col gap-1 pointer-events-auto"
//         >
//           <span className="block h-0.5 w-6 bg-white" />
//           <span className="block h-0.5 w-6 bg-white" />
//           <span className="block h-0.5 w-6 bg-white" />
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <ul
//             style={{ top: `${iconPosition.y + 40}px`, left: `${iconPosition.x}px` }}
//             className="absolute bg-background p-4 rounded-md shadow-lg flex flex-col gap-y-2 pointer-events-auto"
//           >
//             <li>
//               <a href="#about" className="text-textPrimary text-lg font-sans">About</a>
//             </li>
//             <li>
//               <a href="#live" className="text-textPrimary text-lg">Live</a>
//             </li>
//             <li>
//               <a href="#tv" className="text-textPrimary text-lg">TV</a>
//             </li>
//             <li>
//               <a href="#videos" className="text-textPrimary text-lg">Videos</a>
//             </li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;



// // POINTER EVENTS TES 24/11

// import { useState } from 'react';

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false); // For the burger menu
//   const [iconPosition, setIconPosition] = useState({ x: 50, y: 50 }); // Burger icon position
//   const [isDragging, setIsDragging] = useState(false); // Dragging state

//   // Toggle the dropdown menu
//   const handleClick = () => {
//     if (!isDragging) {
//       setIsOpen(!isOpen); // Only toggle menu if not dragging
//     }
//   };

//   // Start dragging
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     e.preventDefault(); // Prevent default behavior
//   };

//   // Handle drag movement
//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     setIconPosition({
//       x: e.clientX - 25, // Adjust for center alignment
//       y: e.clientY - 25, // Adjust for center alignment
//     });
//   };

//   // Stop dragging
//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false);
//     }
//   };

//   return (
//     <div
//       className="relative w-full min-h-screen pointer-events-none" // Ensure the entire container does not block clicks
//       onMouseMove={handleMouseMove} // Handles drag events
//       onMouseUp={handleMouseUp} // Ensures drag state resets when mouse is released
//     >
//       {/* Full Navbar for Large Screens */}
//       <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary pointer-events-auto">
//         <ul className="flex gap-10">
//           <li>
//             <a href="#about" className="text-border text-6xl font-sans">About</a>
//           </li>
//           <li>
//             <a href="#live" className="text-border text-border-default text-6xl font-sans">Live</a>
//           </li>
//           <li>
//             <a href="#tv" className="text-border text-6xl font-sans">TV</a>
//           </li>
//           <li>
//             <a href="#videos" className="text-border text-6xl font-sans">Videos</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Static Contact Section */}
//       <div className="absolute top-4 right-4 flex items-center gap-4 pointer-events-auto">
//         <span className="font-sans text-border-tertiary">Contact at</span>
//         <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
//       </div>

//       {/* Burger Menu for Small Screens */}
//       <div className="md:hidden pointer-events-none">
//         {/* Draggable Burger Icon */}
//         <button
//           onClick={handleClick}
//           onMouseDown={handleMouseDown}
//           style={{
//             position: 'absolute',
//             top: `${iconPosition.y}px`,
//             left: `${iconPosition.x}px`,
//             cursor: 'move',
//             zIndex: 30, // Ensure it appears above all elements
//           }}
//           className="flex flex-col gap-1 pointer-events-auto"
//         >
//           <span className="block h-0.5 w-6 bg-white" />
//           <span className="block h-0.5 w-6 bg-white" />
//           <span className="block h-0.5 w-6 bg-white" />
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <ul
//             style={{ top: `${iconPosition.y + 40}px`, left: `${iconPosition.x}px` }}
//             className="absolute bg-background p-4 rounded-md shadow-lg flex flex-col gap-y-2 pointer-events-auto"
//           >
//             <li>
//               <a href="#about" className="text-textPrimary text-lg font-sans">About</a>
//             </li>
//             <li>
//               <a href="#live" className="text-textPrimary text-lg">Live</a>
//             </li>
//             <li>
//               <a href="#tv" className="text-textPrimary text-lg">TV</a>
//             </li>
//             <li>
//               <a href="#videos" className="text-textPrimary text-lg">Videos</a>
//             </li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;



// //THIRD VERSION
// // src/components/NavBar.jsx
// import React, { useState, useRef } from 'react';

// function NavBar() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const burgerRef = useRef(null);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleDrag = (e) => {
//     e.preventDefault();
//     const { clientX, clientY } = e;
//     const burger = burgerRef.current;
//     if (burger) {
//       burger.style.left = `${clientX - burger.offsetWidth / 2}px`;
//       burger.style.top = `${clientY - burger.offsetHeight / 2}px`;
//     }
//   };

//   return (
//     <div
//       className={`absolute top-0 left-0 w-full ${
//         isMobile ? 'h-full' : 'h-[64px]'
//       }`}
//       style={{ zIndex: 1 }}
//     >
//       {isMobile ? (
//         <div
//           className="absolute inset-0"
//           onDragOver={(e) => e.preventDefault()}
//           onDrop={handleDrag}
//         >
//           <button
//             ref={burgerRef}
//             draggable
//             className="absolute bg-primary p-4 rounded top-4 left-4"
//             style={{ cursor: 'grab' }}
//           >
//             {/* Burger Icon */}
//             <div className="w-8 h-1 bg-white mb-1"></div>
//             <div className="w-8 h-1 bg-white mb-1"></div>
//             <div className="w-8 h-1 bg-white"></div>
//           </button>
//         </div>
//       ) : (
//         <nav className="fixed top-0 left-0 w-full h-[64px] bg-primary flex items-center px-4 z-10">
//           {/* Desktop Navigation */}
//           <ul className="flex space-x-4 text-white">
//             <li>Home</li>
//             <li>About</li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }

// export default NavBar;



//SECOND VERSION
// src/components/NavBar.jsx
// import React, { useState, useRef } from 'react';

// function NavBar() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const burgerRef = useRef(null);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleDrag = (e) => {
//     e.preventDefault();
//     const { clientX, clientY } = e;
//     const burger = burgerRef.current;
//     if (burger) {
//       burger.style.left = `${clientX - burger.offsetWidth / 2}px`;
//       burger.style.top = `${clientY - burger.offsetHeight / 2}px`;
//     }
//   };

//   return (
//     <div
//       className={`absolute top-0 left-0 w-full h-full pointer-events-none ${
//         isMobile ? '' : 'h-[64px]'
//       }`}
//       style={{ zIndex: 1 }}
//     >
//       {isMobile ? (
//         <div
//           className="absolute inset-0 pointer-events-auto"
//           onDragOver={(e) => e.preventDefault()}
//           onDrop={handleDrag}
//         >
//           <button
//             ref={burgerRef}
//             draggable
//             className="absolute bg-primary p-4 rounded top-4 left-4"
//             style={{ cursor: 'grab' }}
//           >
//             {/* Burger Icon */}
//             <div className="w-8 h-1 bg-white mb-1"></div>
//             <div className="w-8 h-1 bg-white mb-1"></div>
//             <div className="w-8 h-1 bg-white"></div>
//           </button>
//         </div>
//       ) : (
//         <nav className="fixed top-0 left-0 w-full h-[64px] bg-primary flex items-center px-4 z-10">
//           {/* Desktop Navigation */}
//           <ul className="flex space-x-4 text-white">
//             <li>Home</li>
//             <li>About</li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }

// export default NavBar;

//SAFE VERSION
// import { useState } from 'react';

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false); // For the burger menu
//   const [iconPosition, setIconPosition] = useState({ x: 50, y: 50 }); // Burger icon position
//   const [isDragging, setIsDragging] = useState(false); // Dragging state

//   // Toggle the dropdown menu
//   const handleClick = () => {
//     if (!isDragging) {
//       setIsOpen(!isOpen); // Only toggle menu if not dragging
//     }
//   };

//   // Start dragging
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     e.preventDefault(); // Prevent default behavior
//   };

//   // Handle drag movement
//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     setIconPosition({
//       x: e.clientX - 25, // Adjust for center alignment
//       y: e.clientY - 25, // Adjust for center alignment
//     });
//   };

//   // Stop dragging
//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false);
//     }
//   };

//   return (
//     <div
//       className="relative w-full min-h-screen" // Ensures the container spans the full height
//       onMouseMove={handleMouseMove} // Handles drag events
//       onMouseUp={handleMouseUp} // Ensures drag state resets when mouse is released
//     >
//       {/* Full Navbar for Large Screens */}
//       <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary">
//         <ul className="flex gap-10">
//           <li><a href="#about" className="text-border text-6xl font-sans">About</a></li>
//           <li><a href="#live" className="text-border text-border-default text-6xl font-sans">Live</a></li>
//           <li><a href="#tv" className="text-border text-6xl font-sans">TV</a></li>
//           <li><a href="#videos" className="text-border text-6xl font-sans">Videos</a></li>
//         </ul>
//       </nav>

//       {/* Static Contact Section */}
//       <div className="absolute top-4 right-4 flex items-center gap-4">
//         <span className="font-sans text-border-tertiary">Contact at</span>
//         <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
//       </div>

//       {/* Burger Menu for Small Screens */}
//       <div className="md:hidden">
//         {/* Draggable Burger Icon */}
//         <button
//           onClick={handleClick}
//           onMouseDown={handleMouseDown}
//           style={{
//             position: 'absolute',
//             top: `${iconPosition.y}px`,
//             left: `${iconPosition.x}px`,
//             cursor: 'move',
//             zIndex: 30, // Ensure it appears above all elements
//           }}
//           className="flex flex-col gap-1"
//         >
//           <span className="block h-0.5 w-6 bg-white" />
//           <span className="block h-0.5 w-6 bg-white" />
//           <span className="block h-0.5 w-6 bg-white" />
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <ul
//             style={{ top: `${iconPosition.y + 40}px`, left: `${iconPosition.x}px` }}
//             className="absolute bg-background p-4 rounded-md shadow-lg flex flex-col gap-y-2"
//           >
//             <li><a href="#about" className="text-textPrimary text-lg font-sans">About</a></li>
//             <li><a href="#live" className="text-textPrimary text-lg">Live</a></li>
//             <li><a href="#tv" className="text-textPrimary text-lg">TV</a></li>
//             <li><a href="#videos" className="text-textPrimary text-lg">Videos</a></li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;

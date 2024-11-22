import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // For the burger menu
  const [iconPosition, setIconPosition] = useState({ x: 50, y: 50 }); // Burger icon position
  const [isDragging, setIsDragging] = useState(false); // Dragging state

  // Toggle the dropdown menu
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault(); // Prevent default behavior
  };

  // Handle drag movement
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setIconPosition({
      x: e.clientX - 25, // Adjust for center alignment
      y: e.clientY - 25, // Adjust for center alignment
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative w-full min-h-screen" // Ensures the container spans the full height
      onMouseMove={handleMouseMove} // Handles drag events
      onMouseUp={handleMouseUp} // Ensures drag state resets when mouse is released
    >
      {/* Full Navbar for Large Screens */}
      <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary">
        <ul className="flex gap-10">
          <li><a href="#about" className="text-border text-6xl font-sans">About</a></li>
          <li><a href="#live" className="text-border text-border-default text-6xl font-sans">Live</a></li>
          <li><a href="#tv" className="text-border text-6xl font-sans">TV</a></li>
          <li><a href="#videos" className="text-border text-6xl font-sans">Videos</a></li>
        </ul>
      </nav>

      <div className="absolute top-4 right-4 flex items-center gap-4">
       <span className="font-sans">Contact at</span>
       <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
      </div>

      {/* Burger Menu for Small Screens */}
      <div className="md:hidden">
        {/* Draggable Burger Icon */}
        <button
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          style={{
            position: 'absolute',
            top: `${iconPosition.y}px`,
            left: `${iconPosition.x}px`,
            cursor: 'move',
          }}
          className="flex flex-col gap-1"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul
            style={{ top: `${iconPosition.y + 40}px`, left: `${iconPosition.x}px` }}
            className="absolute bg-background p-4 rounded-md shadow-lg flex flex-col gap-y-2"
          >
            <li><a href="#about" className="text-textPrimary text-lg font-sans">About</a></li>
            <li><a href="#live" className="text-textPrimary text-lg">Live</a></li>
            <li><a href="#tv" className="text-textPrimary text-lg">TV</a></li>
            <li><a href="#videos" className="text-textPrimary text-lg">Videos</a></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;


// import { useState } from 'react';

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false); // For the burger menu
//   const [iconPosition, setIconPosition] = useState({ x: 50, y: 50 }); // Burger icon position
//   const [isDragging, setIsDragging] = useState(false); // Dragging state

//   // Toggle the dropdown menu
//   const handleClick = () => {
//     setIsOpen(!isOpen);
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
//     setIsDragging(false);
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
//           <li><a href="#about" className="text-5xl font-sans">About</a></li>
//           <li><a href="#live" className="text-5xl font-sans">Live</a></li>
//           <li><a href="#tv" className="text-5xl font-sans">TV</a></li>
//           <li><a href="#videos" className="text-5xl font-sans">Videos</a></li>
//         </ul>
//         <div className="flex items-center gap-4">
//           <span className="font-sans">Contact at</span>
//           <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
//         </div>
//       </nav>

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
//             <li><a href="#about" className="text-lg">About</a></li>
//             <li><a href="#live" className="text-lg">Live</a></li>
//             <li><a href="#tv" className="text-lg">TV</a></li>
//             <li><a href="#videos" className="text-lg">Videos</a></li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;

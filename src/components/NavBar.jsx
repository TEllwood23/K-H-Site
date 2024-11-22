import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      className="relative w-full h-screen" // Container for the navbar
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Full Navbar for Large Screens */}
      <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary">
        <ul className="flex gap-10">
          <li><Link to="/about" className="text-5xl font-sans">About</Link></li>
          <li><a href="#live" className="text-5xl font-sans">Live</a></li>
          <li><a href="#tv" className="text-5xl font-sans">TV</a></li>
          <li><a href="#videos" className="text-5xl font-sans">Videos</a></li>
        </ul>
      </nav>

      {/* Contact Section (Always Static) */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <span className="font-sans text-3xl">Contact at</span>
        <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
      </div>

      {/* Burger Menu for Small Screens */}
      <div className="md:hidden">
        {/* Draggable Burger Icon */}
        <button
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          style={{ top: iconPosition.y, left: iconPosition.x }}
          className="absolute flex flex-col gap-1 cursor-move"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul
            style={{ top: iconPosition.y + 40, left: iconPosition.x }}
            className="absolute bg-background p-4 rounded-md shadow-lg flex flex-col gap-y-2">
            <li><Link to="/about" className="text-3xl font-sans">About</Link></li>
            <li><a href="#live" className="text-3xl font-sans">Live</a></li>
            <li><a href="#tv" className="text-3xl">TV</a></li>
            <li><a href="#videos" className="text-3xl">Videos</a></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;





// function NavBar() {
//   return (
//     <header className="text-textPrimary font-sans bg-background px-1 py-2 text-xl md:text-4xl lg:text-5xl">
//       <nav className="flex justify-between items-center">
//         {/* Left links */}
//         <ul className="flex justify-between w-full px-10">
//           <li>Home</li>
//           <li>About</li>
//           <li>Live</li>
//           <li>TV</li>
//           <li>Videos</li>
//         </ul>

//         {/* Right section */}
//         <div className="flex flex-col items-end gap-y-2">
//           <ul>Contact at</ul>
//           <ul>
//             <img src="/path-to-your-image.png" alt="Contact Icon" className="w-8 h-8 cursor-pointer" />
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;

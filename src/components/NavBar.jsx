import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the burger menu is open

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <header className="bg-background text-textPrimary px-4 py-2">
      <nav className="flex justify-between items-center">
        {/* Full Links - Hidden on small screens */}
        <ul className="hidden md:flex gap-x-8 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Live</li>
          <li className="hover:text-gray-300 cursor-pointer">TV</li>
          <li className="hover:text-gray-300 cursor-pointer">Videos</li>
        </ul>

        {/* Right Section (e.g., Contact, Image) */}
        <div className="hidden md:flex flex-col items-end gap-y-2">
          <span>Contact at</span>
          <img
            src="/path-to-your-image.png"
            alt="Contact Icon"
            className="w-8 h-8 cursor-pointer"
          />
        </div>

        {/* Burger Menu - Visible on small screens */}
        <button
          onClick={handleClick}
          className="md:hidden flex flex-col justify-center items-center"
          aria-label="Toggle Menu"
        >
          <span
            className={`bg-textPrimary block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-textPrimary block h-1 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-textPrimary block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
        </button>
      </nav>

      {/* Dropdown Menu for Burger - Only visible if isOpen */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-y-4 mt-4 text-lg">
          <span className="hover:text-gray-300 cursor-pointer">About</span>
          <span className="hover:text-gray-300 cursor-pointer">Live</span>
          <span className="hover:text-gray-300 cursor-pointer">TV</span>
          <span className="hover:text-gray-300 cursor-pointer">Videos</span>
          <span className="hover:text-gray-300 cursor-pointer">Contact at</span>
        </div>
      )}
    </header>
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

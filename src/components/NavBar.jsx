// // CROSS

// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// <div className="relative w-full">
//   {/* Large Screen Navbar */}
//   <nav className="hidden md:flex justify-evenly items-center p-4 bg-background text-textPrimary">
//     <ul className="flex w-full max-w-screen-xl mx-auto gap-10 justify-between">
//       {filteredLinks.map((link) => (
//         <li key={link.path}>
//           <Link to={link.path} className="text-textPrimary text-lg md:text-3xl font-sans">
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </nav>

//   {/* Burger Menu for Small Screens */}
//   <div className="md:hidden fixed top-4 left-4 z-50">
//     {/* Burger/Cross Icon */}
//     <button
//       onClick={handleClick}
//       aria-expanded={isOpen}
//       aria-label={isOpen ? 'Close menu' : 'Open menu'}
//       className="relative w-8 h-8 flex items-center justify-center cursor-pointer z-50"
//     >
//       {/* Top Bar */}
//       <span
//         className={`absolute block h-1 w-6 bg-white transition-all duration-300 ${
//           isOpen ? 'rotate-45 translate-y-1' : '-translate-y-2'
//         }`}
//       />
//       {/* Middle Bar */}
//       <span
//         className={`absolute block h-1 w-6 bg-white transition-all duration-300 ${
//           isOpen ? 'opacity-0' : 'opacity-100'
//         }`}
//       />
//       {/* Bottom Bar */}
//       <span
//         className={`absolute block h-1 w-6 bg-white transition-all duration-300 ${
//           isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-2'
//         }`}
//       />
//     </button>

//     {/* Slide-Out Menu */}
//     {isOpen && (
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform z-40 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300`}
//       >
//         <ul className="mt-10 space-y-4 text-center">
//           {filteredLinks.map((link) => (
//             <li key={link.path}>
//               <Link
//                 to={link.path}
//                 onClick={handleClick} // Close menu when a link is clicked
//                 className="text-textPrimary text-lg font-sans"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
// </div>





//VERTICAL LINE

// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false); // For toggling the menu
//   const location = useLocation(); // Get the current URL path

//   // Toggle the dropdown menu
//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   // Define navigation links
//   const links = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/live', label: 'Live' },
//     { path: '/tv', label: 'TV' },
//     { path: '/videos', label: 'Videos' },
//   ];

//   // Filter out the link for the current page
//   const filteredLinks = links.filter((link) => link.path !== location.pathname);

//   return (
//     <div className="relative w-full">
//       {/* Full Navbar for Large Screens */}
//       <nav className="hidden md:flex justify-evenly items-center p-4 bg-background text-textPrimary text-border-primary">
//         <ul className="flex w-full max-w-screen-xl mx-auto gap-10 justify-between">
//           {filteredLinks.map((link) => (
//             <li key={link.path}>
//               <Link to={link.path} className="text-textPrimary text-lg md:text-3xl font-sans">
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Burger Menu for Small Screens */}
//       <div className="md:hidden fixed top-4 left-4">
//         {/* Burger Icon */}
//         {!isOpen && (
//           <button
//             onClick={handleClick}
//             aria-expanded={isOpen}
//             aria-label="Open menu"
//             className="flex flex-col gap-1 cursor-pointer"
//           >
//             {/* Horizontal lines for open menu */}
//             <span className="block h-0.5 w-6 bg-white" />
//             <span className="block h-0.5 w-6 bg-white" />
//             <span className="block h-0.5 w-6 bg-white" />
//           </button>
//         )}

//         {/* Slide-Out Menu */}
//         {isOpen && (
//           <div
//             className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform translate-x-0 transition-transform duration-300`}
//             role="menu"
//             aria-hidden={!isOpen}
//           >
//             {/* Close Icon Centered Above Nav Links */}
//             <button
//               onClick={handleClick}
//               aria-label="Close menu"
//               className="flex justify-center items-center gap-1 py-4 cursor-pointer mx-auto fixed left-0 ml-2"
//             >
//               {/* Vertical lines for close menu */}
//               <div></div>
//               <span className="block h-6 w-0.5 bg-white" />
//               <span className="block h-6 w-0.5 bg-white" />
//               <span className="block h-6 w-0.5 bg-white" />
//             </button>

//             {/* Nav Links */}
//             <ul className="mt-6 space-y-4 text-center">
//               {filteredLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={handleClick} // Close menu when a link is clicked
//                     role="menuitem"
//                     className="text-textPrimary text-lg font-sans"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;



// //original safe version
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // For toggling the menu
  const location = useLocation(); // Get the current URL path

  // Toggle the dropdown menu
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Define navigation links
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/live', label: 'Live' },
    { path: '/tv', label: 'TV' },
    { path: '/videos', label: 'Videos' },
  ];

  // Filter out the link for the current page
  const filteredLinks = links.filter((link) => link.path !== location.pathname);

  return (
    <div className="relative w-full">
      {/* Full Navbar for Large Screens */}
      {/* <nav className="hidden md:flex justify-between items-center p-4 bg-background text-textPrimary">
        <ul className="flex gap-10">
          {filteredLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-textPrimary text-border text-4xl font-sans">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}


    <nav className="hidden md:flex justify-evenly items-center p-4 bg-background text-textPrimary text-border-primary">
      <ul className="flex w-full max-w-screen-xl mx-auto gap-10 justify-between">
        {filteredLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="text-textPrimary text-lg md:text-3xl font-sans">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
  </nav>


      {/* Burger Menu for Small Screens */}
      <div className="md:hidden fixed top-4 left-4">
        {/* Burger Icon */}
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-label="Open menu"
          className="flex flex-col gap-1 cursor-pointer"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        {/* Slide-Out Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-48 bg-burgerMenuBackground shadow-lg transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
          role="menu"
          aria-hidden={!isOpen}
        >
          <button
            onClick={handleClick}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-black text-lg"
          >
            Close
          </button>
          <ul className="p-4">
            {filteredLinks.map((link) => (
              <li key={link.path} className="mb-4">
                <Link to={link.path} role="menuitem" className="text-black text-lg font-sans">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

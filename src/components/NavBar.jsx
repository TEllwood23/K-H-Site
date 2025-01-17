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

  const filteredLinks = links.filter((link) => link.path !== location.pathname);

  return (
    <div className="relative w-full">
      <nav className="hidden md:flex justify-evenly items-center p-4 bg-background text-textPrimary">
        <ul className="flex w-full max-w-screen-xl mx-auto gap-10 justify-between">
          {filteredLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-textPrimary text-lg md:text-3xl font-sans hover:text-yellow-500 hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="flex flex-col gap-1 cursor-pointer"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>

        {/* Slide-Out Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-24 bg-background shadow-lg transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 z-40`}
          role="menu"
          aria-hidden={!isOpen}
        >
          {/* Close Icon */}
          <button
            onClick={handleClick}
            aria-label="Close menu"
            className="absolute top-4 left-4 text-white text-4xl"
          >
            &times; {/* A cross icon */}
          </button>

          {/* Links */}
          <ul className="p-4 mt-12">
            {filteredLinks.map((link) => (
              <li key={link.path} className="mb-4">
                <Link to={link.path} role="menuitem" className="text-textPrimary text-lg font-sans">
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

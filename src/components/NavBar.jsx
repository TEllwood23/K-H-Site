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
    { path: '/home', label: 'Home' },
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


      <nav className="hidden md:flex justify-evenly items-center p-4 bg-background text-textPrimary">
  <ul className="flex w-full max-w-screen-xl mx-auto gap-10 justify-between">
    {filteredLinks.map((link) => (
      <li key={link.path}>
        <Link to={link.path} className="text-textPrimary text-lg font-sans">
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
          className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
          role="menu"
          aria-hidden={!isOpen}
        >
          <button
            onClick={handleClick}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-textPrimary text-lg"
          >
            Close
          </button>
          <ul className="p-4">
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

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
        className="fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-full shadow-lg focus:outline-none hover:bg-gray-800 transition"
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-xl focus:outline-none hover:text-gray-400"
        >
          &times;
        </button>
        <nav className="mt-16 space-y-6">
          <a
            onClick={() => handleNavigation("home")}
            className="block px-8 py-2 text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Home
          </a>
          <a
            onClick={() => handleNavigation("about")}
            className="block px-8 py-2 text-lg hover:text-blue-500 cursor-pointer transition"
          >
            About
          </a>
          <a
            onClick={() => handleNavigation("videos")}
            className="block px-8 py-2 text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Videos
          </a>
          <a
            onClick={() => handleNavigation("tickets")}
            className="block px-8 py-2 text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Tickets
          </a>
          <a
            onClick={() => handleNavigation("contact")}
            className="block px-8 py-2 text-lg hover:text-blue-500 cursor-pointer transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

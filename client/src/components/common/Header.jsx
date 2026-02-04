import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">InternPortal</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/jobs" className="hover:text-gray-300">
              Jobs
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>

          {/* Register Button */}
          <div className="hidden md:block">
            <a
              href="/register"
              className="bg-white text-blue-900 px-5 py-1.5 rounded font-medium hover:bg-gray-200"
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-800 px-4 py-4 space-y-3">
          <a href="/" className="block">
            Home
          </a>
          <a href="/about" className="block">
            About
          </a>
          <a href="/jobs" className="block">
            Jobs
          </a>
          <a href="/contact" className="block">
            Contact
          </a>
          <a
            href="/register"
            className="block bg-white text-blue-900 text-center py-2 rounded font-medium"
          >
            Register
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? "bg-navy/95 shadow-md py-2" : "bg-transparent py-4"}`}>
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-poppins font-bold text-accent">
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate hover:text-accent focus:outline-none"
          onClick={handleClick}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button variant="outline" className="btn-primary">Resume</Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-navy z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex justify-end p-4">
            <button 
              className="text-slate hover:text-accent focus:outline-none"
              onClick={handleClick}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <li key={link.name} className="text-xl">
                  <a 
                    href={link.href}
                    className="nav-link text-xl"
                    onClick={handleClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleClick}
                >
                  <Button variant="outline" className="btn-primary">Resume</Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

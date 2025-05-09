
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lightNavy py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-slate hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-slate">
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

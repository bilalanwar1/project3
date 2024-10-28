import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex justify-center md:justify-end space-x-6 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}

          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            AI<span className="text-emerald-500">SaaS</span>
          </Link>

          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-700">
              <li>
                <Link href="/" className="hover:text-emerald-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className=" w-full border-t border-gray-300 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Text */}
          <p className="text-sm text-gray-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} AI SaaS. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-600 hover:text-emerald-500"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-600 hover:text-emerald-500"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-gray-600 hover:text-emerald-500"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaChevronUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-white p-8 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">About Us</h4>
          <p className="text-sm mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-gray-800 text-white border-none outline-none transition-all duration-300 hover:bg-gray-700"
            />
            <button className="bg-blue-600 p-2 text-white transition-all duration-300 hover:bg-blue-500">Subscribe</button>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/cars" className="hover:underline">Cars</a></li>
            <li><a href="/car-types" className="hover:underline">Car Types</a></li>
            <li><a href="/team" className="hover:underline">Team</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Business Hours</h4>
          <ul className="text-sm space-y-4">
            <li>
              <span className="font-semibold">Mon - Friday:</span>
              <div className="text-gray-400">09.00 am - 07.00 pm</div>
            </li>
            <li>
              <span className="font-semibold">Saturday:</span>
              <div className="text-gray-400">10.00 am - 05.00 pm</div>
            </li>
            <li>
              <span className="font-semibold">Vacation:</span>
              <div className="text-gray-400">All Sunday</div>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400">123 Street, New York, USA</span></li>
            <li><span className="text-gray-400">info@example.com</span></li>
            <li><span className="text-gray-400">+012 345 67890</span></li>
            <li><span className="text-gray-400">+012 345 67890</span></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="hover:text-blue-400 transition duration-300" />
            <FaTwitter className="hover:text-blue-400 transition duration-300" />
            <FaInstagram className="hover:text-blue-400 transition duration-300" />
            <FaLinkedin className="hover:text-blue-400 transition duration-300" />
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; Your Site Name. All rights reserved.</div>
        <div className="text-sm">
          Designed by <a href="https://htmlcodex.com" className="hover:underline">HTML Codex</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
        >
          <FaChevronUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;

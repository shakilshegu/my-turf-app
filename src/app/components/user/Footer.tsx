import Link from "next/link";
const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">TurfBooking</h3>
          <p className="text-gray-400 mb-4">
            Find and book the best sports facilities near you with ease.
          </p>
          <div className="flex space-x-4">
            {/* Social icons would go here */}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/turfs"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Browse Turfs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="text-gray-400 not-italic">
            <p className="mb-2">Email: support@turfbooking.com</p>
            <p className="mb-2">Phone: +1 (888) 555-TURF</p>
            <p>123 Sports Street, Athletic City</p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 mt-6">
        <p className="text-gray-500 text-center">
          © {new Date().getFullYear()} TurfBooking. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;

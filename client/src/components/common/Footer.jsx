import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Internships
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Baneshwor, Kathmandu, Nepal
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +977-981234567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> sarupoudel921@gmail.com
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-xl font-bold mb-4">Policies</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0B1F3A]/80 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

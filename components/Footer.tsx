
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0b0f1a] pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light text-white mb-4">Get In Touch</h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto font-light">
          Open for collaborations, freelance projects, and architectural consultations.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
          <a href="mailto:dalaa2002@gmail.com" className="flex items-center gap-3 group">
            <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-teal-500 transition-colors">
              <Mail className="text-teal-400 group-hover:text-white" size={20} />
            </div>
            <span className="text-gray-300 transition-colors group-hover:text-teal-400">dalaa2002@gmail.com</span>
          </a>
          <a href="tel:+963999651475" className="flex items-center gap-3 group">
            <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-teal-500 transition-colors">
              <Phone className="text-teal-400 group-hover:text-white" size={20} />
            </div>
            <span className="text-gray-300 transition-colors group-hover:text-teal-400">+963 999 651 475</span>
          </a>
          <div className="flex items-center gap-3 group">
            <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">
              <MapPin className="text-teal-400" size={20} />
            </div>
            <span className="text-gray-300">Damascus, Syria</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://linkedin.com/in/dalaa-bazna-410456329" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
            <Instagram size={18} /> Instagram
          </a>
        </div>

        <div className="pt-8 border-t border-gray-900/50">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Dalaa Bazna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

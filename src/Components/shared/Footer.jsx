import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#1a8862] text-white">
      
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">

        {/* Logo */}
        <img
          className="mx-auto mb-5 w-32 md:w-40"
          src="/src/assets/logo-xl.png"
          alt="logo"
        />

        {/* Description */}
        <p className="text-sm md:text-base max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h2 className="mt-6 mb-3 font-semibold">Social Links</h2>

        <div className="flex justify-center gap-4 mb-6">
          <img className="w-6 md:w-8 cursor-pointer" src="/src/assets/facebook.png" alt="facebook" />
          <img className="w-6 md:w-8 cursor-pointer" src="/src/assets/instagram.png" alt="instagram" />
          <img className="w-6 md:w-8 cursor-pointer" src="/src/assets/twitter.png" alt="twitter" />
        </div>

        {/* Divider */}
        <hr className="border-white/30 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
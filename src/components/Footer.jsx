import React from "react";
import img from '../assets/logonew2.png';

function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 flex justify-center md:justify-normal items-center">
            <img src={img} alt="Epic Reads Logo" className="w-12 mr-2" loading="lazy" />
            <span className="text-xl font-bold">Epic Reads</span>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-gray-500 font-semibold mb-2">Information</span>
            <ul className="text-sm font-medium text-gray-700">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-gray-500 font-semibold mb-2">Categories</span>
            <ul className="text-sm font-medium text-gray-700">
              <li>Cosmetic</li>
              <li>Clothing</li>
              <li>Jewelry</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-gray-500 font-semibold mb-2">Social</span>
            <ul className="text-sm font-medium text-gray-700">
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Whatsapp</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-gray-500 font-semibold mb-2">Help</span>
            <ul className="text-sm font-medium text-gray-700">
              <li>Contact</li>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-400" />
        <div className="flex flex-col md:flex-row md:justify-between text-sm font-bold text-gray-700">
          <div>&copy; 2024 Design xyz.com</div>
          <div className="flex my-2 md:my-0 gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

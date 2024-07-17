// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">evaly</h2>
          <p className="mt-2">
            Largest product search engine, maximum categorized online shopping
            mall and quickest home delivery system.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12C22 5.373 16.627 0 10 0S-2 5.373-2 12c0 6.065 4.388 11.076 10.125 11.92v-8.428h-3.047v-3.491h3.047v-2.659c0-3.035 1.793-4.722 4.533-4.722 1.313 0 2.684.236 2.684.236v2.947h-1.513c-1.491 0-1.957.927-1.957 1.877v2.321h3.331l-.532 3.491h-2.799v8.428C17.613 23.075 22 18.065 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.95.24 2.404.392a4.923 4.923 0 011.786 1.057 4.923 4.923 0 011.057 1.786c.152.454.338 1.234.392 2.404.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.95-.392 2.404a4.923 4.923 0 01-1.057 1.786 4.923 4.923 0 01-1.786 1.057c-.454.152-1.234.338-2.404.392-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.95-.24-2.404-.392a4.923 4.923 0 01-1.786-1.057 4.923 4.923 0 01-1.057-1.786c-.152-.454-.338-1.234-.392-2.404-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.95.392-2.404a4.923 4.923 0 011.057-1.786 4.923 4.923 0 011.786-1.057c.454-.152 1.234-.338 2.404-.392 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.36 0 7.091.07 5.819.139 4.872.304 4.124.528 3.356.759 2.682 1.072 2.071 1.682c-.61.61-.923 1.284-1.154 2.053-.224.748-.389 1.695-.458 2.967C.001 8.36 0 8.756 0 12s.001 3.64.07 4.909c.069 1.272.234 2.219.458 2.967.231.769.544 1.443 1.154 2.053.61.61 1.284.923 2.053 1.154.748.224 1.695.389 2.967.458 1.27.069 1.666.07 4.909.07s3.64-.001 4.909-.07c1.272-.069 2.219-.234 2.967-.458.769-.231 1.443-.544 2.053-1.154.61-.61.923-1.284 1.154-2.053.224-.748.389-1.695.458-2.967.069-1.27.07-1.666.07-4.909s-.001-3.64-.07-4.909c-.069-1.272-.234-2.219-.458-2.967-.231-.769-.544-1.443-1.154-2.053-.61-.61-1.284-.923-2.053-1.154-.748-.224-1.695-.389-2.967-.458C15.64.001 15.244 0 12 0z" />
                <path d="M12 5.838c-3.404 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.325a4.163 4.163 0 110-8.325 4.163 4.163 0 010 8.325zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-2.634-.392-13.596-.392-16.23 0C1.928 3.421.93 4.411.703 6.225c-.223 1.75-.223 5.435-.223 5.435s0 3.684.223 5.435c.227 1.814 1.225 2.804 2.682 3.041 2.634.392 13.596.392 16.23 0 1.457-.237 2.455-1.227 2.682-3.041.223-1.75.223-5.435.223-5.435s0-3.684-.223-5.435c-.227-1.814-1.225-2.804-2.682-3.041zm-11.964 8.641V8.164l5.494 1.831-5.494 1.83z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p>House #8, Road #14, Dhanmondi, Dhaka-1209.</p>
          <p>Email: support@e-valy.com</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Let Us Help You</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Your Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Your Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return & Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Get Evaly App</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Google Play Store">
              <img
                src="path/to/google-play.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a href="#" aria-label="Apple App Store">
              <img
                src="path/to/app-store.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        © 2024 E-valy.com Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

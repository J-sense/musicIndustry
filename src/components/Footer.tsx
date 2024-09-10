// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-pink-200 -pt-24 py-10 ">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 justify-around gap-8 px-10">
        {/* Left Column - Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Music Industry</h2>
          <p className="mb-4">We provide the latest insights and updates on music production, trends, and more.</p>
          <p>© 2024 Music Industry, All Rights Reserved.</p>
        </div>

        {/* Right Column - Navigation and Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <nav>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </nav>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.795.715-1.795 1.76v2.317h3.588l-.467 3.622h-3.121V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.827 9.827 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482 13.955 13.955 0 01-10.126-5.14A4.92 4.92 0 003.194 9.75a4.902 4.902 0 01-2.229-.616c-.053 2.28 1.583 4.417 3.95 4.894a4.935 4.935 0 01-2.224.085 4.93 4.93 0 004.604 3.417A9.87 9.87 0 010 21.54a13.91 13.91 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.004-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332 0 7.052.07 5.76.14 4.422.39 3.293 1.518c-1.13 1.13-1.378 2.467-1.447 3.759C1.779 8.332 1.779 8.735 1.779 12s0 3.668.067 4.948c.069 1.292.317 2.629 1.447 3.759 1.13 1.13 2.467 1.378 3.759 1.447C8.332 22.221 8.735 22.221 12 22.221s3.668 0 4.948-.067c1.292-.069 2.629-.317 3.759-1.447 1.13-1.13 1.378-2.467 1.447-3.759.067-1.28.067-1.683.067-4.948s0-3.668-.067-4.948c-.069-1.292-.317-2.629-1.447-3.759C19.577.39 18.24.14 16.948.07 15.668 0 15.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <nav>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </nav>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.795.715-1.795 1.76v2.317h3.588l-.467 3.622h-3.121V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.827 9.827 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482 13.955 13.955 0 01-10.126-5.14A4.92 4.92 0 003.194 9.75a4.902 4.902 0 01-2.229-.616c-.053 2.28 1.583 4.417 3.95 4.894a4.935 4.935 0 01-2.224.085 4.93 4.93 0 004.604 3.417A9.87 9.87 0 010 21.54a13.91 13.91 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.004-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332 0 7.052.07 5.76.14 4.422.39 3.293 1.518c-1.13 1.13-1.378 2.467-1.447 3.759C1.779 8.332 1.779 8.735 1.779 12s0 3.668.067 4.948c.069 1.292.317 2.629 1.447 3.759 1.13 1.13 2.467 1.378 3.759 1.447C8.332 22.221 8.735 22.221 12 22.221s3.668 0 4.948-.067c1.292-.069 2.629-.317 3.759-1.447 1.13-1.13 1.378-2.467 1.447-3.759.067-1.28.067-1.683.067-4.948s0-3.668-.067-4.948c-.069-1.292-.317-2.629-1.447-3.759C19.577.39 18.24.14 16.948.07 15.668 0 15.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

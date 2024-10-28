"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Navbar for large screens */}
        <div className="hidden lg:flex w-fit gap-10 mx-auto py-4 text-black font-semibold font-sans">
          <NavLink href="#" label="HOME" />
          <button onClick={toggleCategories} className="relative hover:text-blue-500 transition-colors">
            CATEGORIES
          </button>
          {isCategoriesOpen && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md p-4 w-48">
              <DropdownLink href="#" label="WATCHES" />
              <DropdownLink href="#" label="FASHION" />
              <DropdownLink href="#" label="GADGETS" />
              <DropdownLink href="#" label="HOT OFFERS" />
              <DropdownLink href="#" label="TRENDING PRODUCTS" />
            </div>
          )}
          <NavLink href="#" label="BLOG" />
          <NavLink href="#" label="HOT OFFERS" />
          <NavLink href="#" label="TRENDING PRODUCTS" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col text-center py-4 text-black gap-4 font-semibold font-sans bg-white shadow-md">
          <NavLink href="#" label="HOME" />
          <button onClick={toggleCategories} className="hover:text-blue-500 transition-colors">
            CATEGORIES
          </button>
          {isCategoriesOpen && (
            <div className="bg-white shadow-md rounded-md py-2 px-4">
              <DropdownLink href="#" label="WATCHES" />
              <DropdownLink href="#" label="FASHION" />
              <DropdownLink href="#" label="GADGETS" />
              <DropdownLink href="#" label="HOT OFFERS" />
              <DropdownLink href="#" label="TRENDING PRODUCTS" />
            </div>
          )}
          <NavLink href="#" label="BLOG" />
          <NavLink href="#" label="HOT OFFERS" />
          <NavLink href="#" label="TRENDING PRODUCTS" />
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="navbar_link relative hover:text-blue-500 transition-colors">
    {label}
  </Link>
);

// Reusable DropdownLink component for the dropdown items
const DropdownLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="block px-4 py-2 text-sm hover:bg-gray-200 transition-colors">
    {label}
  </Link>
);

export default Navbar;

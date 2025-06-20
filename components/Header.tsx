"use client";
import Link from 'next/link';
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
        const navMenu = document.querySelector('.navbar ul') as HTMLElement | null;
        const overlay = document.getElementById('menu-overlay');

        if (!hamburger || !navMenu) return;

        const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay?.classList.toggle('active');
        overlay?.classList.remove('active');
        };

        const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        };

        // Toggle mobile menu on hamburger click
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking on any navbar link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside hamburger and nav menu
        const handleClickOutside = (e: MouseEvent) => {
        if (!hamburger.contains(e.target as Node) && !navMenu.contains(e.target as Node)) {
            closeMenu();
        }
        };
        document.addEventListener('click', handleClickOutside);

        // Cleanup event listeners on unmount
        return () => {
        hamburger.removeEventListener('click', toggleMenu);
        navLinks.forEach(link => {
            link.removeEventListener('click', closeMenu);
        });
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

  return (
    <header id="home" className="sticky top-0 z-50 bg-white shadow-md">
        <div className="header-top container mx-auto px-4">
            <img className="logo" src="/logo.png" alt="radiance logo"></img>
            <div className="title">Radiance</div>
            <div className="social-icons">
                <Link href="#" aria-label="Facebook" target="_blank" style={{marginRight: '1em'}}><i className="fab fa-facebook-f"></i></Link>
                <Link href="#" aria-label="Instagram" target="_blank" style={{marginRight: '1em'}}><i className="fab fa-instagram"></i></Link>
            </div>
        </div>
        <nav className="navbar">
            <div className="container mx-auto px-4">
                <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                </div>

                <ul>
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About Us</Link></li>
                    <li><Link href="#products">Products</Link></li>
                    <li><Link href="#delivery">Delivery</Link></li>
                    <li><Link href="#contact">Contact Us</Link></li>
                </ul>
            </div>
            
        </nav>
        <div id="menu-overlay" className="fixed inset-0 bg-black bg-opacity-50 z-30 hidden"></div>
    </header>
  );
}
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [webAppDevOpen, setWebAppDevOpen] = useState(false);
  const [leadGenerationOpen, setLeadGenerationOpen] = useState(false);
  const [mobileWebAppDevOpen, setMobileWebAppDevOpen] = useState(false);
  const [mobileLeadGenerationOpen, setMobileLeadGenerationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const serviceItems = [
    { name: 'All Services', path: '/services' },
    { name: 'AI Automation', path: '/services/ai-automation' },
    { name: 'Graphic Design', path: '/services/graphic-design' },
  ];

  const webAppDevItems = [
    { name: 'Web Development', path: '/services/web-app-development/web-development' },
    { name: 'App Development', path: '/services/web-app-development/app-development' },
  ];

  const leadGenerationItems = [
    { name: 'Real Estate Leads', path: '/services/lead-generation/real-estate' },
    { name: 'Solar Leads', path: '/services/lead-generation/solar' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        location.pathname === '/'
          ? (scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent')
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="CraftyCrew Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gradient">
                CraftyCrew
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : location.pathname === '/'
                      ? (scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200')
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary-600'
                    : location.pathname === '/'
                    ? (scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200')
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                {location.pathname.startsWith('/services') && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                  />
                )}
              </motion.button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          location.pathname === item.path ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    {/* Web & App Development Submenu */}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <div
                        onMouseEnter={() => setWebAppDevOpen(true)}
                        onMouseLeave={() => setWebAppDevOpen(false)}
                        className="relative"
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                          <span>Web & App Development</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${webAppDevOpen ? 'rotate-180' : ''}`} />
                        </div>
                        
                        <AnimatePresence>
                          {webAppDevOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                            >
                              {webAppDevItems.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                    location.pathname === item.path ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Lead Generation Submenu */}
                    <div>
                      <div
                        onMouseEnter={() => setLeadGenerationOpen(true)}
                        onMouseLeave={() => setLeadGenerationOpen(false)}
                        className="relative"
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                          <span>Lead Generation</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${leadGenerationOpen ? 'rotate-180' : ''}`} />
                        </div>
                        
                        <AnimatePresence>
                          {leadGenerationOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                            >
                              {leadGenerationItems.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                    location.pathname === item.path ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Team Link */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/team"
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/team'
                    ? 'text-primary-600'
                    : location.pathname === '/'
                    ? (scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200')
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Team
                {location.pathname === '/team' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                  />
                )}
              </Link>
            </motion.div>

            {/* Contact Link */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === '/contact'
                    ? 'text-primary-600'
                    : location.pathname === '/'
                    ? (scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200')
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Contact
                {location.pathname === '/contact' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                  />
                )}
              </Link>
            </motion.div>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                location.pathname === '/'
                  ? (scrolled ? 'text-gray-700' : 'text-white')
                  : 'text-gray-700'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Services in Mobile Menu */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <div className="px-3 py-2 text-base font-medium text-gray-700">
                  Services
                </div>
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-2 text-sm ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Web & App Development in Mobile Menu */}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button
                    onClick={() => setMobileWebAppDevOpen(!mobileWebAppDevOpen)}
                    className="flex items-center justify-between w-full px-6 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  >
                    <span>Web & App Development</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileWebAppDevOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileWebAppDevOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {webAppDevItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-8 py-2 text-sm ${
                              location.pathname === item.path
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Lead Generation in Mobile Menu */}
                <div>
                  <button
                    onClick={() => setMobileLeadGenerationOpen(!mobileLeadGenerationOpen)}
                    className="flex items-center justify-between w-full px-6 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  >
                    <span>Lead Generation</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileLeadGenerationOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileLeadGenerationOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {leadGenerationItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-8 py-2 text-sm ${
                              location.pathname === item.path
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Team in Mobile Menu */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <Link
                  to="/team"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/team'
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Team
                </Link>
              </motion.div>

              {/* Contact in Mobile Menu */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/contact'
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

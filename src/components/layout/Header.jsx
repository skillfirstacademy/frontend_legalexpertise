import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navLinks, siteConfig, countries } from "@/data/site";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.jpg"
import world from "../../assets/world.jpg"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const countriesRef = useRef(null);
  const location = useLocation();
const mobileCountriesRef  = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setCountriesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countriesRef.current && !countriesRef.current.contains(e.target)) {
        setCountriesOpen(false);
      }
    };
    
    // Only add listener on larger screens
    if (window.innerWidth >= 1024) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-primary/20 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3" aria-label={siteConfig.name}>
          <div className="relative w-15 h-11 md:h-15 md:w-15 lg:h-16 lg:w-22 flex items-center justify-center">
            <div className="absolute inset-0 rounded-md bg-gradient-gold opacity-90 group-hover:opacity-100 transition-opacity" />
            <img src={logo} alt="" />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            // Handle Countries dropdown
            if (link.name === "Countries") {
              return (
                <div key={link.path} className="relative" ref={countriesRef}>
                  <button
                    onClick={() => setCountriesOpen(!countriesOpen)}
                    className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-colors flex items-center gap-2 ${
                      countriesOpen ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <motion.div
                      animate={{ rotate: countriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                    {countriesOpen && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-8 bg-gradient-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Countries Dropdown - Full Width */}
                  <AnimatePresence>
                    {countriesOpen && (
                      <>
                        {/* Backdrop */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setCountriesOpen(false)}
                          className="fixed inset-0 top-20 z-40 bg-black/20 backdrop-blur-sm"
                        />

                        {/* Full Width Dropdown */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="fixed top-20 left-0 right-0 z-50 w-screen"
                        >
                          {/* Map Background Container */}
                          <div 
                            className="relative w-full h-[50vh] overflow-hidden bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${world})`,
                              backgroundBlendMode: 'overlay'
                            }}
                          >
                            {/* Dark overlay for readability */}
                            <div className="absolute inset-0 backdrop-blur-[1px]" />

                            {/* Animated Map Background Pattern */}
                            <div className="absolute inset-0">
                              {/* Grid pattern */}
                              <svg
                                className="absolute inset-0 w-full h-full opacity-10"
                                preserveAspectRatio="none"
                              >
                                <defs>
                                  <pattern
                                    id="grid"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                  >
                                    <path
                                      d="M 40 0 L 0 0 0 40"
                                      fill="none"
                                      stroke="currentColor"
                                      className="text-primary/30"
                                      strokeWidth="0.5"
                                    />
                                  </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                              </svg>

                              {/* Animated gradient orbs */}
                              <motion.div
                                animate={{
                                  x: [0, 30, 0],
                                  y: [0, -20, 0],
                                }}
                                transition={{
                                  duration: 15,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                              />
                              <motion.div
                                animate={{
                                  x: [0, -30, 0],
                                  y: [0, 20, 0],
                                }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="absolute bottom-10 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                              />
                            </div>

                            {/* Content */}
                            <div className="relative px-4 py-12">
                              <div className="max-w-8xl mx-auto">

                                {/* Countries Horizontal Scroll */}
                                <div className="overflow-x-auto pb-2"  style={{scrollbarWidth:"none"}}>
                                  <div className="flex gap-4 px-4 min-w-max">
                                    {countries.map((country, index) => (
                                      <motion.div
                                        key={country.code}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                          delay: index * 0.08,
                                          duration: 0.5,
                                        }}
                                      >
                                        <Link
                                          to={country.path}
                                          onClick={() => setCountriesOpen(false)}
                                          className="group flex flex-col items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-48 cursor-pointer"
                                        >
                                          {/* Country Image Card */}
                                          <div className="relative w-full h-28 rounded-lg overflow-hidden border border-white/20 group-hover:border-primary/70 transition-all">
                                            <img
                                              src={country.image}
                                              alt={country.name}
                                              className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                          </div>

                                          {/* Country Name */}
                                          <div className="text-center">
                                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                              {country.name}
                                            </h3>
                                          </div>

                                          
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Regular nav links
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-8 bg-gradient-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            {siteConfig.phone}
          </a>
          <Button asChild size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "90vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-auto bg-background/95 backdrop-blur-xl border-t border-primary/20"
            data-mobile-menu
          >
            <nav className="container-narrow py-6 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link, i) => {
                // Handle Countries in mobile
                if (link.name === "Countries") {
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      ref={mobileCountriesRef}
                    >
                      <button
                        onClick={() => {
                          console.log('Countries button clicked, current state:', countriesOpen);
                          setCountriesOpen(prev => !prev);
                        }}
                        className="w-full text-left px-4 py-3 rounded-md text-base font-medium text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-between relative z-50 pointer-events-auto"
                      >
                        {link.name}
                        <motion.div
                          animate={{ rotate: countriesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      {/* Mobile Countries List - Grid Layout (2-3 columns) */}
                      <AnimatePresence>
                        {countriesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-cover bg-center bg-no-repeat mt-2 rounded-lg border border-primary/20 relative z-40"
                            style={{
                              backgroundImage: `url(${world})`,
                              backgroundBlendMode: 'overlay',
                              scrollbarWidth:"none"
                            }}
                          >
                            <div className="p-4 overflow-y-auto h-[50vh]" style={{scrollbarWidth:"none"}}>
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {countries.map((country, index) => (
                                  <motion.div
                                    key={country.code}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                  >
                                    <Link
                                      to={country.path}
                                      onClick={() => {
                                        setCountriesOpen(false);
                                      }}
                                      className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                                    >
                                      <div className="relative w-full h-16 md:h-22 rounded overflow-hidden border border-primary/30 group-hover:border-primary/70 transition-all">
                                        <img
                                          src={country.image}
                                          alt={country.name}
                                          className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                      </div>
                                      <span className="text-xs font-medium text-white/80 group-hover:text-primary transition-colors text-center line-clamp-2">
                                        {country.name}
                                      </span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                // Regular mobile nav links
                return (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary border-l-2 border-primary"
                            : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                );
              })}
              <Button asChild className="mt-4 bg-gradient-gold text-primary-foreground">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
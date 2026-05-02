import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ videoSrc, countryName, description }) => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/20 via-dark-surface/10 to-dark-surface/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-surface/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center max-w-[1120px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[800px]"
        >
          {/* Country Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-[clamp(3.5rem,10vw,6.5rem)] font-bold leading-[1.1] text-white mb-6"
          >
            {countryName}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-2xl text-gray-200 backdrop-blur-[3px] p-2 leading-[1.4] font-light max-w-[700px]"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
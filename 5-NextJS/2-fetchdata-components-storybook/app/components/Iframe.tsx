import { motion } from "framer-motion";
import React from "react";

const Iframe = () => {
  return (
    <div className="w-full max-w-4xl flex justify-center mt-6">
      <div className="relative w-full h-[600px] bg-gray-200 border border-gray-300 rounded-lg overflow-hidden">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="https://smey09.github.io/roemreaksmey.github.io"
          title="Example Iframe"
          className="absolute inset-0 w-full h-full border-0"
        ></motion.iframe>
      </div>
    </div>
  );
};

export default Iframe;

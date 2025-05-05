import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Contactme = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 bg-black-100">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left px-4">
        {/* Left side */}
        <div
          className="flex flex-col bg-black
         rounded-lg shadow-lg p-6 mx-2 transition duration-300 hover:shadow-xl"
        >
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4 text-purple-900 text-lg"
          >
            <span className="font-semibold">Address:</span> {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4 text-purple-900 text-lg"
          >
            <span className="font-semibold">Phone:</span> {CONTACT.phoneNo}
          </motion.p>
        </div>
        {/* Right side */}
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          href="#"
          className="border-b my-4 sm:my-0 sm:ml-4 text-blue-500 font-semibold hover:text-blue-700 transition duration-300"
        >
          <span className="underline">{CONTACT.email}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contactme;

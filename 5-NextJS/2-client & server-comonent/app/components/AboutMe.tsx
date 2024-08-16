import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="dark:bg-gray-800 w-full max-w-4xl p-4 rounded-lg flex items-center space-x-4 border border-red-400">
        <img
          className="w-32 h-32 md:w-24 md:h-24 rounded-full shadow-lg"
          src="https://avatars.githubusercontent.com/u/149933218?v=4"
          alt="Smey image"
        />
        <div className="flex flex-col space-y-2">
          <div>
            <h5 className="text-2xl md:text-xl font-medium text-gray-900 dark:text-white">
              Smey
            </h5>
            <span className="text-lg md:text-sm text-gray-500 dark:text-gray-400">
              Software Student
            </span>
          </div>
          <div className="flex space-x-2">
            <a
              href="https://github.com/Smey09"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add friend
            </a>
            <a
              href="https://t.me/Smey_Advance"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-400 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default AboutMe;

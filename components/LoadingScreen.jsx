import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const welcomeMessages = [
    "Welcome",
    "Bonjuor",
    "Bienvenido",
    "Bienvenue",
    "欢迎",
    "ようこそ",
    "أهلاً وسهلاً",
    "Добро пожаловать",
    "Benvenuto",
    "Willkommen",
    "Selamat Datang",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < welcomeMessages.length - 1) {
        setCurrentMessageIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 1000); // Delay sebelum masuk ke halaman utama
      }
    }, 1000); // Waktu antar pesan
    return () => clearInterval(interval);
  }, [currentMessageIndex, onLoadingComplete]);
  // }, [currentMessageIndex, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 h-screen w-screen bg-[#e4e4e0] text-[#252525] flex items-center justify-center"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
      initial={{ opacity: 1 }}
      animate={{
        opacity: currentMessageIndex === welcomeMessages.length - 1 ? 0 : 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        key={currentMessageIndex}
        className="text-5xl md:text-5xl font-bold loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {welcomeMessages[currentMessageIndex]}
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;

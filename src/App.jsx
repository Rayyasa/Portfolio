import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FramerMagnetic from "../components/FramerMagnetic";
import LoadingScreen from "../components/LoadingScreen";
const App = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "MongoDB", "Nest.js"],
    },
    {
      category: "Tools",
      technologies: ["Git", "Docker", "AWS"],
    },
  ];
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];
  const [loadingComplete, setLoadingComplete] = useState(false);
  console.log("Loading complete:", loadingComplete);
  return (
    <>
      {!loadingComplete ? (
        <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      ) : (
        <div className="h-[10000px]">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:fixed relative w-full md:z-50 md:backdrop-blur-md bg-[#e4e4e0]"
          >
            <div className="container mx-auto px-6 md:px-4 py-6 flex justify-between items-center">
              <FramerMagnetic>
                <div className="self-start w-fit">
                  <a
                    href="/"
                    className="text-2xl font-bold text-[#252525] leading-snug tracking-heading"
                  >
                    RayD
                    <sup className="">©</sup>
                  </a>
                </div>
              </FramerMagnetic>
              <div className="flex flex-col md:flex-row md:space-x-2">
                {navItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative overflow-hidden inline-block cursor-pointer"
                  >
                    <motion.a
                      href={item.href}
                      className="text-[#6B645C] font-medium text-2xl inline-block relative"
                      whileHover="hover"
                      initial="initial"
                      animate="initial"
                    >
                      <motion.span
                        className="inline-block"
                        variants={{
                          initial: { y: 0, opacity: 1 },
                          hover: { y: -20, opacity: 0 },
                        }}
                        transition={{
                          duration: 0.15,
                          ease: "easeInOut",
                        }}
                      >
                        {item.label}
                      </motion.span>
                      {index === navItems.length - 1 ? "." : ","}

                      <motion.span
                        className="absolute left-0 pointer-events-none"
                        variants={{
                          initial: { y: 20, opacity: 0 },
                          hover: { y: 0, opacity: 1 },
                        }}
                        transition={{
                          duration: 0.15,
                          ease: "easeInOut",
                        }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  </div>
                ))}
              </div>
            </div>
          </motion.nav>
          <section
            id="home"
            className="min-h-screen text-[#252525] flex items-center pt-36 md:pt-0"
          >
            <div className="container mx-auto px-6 md:px-4 flex flex-col space-y-6 md:flex-row">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <h1 className="text-2xl md:text-5xl font-bold text-[#252525]">
                  Hola!, I'm Rayya Disayidan
                </h1>
                <div className="md:w-1/2 overflow-hidden">
                  <motion.p
                    className="text-xl text-[#6B645C] custom-text whitespace-nowrap"
                    animate={{
                      x: [-1000, 1000],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    FullStack Web Developer • Android Developer • Web Designer •
                    Student
                  </motion.p>
                </div>
                <div className="flex flex-col md:w-1/2 md:space-y-4 space-y-6">
                  <p className="text-xl text-[#252525] text-justify">
                    Full-stack programmer skilled in creating user-friendly
                    mobile and web apps, with expertise in various languages and
                    frameworks.
                  </p>
                  <div className="flex flex-row gap-3">
                    <motion.button
                      className="btn w-[162px] relative overflow-hidden bg-[#252525]"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Latar belakang animasi */}
                      <motion.div
                        className="absolute inset-0 bg-[#FFF9F3]"
                        variants={{
                          initial: { y: "100%" }, // Latar belakang dimulai dari bawah
                          hover: { y: 0 }, // Bergerak ke posisi penuh saat hover
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />

                      <div className="relative">
                        {/* Teks pertama */}
                        <motion.span
                          className="block text-[#FFF9F3]"
                          variants={{
                            initial: { y: 0 }, // Teks pertama berada pada posisi awal
                            hover: { y: -20 }, // Teks pertama bergeser ke atas saat hover
                          }}
                          transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                          Download CV
                        </motion.span>

                        {/* Teks kedua */}
                        <motion.span
                          className="absolute top-0 left-0 text-[#252525] text-center"
                          variants={{
                            initial: { y: 20 }, // Teks kedua berada di bawah saat awal
                            hover: { y: 0 }, // Teks kedua naik ke posisi tengah saat hover
                          }}
                          transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                          Download CV
                        </motion.span>
                      </div>
                    </motion.button>
                    <motion.button
                      className="btn w-[162px] relative overflow-hidden bg-[#252525]"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Latar belakang animasi */}
                      <motion.div
                        className="absolute inset-0 bg-[#FFF9F3]"
                        variants={{
                          initial: { y: "100%" }, // Latar belakang dimulai dari bawah
                          hover: { y: 0 }, // Bergerak ke posisi penuh saat hover
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />

                      <div className="relative">
                        {/* Teks pertama */}
                        <motion.span
                          className="block text-[#FFF9F3]"
                          variants={{
                            initial: { y: 0 }, // Teks pertama berada pada posisi awal
                            hover: { y: -20 }, // Teks pertama bergeser ke atas saat hover
                          }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          Download CV
                        </motion.span>

                        {/* Teks kedua */}
                        <motion.span
                          className="absolute top-0 left-0 text-[#252525] text-center"
                          variants={{
                            initial: { y: 20 }, // Teks kedua berada di bawah saat awal
                            hover: { y: 0 }, // Teks kedua naik ke posisi tengah saat hover
                          }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          Grab CV
                        </motion.span>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="justify-center w-full md:w-1/2 flex md:justify-end"
              >
                <div className="md:w-[404px] md:h-[404px] rounded-[60px] overflow-hidden border-4 border-[#252525]">
                  <img
                    src="../src/assets/profile1.jpeg"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default App;

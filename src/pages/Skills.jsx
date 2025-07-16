import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiPytest, SiTailwindcss, SiVite } from "react-icons/si";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  {
    category: "Hard-skills",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "React.js", icon: <FaReact className="text-sky-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      {
        name: "Banco de dados",
        icon: <FaDatabase className="text-cyan-400" />,
      },
      {
        name: "Pytest",
        icon: <SiPytest className="text-yellow-400" />,
      },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Resolução de problemas", percentage: 100 },
      { name: "Aprendizado rápido", percentage: 100 },
      { name: "Trabalho em equipe", percentage: 100 },
      { name: "Gestão de tempo", percentage: 100 },
    ],
  },
];
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};
const pageTransition = { type: "tween", ease: "anticipate", duration: 0.5 };

const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="text-4xl font-bold mb-8 text-text-primary">Habilidades</h1>
      <div className="space-y-12">
        {skillsData.map((categoryItem) => (
          <div key={categoryItem.category}>
            <h2 className="text-2xl font-bold mb-6 text-accent">
              {categoryItem.category}
            </h2>
            {categoryItem.category === "Soft Skills" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {categoryItem.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-32 h-32">
                      <CircularProgressbar
                        value={skill.percentage}
                        text={`${skill.percentage}%`}
                        styles={buildStyles({
                          textColor: "rgb(var(--color-text-primary))",
                          pathColor: "rgb(var(--color-accent))",
                          trailColor: "rgb(var(--color-card-border))",
                        })}
                      />
                    </div>
                    <p className="font-semibold text-center text-text-secondary mt-2">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {categoryItem.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card border border-card-border rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:border-accent hover:bg-card/50 transition-all"
                  >
                    <div className="text-5xl">{skill.icon}</div>
                    <p className="font-semibold text-text-primary">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

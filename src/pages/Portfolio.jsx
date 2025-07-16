import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const portfolioData = [
  {
    title: "Busca Mei",
    description:
      "Plataforma web para conectar Microempreendedores Individuais (MEIs) a clientes, com portal de busca público e painel administrativo para gerenciamento",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Laravel",
      "Axios",
      "MySql",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Sistema de Tarefas Pessoais",
    description:
      "Uma API RESTful completa para um aplicativo de lista de tarefas, com autenticação de usuário e operações CRUD.",
    technologies: ["Python", "FastApi", "SQLModel", "JWT", "Pytest"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-8 text-text-primary"
      >
        Portfólio
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-card rounded-lg overflow-hidden border border-card-border flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-full h-48 bg-background/50 flex items-center justify-center">
              <span className="text-text-secondary">Deploy em breve</span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-text-primary">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-card-border">
                {/*<a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt /> Ver Online
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <FaGithub /> Repositório
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;

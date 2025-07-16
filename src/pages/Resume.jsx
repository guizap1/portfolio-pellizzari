import { motion } from "framer-motion";
import intellLogo from "../assets/logos/intell-logo.png";
import tnetLogo from "../assets/logos/transpnet-logo.png";
import myMabuLogo from "../assets/logos/mymabu-logo.png";

const experienceData = [
  {
    title: "Analista de Qualidade",
    company: "TranspNet Sistemas",
    period: "01/2025 - Presente",
    logo: tnetLogo,
    description: [
      "Execução de testes funcionais e de regressão em sistemas ERP desenvolvidos em Delphi.",
      "Validação de funcionalidades e identificação de bugs na aplicação web construída em React.js.",
      "Documentação de erros, colaborando diretamente com a equipe de desenvolvimento.",
      "Criação de cenários de testes baseados em requisitos de negócio para garantir a qualidade das entregas.",
      "Acompanhamento de correções e validação de ajustes em ambientes de homologação.",
      "Participação ativa em reuniões de sprint e stand-ups com metodologias ágeis, contribuindo para a melhoria contínua do time de desenvolvimento",
    ],
  },
  {
    title: "Suporte Junior",
    company: "IntellTech Intelligent Technologies",
    period: "04/2024 - 09/2024",
    logo: intellLogo,
    description: [
      "Apoio no desenvolvimento de landing pages com HTML, CSS e JavaScript.",
      "Correção de bugs e implementação de pequenas melhorias em projetos existentes.",
      "Aprendizado sobre o ciclo de vida de desenvolvimento de software em um ambiente ágil.",
    ],
  },
  {
    title: "Suporte técnico",
    company: "Mabu Hotéis & Resorts",
    period: "01/2024 - 04/2024",
    logo: myMabuLogo,
    description: [
      "Atendimento e suporte técnico a usuários, garantindo o funcionamento contínuo da rede e sistemas de gestão hoteleira.",
      "Manutenção de computadores, impressoras e infraestrutura básica de TI.",
      "Acompanhamento e solução de incidentes relacionados à internet, e-mails, servidores e estações de trabalho.",
      "Organização e controle de inventário de equipamentos de tecnologia.",
      "Colaboração com equipes internas para garantir a estabilidade e segurança do ambiente de TI.",
    ],
  },
];
const educationData = [
  {
    institution: "Unicesumar",
    course: "Analise e desenvolvimento de sistemas",
    period: "2023-2025",
  },
];
const coursesData = [
  {
    institution: "Udemy",
    course: "Python 3 Básico ao Avançado",
    period: "2025",
  },
  {
    institution: "Udemy",
    course: "Introduction to microservices With Python + Next.JS",
    period: "2025",
  },
  {
    institution: "Udemy",
    course: "Design Patterns com Python",
    period: "2025",
  },
  {
    institution: "Udemy",
    course: "Python Unit Testing Fundamentals (Using Unittest & Pytest",
    period: "2025",
  },
  {
    institution: "Udemy",
    course: "Domine a Arquitetura Limpa e Hexagonal",
    period: "2024",
  },
  {
    institution: "Udemy",
    course: "PowerBI + SQL server",
    period: "2024",
  },
  {
    institution: "Rocketseat",
    course: "Html, css & JS básico",
    period: "2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 20 },
};

const Resume = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-10 text-text-primary"
      >
        Resumo
      </motion.h1>

      {/* seção de experiência */}
      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-accent">
          Experiência Profissional
        </h2>
        <div className="relative border-l-2 border-card-border pl-8">
          {experienceData.map((item, index) => (
            <div key={`exp-${index}`} className="mb-10 relative">
              <div className="absolute -left-[3.3rem] top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
              <p className="text-base font-semibold text-text-secondary">
                {item.period}
              </p>
              <div className="flex justify-between items-center mt-1">
                <h3 className="text-2xl font-bold text-text-primary">
                  {item.title}
                </h3>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-24 h-auto"
                  />
                )}
              </div>
              <p className="text-lg text-text-secondary mb-4">{item.company}</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary text-base">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
      {/* seção de educação */}
      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-accent">
          Formação Acadêmica
        </h2>
        <div className="relative border-l-2 border-card-border pl-8">
          {educationData.map((item, index) => (
            <div key={`edu-${index}`} className="mb-8 relative">
              <div className="absolute -left-[3.3rem] top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
              <p className="text-base font-semibold text-text-secondary">
                {item.period}
              </p>
              <h3 className="text-2xl font-bold mt-1 text-text-primary">
                {item.course}
              </h3>
              <p className="text-lg text-text-secondary">{item.institution}</p>
            </div>
          ))}
        </div>
      </motion.section>
      {/* seção de cursos */}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-8 text-accent">
          Cursos e Certificações
        </h2>
        <div className="relative border-l-2 border-card-border pl-8">
          {coursesData.map((item, index) => (
            <div key={`course-${index}`} className="mb-8 relative">
              <div className="absolute -left-[3.3rem] top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
              <p className="text-base font-semibold text-text-secondary">
                {item.period}
              </p>
              <h3 className="text-2xl font-bold mt-1 text-text-primary">
                {item.course}
              </h3>
              <p className="text-lg text-text-secondary">{item.institution}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Resume;

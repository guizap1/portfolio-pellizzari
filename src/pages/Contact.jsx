import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";

// animação entrada page
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl mx-auto"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-4 text-text-primary text-center"
      >
        Vamos Conversar!
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-lg text-text-secondary mb-12 text-center"
      >
        Estou sempre aberto a novas oportunidades e colaborações. Preencha o
        formulário abaixo e retornarei o mais breve possível.
      </motion.p>

      <motion.div variants={itemVariants}>
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default Contact;

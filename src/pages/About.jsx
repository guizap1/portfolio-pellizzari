import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};
const pageTransition = { type: "tween", ease: "anticipate", duration: 0.5 };

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="text-4xl font-bold mb-6 text-text-primary">Sobre Mim</h1>

      <div className="space-y-4 text-text-secondary leading-relaxed">
        <p>
          Desenvolvedor apaixonado por tecnologia e residente em Foz do Iguaçu,
          PR. Desde cedo, a curiosidade por entender como as coisas funcionam me
          levou ao mundo da programação.
        </p>
        <p>
          Iniciei minha carreira no suporte técnico dos Hotéis Mabu, garantindo
          a operação dos sistemas e da rede. Hoje atuo como QA em uma empresa de
          ERP, focado em testes funcionais, identificação de bugs e garantia da
          qualidade dos produtos.
        </p>
        <p>
          Gosto de transformar ideias em soluções funcionais e intuitivas,
          sempre buscando evoluir e encarar novos desafios que impulsionem meu
          crescimento profissional.
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-accent">O que eu faço</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-card-border">
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Desenvolvimento Web
            </h3>
            <p className="text-text-secondary">
              Crio aplicações web completas, desde o front-end com interfaces
              ricas e reativas usando React.js, até o back-end robusto para dar
              suporte à lógica de negócio.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-card-border">
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Automações
            </h3>
            <p className="text-text-secondary">
              Desenvolvimento de soluções de automação personalizadas, focadas
              em otimizar processos empresariais, aumentar a eficiência e
              reduzir custos operacionais.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm font-bold text-accent mb-2">INTRO</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
        Olá, eu sou o Guilherme, <br />
        Desenvolvedor Backend/Tester
      </h1>
      <p className="text-text-secondary max-w-2xl mb-4">
        Como estudante e desenvolvedor em formação, estou explorando o universo
        do desenvolvimento web com foco em Python, SQL e front-end. Tenho me
        dedicado a aprender a criar interfaces amigáveis, estruturar lógicas de
        back-end e aplicar testes para garantir qualidade e funcionalidade.
        Estou sempre em busca de evoluir minhas habilidades e contribuir com
        projetos que unam tecnologia e boas experiências para o usuário.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">
        Tecnologias que estou aprimorando atualmente:
      </h2>
      <ul className="list-disc list-inside text-text-secondary space-y-1">
        <li>Python</li>
        <li>Pytest</li>
        <li>Unittest</li>
        <li>Microservices</li>
        <li>FastApi</li>
        <li>MySQL</li>
        <li>Design Patterns</li>
        <li>React.JS</li>
      </ul>
      <div className="flex gap-4 mt-8">
        <a
          href="/Curriculo-Guilherme.pdf"
          download
          className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Baixar Currículo
        </a>
      </div>
    </div>
  );
};

export default Home;

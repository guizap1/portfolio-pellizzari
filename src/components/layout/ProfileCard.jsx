import { motion } from "framer-motion";
import profileImage from "../../assets/profile-cutout.png";
import { HiOutlineMail } from "react-icons/hi";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/guizap1" },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/guilhermepellizzari/",
  },
];

const ProfileCard = () => {
  return (
    <div className="w-full bg-card rounded-2xl flex flex-col justify-between text-center overflow-hidden border border-card-border">
      <div className="relative w-full">
        <img
          src={profileImage}
          alt="Foto de Guilherme Pellizzari"
          className="w-full h-auto object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-card/20 backdrop-blur-md border-t border-card-border/30">
          <div className="flex flex-col items-center text-center gap-3">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">
                Guilherme Pellizzari
              </h1>
              <h2 className="text-sm tracking-widest text-text-primary/80 font-semibold uppercase">
                Desenvolvedor
              </h2>
            </div>
            {/* links de Redes Sociais */}
            <div className="flex items-center justify-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-2xl text-text-secondary hover:text-accent transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-4">
        <a
          href="/#contato"
          className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-full transition-colors w-full flex items-center justify-center gap-2"
        >
          <HiOutlineMail className="text-xl" />
          Contate-Me
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

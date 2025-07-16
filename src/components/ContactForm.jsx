import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // só 'success', 'error', ou null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus("success");
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          setSubmitStatus("error");
          setIsSubmitting(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-accent text-center">
        Entre em Contato
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            name="from_name"
            id="user_name"
            required
            className="w-full px-4 py-2 bg-card border border-card-border rounded-lg focus:ring-accent focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="user_email"
            required
            className="w-full px-4 py-2 bg-card border border-card-border rounded-lg focus:ring-accent focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full px-4 py-2 bg-card border border-card-border rounded-lg focus:ring-accent focus:border-accent"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>
      </form>
      {submitStatus === "success" && (
        <p className="mt-4 text-center text-green-500">
          Mensagem enviada com sucesso!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-center text-red-500">
          Ocorreu um erro. Tente novamente.
        </p>
      )}
    </div>
  );
};

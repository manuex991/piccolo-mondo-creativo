// src/Contact.jsx
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function Contact() {
  // Sostituisci “abcdefg” con il tuo ID Formspree
  const [state, handleSubmit] = useForm("abcdefg");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4 max-w-lg"
    >
      <h2 className="text-3xl font-script font-semibold mb-4 text-center">Contattaci</h2>

      {/* invio via hook Formspree */}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Il tuo nome"
          required
          className="border p-2 rounded"
        />
        <ValidationError prefix="Nome" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Messaggio"
          required
          className="border p-2 rounded h-32"
        />
        <ValidationError prefix="Messaggio" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-pink-600 text-white py-2 rounded font-semibold"
        >
          {state.succeeded ? "Inviato!" : "Invia"}
        </button>
      </form>

      {state.succeeded && (
        <p className="mt-4 text-center text-green-600">
          Grazie! Ti risponderemo al più presto.
        </p>
      )}
    </motion.section>
  );
}

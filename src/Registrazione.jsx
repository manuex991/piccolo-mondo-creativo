// src/Registrazione.jsx
import { useState } from "react";

export default function Registrazione() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accettoPrivacy, setAccettoPrivacy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accettoPrivacy) {
      alert("Devi accettare la privacy policy per registrarti.");
      return;
    }
    console.log("Registrazione inviata:", { nome, cognome, email, password });
    // Qui dopo collegheremo Firebase
  };

  return (
    <section className="container mx-auto py-12 px-4 max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Registrati</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Cognome"
          value={cognome}
          onChange={(e) => setCognome(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={accettoPrivacy}
            onChange={(e) => setAccettoPrivacy(e.target.checked)}
            required
          />
          <span>Accetto la Privacy Policy</span>
        </label>

        <button
          type="submit"
          className="bg-pink-600 text-white py-2 rounded font-semibold"
        >
          Registrati
        </button>
      </form>
    </section>
  );
}

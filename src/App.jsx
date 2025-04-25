// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Registrazione from "./Registrazione.jsx";
import logoImg from "./assets/logo.png";
import "./index.css";

const products = [
  { id: "cuscino", name: "Cuscino personalizzato", price: 25 },
  { id: "tovaglietta", name: "Tovaglietta americana", price: 18 },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const linkClasses = ({ isActive }) =>
    `${isActive ? "underline " : ""}block py-2 md:py-0`;

  return (
    <nav className="bg-white text-pink-600 font-script sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Hamburger a sinistra */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none absolute left-4 top-1/2 transform -translate-y-1/2"
          aria-label="Apri/chiudi menu"
        >
          ☰
        </button>

        {/* Logo al centro */}
        <NavLink to="/" className="flex items-center justify-center mx-auto">
          <img
            src={logoImg}
            alt="Il mio piccolo mondo creativo"
            className="h-[3rem] w-auto animate-float"
          />
          <span className="sr-only">Il mio piccolo mondo creativo</span>
        </NavLink>

        {/* Carrellino a destra */}
        <a
          href="#"
          className="snipcart-checkout relative ml-4 md:order-last md:ml-6 absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="9" cy="20" r="2" />
            <circle cx="17" cy="20" r="2" />
          </svg>
          <span className="snipcart-items-count absolute -top-2 -right-3 text-xs bg-pink-600 text-white rounded-full h-5 w-5 flex items-center justify-center" />
        </a>
      </div>

      {/* Menu navigazione */}
      <div
        className={`${
          open ? "block" : "hidden"
        } md:flex md:items-center md:justify-center md:space-x-8 text-center md:text-left`}
      >
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/chi-siamo" className={linkClasses}>
          Chi siamo
        </NavLink>
        <NavLink to="/shop" className={linkClasses}>
          Shop
        </NavLink>
        <NavLink to="/contatti" className={linkClasses}>
          Contatti
        </NavLink>
        <NavLink to="/registrazione" className={linkClasses}>
          Registrati
        </NavLink>
      </div>
    </nav>
  );
}

function About() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Chi siamo</h2>
      <p>
        Siamo due sorelle con la passione per ago e filo che creano pezzi unici
        completamente personalizzati.
      </p>
    </section>
  );
}

function Shop() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">I nostri prodotti</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <div className="aspect-square bg-gray-100 rounded mb-4 flex items-center justify-center">
              Foto
            </div>
            <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
            <p className="mb-4">{p.price} €</p>
            <Link
              to={`/shop/${p.id}`}
              className="bg-pink-600 text-white px-4 py-2 rounded"
            >
              Personalizza
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [fabric, setFabric] = useState("cotone");
  const [text, setText] = useState("");

  if (!product) return <p className="p-8">Prodotto non trovato</p>;

  return (
    <section className="container mx-auto py-12 px-4">
      <Link to="/shop" className="text-pink-600">
        &larr; Torna allo shop
      </Link>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
          Foto
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="mb-4">{product.price} €</p>

          <label className="block mb-2 font-semibold">Scegli il tessuto:</label>
          <select
            value={fabric}
            onChange={(e) => setFabric(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="cotone">Cotone</option>
            <option value="lino">Lino</option>
            <option value="jeans">Jeans</option>
          </select>

          <label className="block mb-2 font-semibold">
            Nome o frase da ricamare:
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Es: Buon Natale"
            className="border p-2 rounded w-full mb-4"
          />

          <button className="bg-pink-600 text-white px-6 py-3 rounded">
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Il mio piccolo mondo creativo · Articoli
          cuciti a mano con amore
        </p>
        <p className="mt-2">
          Seguici su{" "}
          <a href="#" className="text-pink-600 hover:underline">
            Instagram
          </a>
          ,{" "}
          <a href="#" className="text-pink-600 hover:underline">
            Facebook
          </a>{" "}
          e{" "}
          <a href="#" className="text-pink-600 hover:underline">
            TikTok
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/contatti" element={<Contact />} />
        <Route path="/registrazione" element={<Registrazione />} />
      </Routes>
      <Footer />
    </Router>
  );
}

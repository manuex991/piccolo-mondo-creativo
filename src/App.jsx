import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";

import logoImg from "./assets/logo.png";
import "./index.css";

/* ---------- DATI PRODOTTI (placeholder) ---------- */
const products = [
  { id: "cuscino",    name: "Cuscino personalizzato", price: 25 },
  { id: "tovaglietta", name: "Tovaglietta americana", price: 18 },
];

/* ================================================= */
/*                    NAVBAR                         */
/* ================================================= */
function NavBar() {
  const [open, setOpen] = useState(false);
  const linkClasses = ({ isActive }) =>
    `${isActive ? "underline " : ""}py-2 md:py-0 md:inline-block`;

  return (
    <nav className="bg-white text-pink-600 font-script sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* LOGO animato */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Il mio piccolo mondo creativo"
            className="h-10 w-auto animate-float"
          />
          <span className="sr-only">Il mio piccolo mondo creativo</span>
        </NavLink>

        {/* ICONA CARRELLO */}
        <a
          href="#"
          className="snipcart-checkout relative ml-4 md:order-last md:ml-6"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="9" cy="20" r="2" />
            <circle cx="17" cy="20" r="2" />
          </svg>
          <span className="snipcart-items-count absolute -top-2 -right-3 text-xs bg-pink-600 text-white rounded-full h-5 w-5 flex items-center justify-center" />
        </a>

        {/* HAMBURGER mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl ml-4"
          aria-label="Apri/chiudi menu"
        >
          ☰
        </button>

        {/* LINK MENU */}
        <div
          className={`${open ? "block" : "hidden"} md:block space-y-2 md:space-y-0 md:space-x-6 text-lg`}
        >
          <NavLink to="/"          className={linkClasses}>Home</NavLink>
          <NavLink to="/chi-siamo" className={linkClasses}>Chi&nbsp;siamo</NavLink>
          <NavLink to="/shop"      className={linkClasses}>Shop</NavLink>
          <NavLink to="/contatti"  className={linkClasses}>Contatti</NavLink>
        </div>
      </div>
    </nav>
  );
}

/* ================================================= */
/*                    PAGINE                         */
/* ================================================= */
function Home() {
  return (
    <section className="container mx-auto py-12 text-center">
      <h1 className="text-4xl font-script font-semibold mb-4">
        Benvenuti nel nostro laboratorio di cucito creativo!
      </h1>
      <p className="max-w-2xl mx-auto">
        Trova articoli unici cuciti a mano e personalizzali con nomi, frasi e
        tessuti che preferisci.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-script font-semibold mb-4">Chi siamo</h2>
      <p>
        Siamo due sorelle con la passione per ago e filo che creano pezzi unici
        completamente personalizzati.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-script font-semibold mb-4">Contattaci</h2>
      <form className="grid gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Il tuo nome"  className="border p-2 rounded" />
        <input type="email" placeholder="Email"       className="border p-2 rounded" />
        <textarea        placeholder="Messaggio"      className="border p-2 rounded" />
        <button type="submit" className="bg-pink-600 text-white py-2 rounded">
          Invia
        </button>
      </form>
    </section>
  );
}

/* ================================================= */
/*               SHOP & LISTA PRODOTTI               */
/* ================================================= */
function Shop() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-script font-semibold mb-8 text-center md:text-left">
        I nostri prodotti
      </h2>
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

/* ================================================= */
/*           DETTAGLIO PRODOTTO + SNIPCART           */
/* ================================================= */
function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [fabric, setFabric] = useState("cotone");
  const [text, setText] = useState("");

  if (!product) return <p className="p-8">Prodotto non trovato</p>;

  return (
    <section className="container mx-auto py-12">
      <Link to="/shop" className="text-pink-600">&larr; Torna allo shop</Link>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
          Foto
        </div>

        <div>
          <h2 className="text-3xl font-script font-semibold mb-4">
            {product.name}
          </h2>
          <p className="mb-4">{product.price} €</p>

          {/* Tessuto */}
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

          {/* Ricamo */}
          <label className="block mb-2 font-semibold">
            Nome o frase da ricamare:
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Es: Buon Natale"
            className="border p-2 rounded w-full mb-4"
          />

          {/* Bottone Snipcart */}
          <button
            className="snipcart-add-item bg-pink-600 text-white px-6 py-3 rounded"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="/"
            data-item-description={fabric}
            data-item-image="/logo.png"
            data-item-name={`${product.name} - ${fabric} - ${text || "no ricamo"}`}
            data-item-custom1-name="Tessuto"
            data-item-custom1-value={fabric}
            data-item-custom2-name="Ricamo"
            data-item-custom2-value={text || "—"}
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/*                       FOOTER                      */
/* ================================================= */
function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Il mio piccolo mondo creativo · Articoli
          cuciti a mano con amore
        </p>
      </div>
    </footer>
  );
}

/* ================================================= */
/*                    APP ROOT                       */
/* ================================================= */
export default function App() {
  return (
    <Router>
      <NavBar />
      <>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/chi-siamo"        element={<About />} />
          <Route path="/contatti"         element={<Contact />} />
          <Route path="/shop"             element={<Shop />} />
          <Route path="/shop/:productId"  element={<ProductDetails />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

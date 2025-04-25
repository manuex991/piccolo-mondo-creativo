// src/Home.jsx  – Homepage minimal senza foto
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Best-seller demo (senza immagini)
const bestSellers = [
  { id: "cuscino",    name: "Cuscino personalizzato",   price: 25 },
  { id: "tovaglietta", name: "Tovaglietta americana",   price: 18 },
  { id: "sacchetto",   name: "Sacchetto portabiancheria", price: 22 },
];

// Recensioni demo
const reviews = [
  { id: 1, name: "Laura",  text: "Prodotto stupendo e ricamo perfetto!" },
  { id: 2, name: "Giulia", text: "Arrivato in due giorni, bellissimo." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/bg-pattern.png')] opacity-20" />
        <div className="relative z-10 px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-script mb-6 drop-shadow-sm">
            Cuciamo i tuoi sogni,<br className="hidden md:block" /> punto dopo punto
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#shop" className="bg-pink-600 text-white px-6 py-3 rounded font-semibold shadow">
              Scopri i prodotti
            </a>
            <Link to="/shop/cuscino" className="border border-pink-600 text-pink-600 px-6 py-3 rounded font-semibold">
              Personalizza ora
            </Link>
          </div>
        </div>
      </section>

      {/* USP */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="container mx-auto py-12 px-4 grid md:grid-cols-3 gap-8 text-center text-pink-600"
      >
        {['100% fatto a mano', 'Personalizzazione illimitata', 'Spedito in 48 h'].map((text, idx) => (
          <div key={text} className="flex flex-col items-center gap-3">
            <span className="text-5xl">{idx === 0 ? '✂️' : idx === 1 ? '🧵' : '🚚'}</span>
            <p className="font-semibold max-w-[14ch]">{text}</p>
          </div>
        ))}
      </motion.section>

      {/* BEST SELLER */}
      <motion.section id="shop" className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-script font-semibold mb-6 text-center md:text-left">
          I nostri best-seller
        </h2>
        <Swiper slidesPerView={1.2} spaceBetween={16} breakpoints={{640:{slidesPerView:2.2},1024:{slidesPerView:3.2}}}>
          {bestSellers.map(p => (
            <SwiperSlide key={p.id} className="bg-white rounded-xl shadow flex flex-col justify-between p-6 text-center">
              <div className="text-6xl pb-4">🧶</div>
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="mb-4">{p.price} €</p>
              <Link to={`/shop/${p.id}`} className="bg-pink-600 text-white px-4 py-2 rounded text-sm">
                Personalizza
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* TIMELINE */}
      <motion.section className="bg-pink-50 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {['Scegli il prodotto', 'Definisci dettagli', 'Ricevi a casa'].map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span className="text-5xl font-script text-pink-600">0{i+1}</span>
              <p className="font-medium max-w-[12ch]">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIANZE */}
      <motion.section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-script font-semibold mb-6 text-center">Dicono di noi</h2>
        <Swiper autoplay={{ delay: 5000 }} spaceBetween={16} slidesPerView={1}>
          {reviews.map(r => (
            <SwiperSlide key={r.id} className="bg-white p-6 rounded shadow mx-auto max-w-md">
              <p className="italic mb-4">“{r.text}”</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-600">
                  {r.name[0]}
                </div>
                <span className="font-semibold">{r.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* CTA FINALE */}
      <section className="relative py-16 text-center text-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/bg-pattern.png')] opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-script font-semibold mb-6">Pronto a creare qualcosa di unico?</h2>
          <Link to="/shop" className="bg-pink-600 text-white px-8 py-3 rounded font-semibold shadow-lg">
            Vai allo shop
          </Link>
        </div>
      </section>
    </>
  );
}

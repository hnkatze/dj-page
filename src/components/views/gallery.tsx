import { motion } from "motion/react";
import Image from "next/image";


export const GalleryView = () => {

    const imagesEvents = [
        { src: "https://i.postimg.cc/NGmtWfYQ/1.jpg", alt: "Evento 1" },
        { src: "https://i.postimg.cc/L6SSRK6L/2.jpg", alt: "Evento 2" },
        { src: "https://i.postimg.cc/Gm7nk4Px/3.jpg", alt: "Evento 3" },
        { src: "https://i.postimg.cc/dVtKk2C0/4.jpg", alt: "Evento 4" },
        { src: "https://i.postimg.cc/TYc637pS/5.jpg", alt: "Evento 5" },
        { src: "https://i.postimg.cc/PqCsKd2s/6.jpg", alt: "Evento 6" },
    ]

    return (
      <section id="galeria" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Galería de Eventos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Algunos momentos especiales que hemos tenido el honor de ser parte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagesEvents.map((item, index) => (
              <motion.div
                key={item.alt}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <i className="fas fa-play text-white text-3xl"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}
"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { GalleryView } from "@/components/views/gallery"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <i className="fas fa-music text-primary-foreground text-lg"></i>
            </div>
            <span className="text-xl font-bold text-primary">Sonido Celestia TX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galería
            </a>
            <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <button className="hidden md:block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
            Cotizar Ahora
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
                Galería
              </a>
              <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:bg-secondary/90 transition-colors w-full">
                Cotizar Ahora
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.postimg.cc/prbMSK4D/pexels-nano-erdozain-120534369-27570912.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Llevando buen ambiente, buena música y muy buena animación para toda fiesta cristiana
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Especialistas en fiestas de 15 años, cumpleaños y bodas en todo Texas
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors">
              <i className="fas fa-phone mr-2"></i>
              Contactar Ahora
            </button>
            <button className="bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm">
              <i className="fas fa-play mr-2"></i>
              Ver Galería
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sobre Nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Con años de experiencia en el mundo del entretenimiento cristiano, Sonido Celestia TX se ha convertido en
              la opción preferida para celebraciones especiales en Houston y sus alrededores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-accent-foreground"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Fiestas de 15 Años</h3>
              <p className="text-muted-foreground">
                Hacemos de tu quinceañera un momento inolvidable con música y animación apropiada para toda la familia.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-birthday-cake text-2xl text-accent-foreground"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Cumpleaños</h3>
              <p className="text-muted-foreground">
                Celebra tu día especial con la mejor música cristiana y un ambiente lleno de alegría y bendiciones.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rings-wedding text-2xl text-accent-foreground"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Bodas</h3>
              <p className="text-muted-foreground">
                Tu día más especial merece la música perfecta. Creamos el ambiente ideal para tu celebración
                matrimonial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ofrecemos servicios completos de entretenimiento para hacer de tu evento una experiencia memorable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fa-microphone", title: "DJ Profesional", desc: "Música cristiana y secular apropiada" },
              { icon: "fa-volume-up", title: "Sonido de Calidad", desc: "Equipos profesionales de alta fidelidad" },
              { icon: "fa-lightbulb", title: "Iluminación", desc: "Efectos de luces para ambientar tu evento" },
              { icon: "fa-users", title: "Animación", desc: "Entretenimiento para todas las edades" },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-border text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${service.icon} text-secondary-foreground`}></i>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryView />

      {/* Coverage Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Área de Cobertura</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Brindamos nuestros servicios en Houston y áreas metropolitanas de Texas
            </p>
          </motion.div>

          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <img
                  src="https://proyectoviajero.com/wp-content/uploads/2022/09/texas_mapa_detalle-XL.webp"
                  alt="Mapa de cobertura en Texas"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Servimos en toda el área de Houston
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
                    Houston Centro
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
                    Katy y áreas oeste
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
                    Sugar Land y Fort Bend
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
                    The Woodlands y norte
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
                    Pearland y áreas sur
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  ¿Tu evento está fuera de estas áreas? ¡Contáctanos! Podemos hacer arreglos especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                event: "Quinceañera",
                text: "¡Increíble servicio! Hicieron de la fiesta de 15 de mi hija algo verdaderamente especial. La música fue perfecta y mantuvieron a todos bailando toda la noche.",
                rating: 5,
              },
              {
                name: "Carlos Rodríguez",
                event: "Boda",
                text: "Sonido Celestia TX superó nuestras expectativas. Profesionales, puntuales y con un excelente repertorio de música cristiana. ¡Altamente recomendados!",
                rating: 5,
              },
              {
                name: "Ana Martínez",
                event: "Cumpleaños",
                text: "Contratamos sus servicios para el cumpleaños de mi esposo y fue fantástico. Ambiente familiar, música apropiada y muy buena animación.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`/professional-headshot.png?height=50&width=50&query=professional headshot ${index + 1}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-secondary">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contáctanos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              ¿Listo para hacer de tu evento algo inolvidable? ¡Hablemos!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Información de Contacto</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-phone text-secondary text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-muted-foreground">+1 (832) 605-1653</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <i className="fas fa-envelope text-secondary text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">sonidocelestialtx@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-secondary text-xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-muted-foreground">Houston, Texas y áreas metropolitanas</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="bg-card p-8 rounded-lg shadow-sm border border-border">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Nombre *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Tipo de Evento *</label>
                    <select
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-input"
                      required
                    >
                      <option value="">Seleccionar...</option>
                      <option value="quinceañera">Quinceañera</option>
                      <option value="boda">Boda</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-card-foreground mb-2">Fecha del Evento</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-input"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-card-foreground mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-input"
                    placeholder="Cuéntanos más detalles sobre tu evento..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <i className="fas fa-music text-secondary-foreground"></i>
                </div>
                <span className="text-xl font-bold">Sonido Celestia TX</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Llevando buen ambiente, buena música y muy buena animación para toda fiesta cristiana en Houston, Texas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Fiestas de 15 Años</li>
                <li>Bodas Cristianas</li>
                <li>Cumpleaños</li>
                <li>Eventos Corporativos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>
                  <i className="fas fa-phone mr-2"></i>+1 (832) 605-1653
                </p>
                <p>
                  <i className="fas fa-envelope mr-2"></i>sonidocelestialtx@gmail.com
                </p>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 Sonido Celestia TX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/18326051653"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </motion.a>

      {/* FontAwesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  )
}

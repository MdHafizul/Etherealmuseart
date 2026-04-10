import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import nikahsignageImg from "@/assets/nikahnama-1.jpg";
import artDetail from "@/assets/art-detail-1.jpg";

const services = [
  {
    id: 1,
    title: "Nikah Nama",
    description: "Handcrafted marriage certificates with intricate Islamic geometric patterns",
    image: nikahsignageImg,
    price: "From RM 350",
    link: "/services",
  },
  {
    id: 3,
    title: "Custom Art",
    description: "Bespoke illumination artwork for homes, offices, and special occasions",
    image: artDetail,
    price: "Custom Quote",
    link: "/services",
  },
];

export default function ServicesGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Bespoke Islamic art created exclusively for you. From sacred marriage certificates to personalized workshops.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={service.link}>
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === service.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
                        hoveredId === service.id ? "opacity-100" : "opacity-90"
                      }`}
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-medium">
                        {service.price}
                      </span>
                      <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80 leading-relaxed">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredId === service.id ? 1 : 0,
                          y: hoveredId === service.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <span className="inline-flex items-center text-sm uppercase tracking-wide text-accent hover:text-primary-foreground transition-colors font-medium">
                          Learn More →
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/*  Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24"
        >
          <Card className="overflow-hidden border-accent/20 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 bg-accent/5">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Featured Service</p>
                <h3 className="font-heading text-3xl lg:text-4xl text-primary mb-4 font-light">
                  Nikah Nama  Sacred Marriage Contracts
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A Nikah Nama is more than a marriage certificate  it is a sacred document that preserves the memory of your union. Each piece is hand illuminated with genuine gold leaf, featuring intricate Islamic geometric patterns and your chosen Quranic verses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-accent text-accent-foreground text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors shadow-lg"
                    >
                      Start Your Design
                    </motion.button>
                  </Link>
                  <a
                    href="https://thesilsila.com/pages/nikahnama"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 border border-accent text-primary text-sm uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src={nikahsignageImg}
                  alt="Nikah Nama example"
                  className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-sm" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-accent/20 rounded-sm" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

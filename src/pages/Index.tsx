import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ArtistCarousel from "@/components/sections/ArtistCarousel";
import heroImg from "@/assets/nikahnama-1.jpg";
import sampulImg from "@/assets/sampul-raya-collection.jpg";
import nikahsignageImg from "@/assets/nikahnama-2.jpg";
import sampulBlue from "@/assets/sampul-raya-blue.jpg";
import sampulPink from "@/assets/sampul-raya-pink.jpg";
import artDetail from "@/assets/art-detail-1.jpg";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Handcrafted Islamic geometric Nikah Nama artwork" className="w-full h-full object-cover" />
          {/* Enhanced multi-layered gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,background_100%)]" />
        </div>

        <div className="relative z-10 container text-center py-32 md:py-40 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-accent mb-6 font-medium"
          >
            Handcrafted Islamic Geometric Art
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary leading-[0.95] mb-8"
          >
            Ethereal<br />Muse Art
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed"
          >
            Where geometry meets devotion  bespoke illumination art, Nikah Nama, and curated Raya collections from Malaysia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/shop"
              className="group relative px-10 py-4 text-sm tracking-widest uppercase border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Shop Collection</span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
            <Link
              to="/services"
              className="group relative px-10 py-4 text-sm tracking-widest uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">Custom Nikah Nama</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Artist Carousel Section - From Example */}
      <ArtistCarousel />

      {/* Featured Collections */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Featured Collections</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary font-light mb-4">
              Discover Our Craft
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Explore our signature pieces blending traditional Islamic artistry with contemporary elegance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-none">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={nikahsignageImg} 
                    alt="Bespoke Nikah Nama certificates" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardHeader className="relative -mt-20 z-10">
                  <CardTitle className="text-2xl font-heading font-light text-primary-foreground mb-2">
                    Nikah Nama Collection
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Handcrafted marriage certificates adorned with sacred geometric patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-sm tracking-wide uppercase text-accent hover:text-primary transition-colors font-medium"
                  >
                    Explore Custom Designs →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-none">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={sampulBlue} 
                    alt="Sampul Raya collection" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardHeader className="relative -mt-20 z-10">
                  <CardTitle className="text-2xl font-heading font-light text-primary-foreground mb-2">
                    Sampul Raya
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Elegant envelopes celebrating Hari Raya with timeless artistry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to="/shop" 
                    className="inline-flex items-center text-sm tracking-wide uppercase text-accent hover:text-primary transition-colors font-medium"
                  >
                    Shop Collection →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-none">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={artDetail} 
                    alt="Illumination art detail" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardHeader className="relative -mt-20 z-10">
                  <CardTitle className="text-2xl font-heading font-light text-primary-foreground mb-2">
                    Illumination Art
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Bespoke geometric compositions for sacred spaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to="/shop" 
                    className="inline-flex items-center text-sm tracking-wide uppercase text-accent hover:text-primary transition-colors font-medium"
                  >
                    View Gallery →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - From Example */}
      <ServicesGrid />

    </main>
  );
}

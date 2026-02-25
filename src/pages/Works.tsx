import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { artworks, experiences } from "@/data/products";

const categories = ["All", "Nikah Signage", "Sampul Raya", "Illumination Art"] as const;

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All" ? artworks : artworks.filter((a) => a.category === activeFilter);

  return (
    <main className="pt-24 md:pt-28 min-h-screen">
      <section className="container py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 font-medium">Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-4">Works & Experience</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Explore our collection of handcrafted Islamic geometric art
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-muted/50">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="text-xs tracking-widest uppercase py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col items-start p-6 space-y-3">
                    <h3 className="font-heading text-lg text-primary group-hover:text-accent transition-colors duration-300">
                      {artwork.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {artwork.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {artwork.year}
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience timeline */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Experience</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-light mb-4">Exhibitions & Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Our journey through art exhibitions and community events
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                  <Card className="border-l-4 border-l-accent hover:shadow-xl transition-all duration-500 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="font-heading text-xl text-primary group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-sm font-heading font-semibold shrink-0">
                          {exp.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { artworks } from "@/data/products";

const categories = ["All", "Nikah Nama", "Sampul Raya", "Illumination Art"] as const;

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All" ? artworks : artworks.filter((a) => a.category === activeFilter);

  return (
    <main className="pt-24 md:pt-28 min-h-screen">
      <section className="container py-20 md:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="default" className="text-xs tracking-widest uppercase gap-2 mx-auto">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            Our Portfolio
          </Badge>
          <h1 className="font-artist text-5xl md:text-6xl lg:text-7xl text-primary font-light leading-[1.1]">Works & Gallery</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our collection of handcrafted Islamic geometric art, intricate Nikah certificates, and bespoke designs created with passion and precision.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full max-w-3xl">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 p-0 bg-transparent">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="text-xs tracking-widest uppercase py-3 px-4 font-medium border border-border rounded-md transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary hover:border-accent/50"
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
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="group overflow-hidden border-border shadow-md hover:shadow-lg transition-all duration-300 h-full bg-background">
                  <CardContent className="p-0 relative overflow-hidden">
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col items-start p-5 space-y-3">
                    <h3 className="font-artist text-base text-primary group-hover:text-accent transition-colors duration-300">
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
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16 max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="text-xs tracking-widest uppercase mx-auto">Featured Milestones</Badge>
            <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light">Exhibitions & Events</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our collection has been featured in exhibitions and events celebrating Islamic art and design. More details coming soon...
            </p>
          </motion.div>
          {/* <div className="max-w-3xl mx-auto space-y-6">
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
          </div> */}
        </div>
      </section>
    </main>
  );
}

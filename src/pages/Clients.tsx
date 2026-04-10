import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, CheckCircle2, Users, Award, Sparkles, Heart, Zap } from "lucide-react";

const clients = [
  {
    name: "Fatimah & Ahmad",
    project: "Bespoke Nikah Nama",
    year: "2024",
    testimonial: "The craftsmanship and attention to detail exceeded all our expectations. Our Nikah Nama is truly a work of art that we will treasure forever.",
    image: "/assets/nikahnama-1.jpg"
  },
  {
    name: "Zainab & Yusuf",
    project: "Premium Nikah Nama with Custom Calligraphy",
    year: "2024",
    testimonial: "Working with Ethereal Muse Art was an absolute pleasure. The artist understood our vision perfectly and created something beyond beautiful.",
    image: "/assets/nikahnama-2.jpg"
  },
  {
    name: "Sarah & Ibrahim",
    project: "Classic Nikah Nama",
    year: "2023",
    testimonial: "The gold leaf work is exquisite. This certificate is not just a document — it's a precious heirloom for generations to come.",
    image: "/assets/art-detail-1.jpg"
  }
];

const collaborations = [
  {
    name: "The Silsila",
    description: "Collaborative partnership for Nikah Nama designs and Islamic art workshops",
    year: "2023-Present",
    type: "Strategic Partnership"
  },
  {
    name: "Islamic Art Collective Malaysia",
    description: "Joint exhibitions and cultural events promoting traditional Islamic illumination",
    year: "2024",
    type: "Cultural Collaboration"
  },
  {
    name: "Raya Bazaar KL",
    description: "Featured vendor for Sampul Raya collections during festive seasons",
    year: "2024-2025",
    type: "Retail Partnership"
  }
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "100+", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: CheckCircle2, label: "Projects Completed", value: "150+", color: "from-emerald-500/20 to-teal-500/20" },
  { icon: Award, label: "Years Experience", value: "5+", color: "from-amber-500/20 to-orange-500/20" },
];

export default function ClientsPage() {
  return (
    <main className="pt-24 md:pt-28 min-h-screen bg-background">
      {/* Header */}
      <section className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4 text-xs tracking-widest uppercase gap-2">
            <Heart className="w-3 h-3" />
            Trusted Partners
          </Badge>
          <h1 className="font-artist text-4xl md:text-6xl lg:text-7xl text-primary font-light mb-6">
            Beloved by Clients
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Trusted by couples, families, and institutions to create meaningful Islamic art that celebrates sacred moments and cultural heritage. Each project reflects our commitment to excellence and personal connection.
          </p>
        </motion.div>

        {/* Stats - Enhanced */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className={`relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-500 border-accent/20 bg-gradient-to-br ${stat.color}`}>
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-full -ml-8 -mb-8" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-artist text-5xl text-accent font-light mb-3">{stat.value}</p>
                  <p className="text-sm text-muted-foreground tracking-wider uppercase font-medium">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials - Enhanced */}
      <section className="bg-gradient-to-b from-muted/40 to-muted/20 py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase gap-2">
              <Sparkles className="w-3 h-3" />
              Client Stories
            </Badge>
            <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-6">
              Voices of Joy
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories from couples and families whose special moments were elevated by our craft
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-accent/50 group border-border/50">
                  {/* Image section at top */}
                  <div className="relative h-32 overflow-hidden bg-muted">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40" />
                  </div>

                  <CardContent className="p-6 space-y-4 relative">
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-accent/50" />
                    </div>

                    {/* Testimonial */}
                    <p className="text-sm text-foreground/85 leading-relaxed italic">
                      "{client.testimonial}"
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                    {/* Client info */}
                    <div className="pt-2 space-y-2">
                      <p className="font-artist text-lg text-primary group-hover:text-accent transition-colors">
                        {client.name}
                      </p>
                      <div className="space-y-1">
                        <p className="text-xs text-accent font-medium tracking-wide">{client.project}</p>
                        <Badge variant="outline" className="text-xs">
                          {client.year}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations - Enhanced */}
      <section className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase gap-2">
            <Zap className="w-3 h-3" />
            Our Network
          </Badge>
          <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-6">
            Strategic Partnerships
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collaborating with organisations and collectives to promote Islamic art, cultural heritage, and meaningful celebrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collaborations.map((collab, i) => (
            <motion.div
              key={collab.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-accent/50 group border-border/50 bg-gradient-to-br from-background to-muted/20">
                {/* Decorative top accent */}
                <div className="h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
                
                <CardContent className="p-7 space-y-4">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline" className="text-xs font-medium tracking-wide">
                      {collab.type}
                    </Badge>
                    <span className="text-xs text-accent font-semibold">{collab.year}</span>
                  </div>

                  {/* Partner name */}
                  <h3 className="font-artist text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                    {collab.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {collab.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-accent/20 to-transparent" />

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-wider text-accent font-medium group-hover:translate-x-1 transition-transform">
                      Learn More
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-muted/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-6">
              Let's Create Together
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
              Whether you're looking to commission a custom Nikah Nama, explore collaboration opportunities, or discuss bulk orders for your event, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:etherealmuseartventures@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground text-sm uppercase tracking-widest font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-sm"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://wa.me/60183603504"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent text-sm uppercase tracking-widest font-medium hover:bg-accent/10 transition-all duration-300 rounded-sm"
              >
                Message Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

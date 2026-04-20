import { motion } from "motion/react";
import { Check, Mail, Sparkles } from "lucide-react";
import nikahsignage from "@/assets/nikahnama-1.jpg";
import nikahDesign1 from "@/assets/nikahnamadesign1.png";
import nikahDesign2 from "@/assets/nikanhnamadesign2.png";
import nikahDesign3 from "@/assets/nikahnamadesign3.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function NikahnmaPage() {

  const pricingPlans = [
    {
      title: "Without Frame",
      color: "bg-blue-50",
      sizes: [
        { size: "A4", price: "RM 380" },
        { size: "A3", price: "RM 580" },
        { size: "A2", price: "RM 650" },
        { size: "A1", price: "RM 880" },
        { size: "A0", price: "RM 1200" },
      ],
    },
    {
      title: "With Frame",
      color: "bg-purple-50",
      sizes: [
        { size: "A4", price: "RM 440" },
        { size: "A3", price: "RM 650" },
        { size: "A2", price: "RM 880" },
        { size: "A1", price: "RM 1200" },
        { size: "A0", price: "RM 1500" },
      ],
    },
  ];

  const paperOptions = [
    {
      name: "On Paper",
      paper: "Ivory paper 250gsm",
      withoutFrame: [
        { size: "A4", price: "RM 380" },
        { size: "A3", price: "RM 580" },
      ],
      withFrame: [
        { size: "A4", price: "RM 450" },
        { size: "A3", price: "RM 660" },
      ],
    },
  ];

  const processSteps = [
    {
      title: "Draft",
      description: "This stage focuses on capturing the general shape, proportion, and placement of elements in the composition. At this point, no intricate details are added.",
    },
    {
      title: "Motifs and Pattern Blocking",
      description: "We'll discuss which floral motifs to use, their placement and integration into the composition.",
    },
    {
      title: "Colouring",
      description: "Adding colors to the floral patterns as well as other elements of the drawing.",
    },
    {
      title: "Payment & Delivery",
      description: "50% deposit is needed to start the works assigned. The remaining 50% fee to be paid after final work is complete and delivery will be arranged after the payment is received.",
    },
  ];

  const designOptions = [
    {
      image: nikahDesign1,
      title: "Design 1",
      description: "Elegant Islamic geometric patterns with deep blue and gold accents. Featuring traditional manuscript-inspired borders with intricate floral motifs.",
      features: ["Traditional Islamic borders", "Hand-painted gold elements", "Timeless design"]
    },
    {
      image: nikahDesign2,
      title: "Design 2",
      description: "Rich maroon and cream color palette with sophisticated geometric designs. Perfect for a luxurious, formal aesthetic.",
      features: ["Rich color combinations", "Premium gold leafing", "Formal elegance"]
    },
    {
      image: nikahDesign3,
      title: "Design 3",
      description: "Soft purple and gold palette with delicate floral arrangements. A modern interpretation of traditional Islamic art with contemporary appeal.",
      features: ["Soft, calming palette", "Contemporary design", "Unique aesthetics"]
    },
  ];

  const serviceTerms = [
    {
      number: "2",
      title: "Payment Terms",
      points: [
        "A 50% deposit is required before work begins.",
        "The remaining balance must be paid before delivery.",
        "Work will only start after deposit is received.",
      ],
    },
    {
      number: "3",
      title: "Copyright & Usage",
      points: [
        "All copyright remains with the Artist/Business.",
        "Artwork is for personal use only.",
        "Client may not reproduce, resell, or use for commercial purposes without permission.",
      ],
    },
    {
      number: "4",
      title: "AI Restriction",
      points: [
        "The artwork may not be used for AI training, machine learning, or any digital generation.",
      ],
    },
  ];

  return (
    <main className="pt-24 md:pt-28 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={nikahsignage} alt="Nikah Certificate handcrafted marriage certificate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,transparent_0%,background_70%)]" />
        </div>
        <div className="relative container py-28 md:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <Badge variant="default" className="mb-6 text-xs tracking-widest uppercase gap-2">
              <span className="w-2 h-2 rounded-full bg-current"></span>
              Featured Service
            </Badge>
            <h1 className="font-artist text-5xl md:text-6xl lg:text-7xl text-primary font-light mb-8 leading-[1.1]">
              Nikah Certificate
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Celebrate the union of two hearts with our beautifully crafted Nikah certificate designs, inspired by old Islamic manuscripts and adorned with intricate hand-drawn details that bring a timeless, meaningful charm to your special day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <Badge variant="secondary" className="mx-auto text-xs tracking-widest uppercase">Transparent Pricing</Badge>
          <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-6">Nikah Certificate Pricing</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each Nikahnama piece is professionally printed, with selected gold elements carefully hand-painted for a refined finish. Choose your size and framing preference.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full border-border bg-background">
                <CardHeader className="pb-5 border-b border-border/40">
                  <CardTitle className="font-artist text-2xl text-primary text-center">
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {plan.sizes.map((item, idx) => (
                    <motion.div 
                      key={item.size} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-center justify-between py-2.5 px-0 border-b border-border/20 last:border-0 hover:translate-x-1 transition-transform group"
                    >
                      <span className="text-sm text-primary font-medium">{item.size}</span>
                      <span className="text-base text-accent font-medium">{item.price}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Paper Options Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <Badge variant="secondary" className="mx-auto text-xs tracking-widest uppercase">Material & Finishing</Badge>
            <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light">Premium Paper Options</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">Ivory paper 250gsm with hand-painted gold elements</p>
          </motion.div>

          {paperOptions.map((option) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <Card className="overflow-hidden border-border shadow-md hover:shadow-lg transition-all duration-300 bg-background">
                <CardHeader className="pb-6 border-b border-border/40">
                  <CardTitle className="font-artist text-3xl text-primary">{option.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2 font-medium tracking-wide">{option.paper}</p>
                </CardHeader>
                
                <CardContent className="p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div>
                        <Badge variant="outline" className="mb-4 text-xs">Without Frame</Badge>
                        <div className="space-y-4">
                          {option.withoutFrame.map((item, idx) => (
                            <motion.div 
                              key={item.size} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-center justify-between py-2.5 border-b border-border/20 last:border-0 hover:translate-x-1 transition-transform"
                            >
                              <span className="text-sm font-medium text-primary">{item.size}</span>
                              <span className="text-base text-accent font-medium">{item.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <Badge variant="outline" className="mb-4 text-xs border-accent/50 text-primary">With Frame</Badge>
                        <div className="space-y-4">
                          {option.withFrame.map((item, idx) => (
                            <motion.div 
                              key={item.size} 
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-center justify-between py-2.5 border-b border-border/20 last:border-0 hover:-translate-x-1 transition-transform"
                            >
                              <span className="text-sm font-medium text-primary">{item.size}</span>
                              <span className="text-base text-accent font-medium">{item.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Design Showcase */}
      <section className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="default" className="text-xs tracking-widest uppercase gap-2 mx-auto">
            <Sparkles className="w-3 h-3" />
            Available Designs
          </Badge>
          <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light">Featured Collections</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our curated selection of Nikah certificate designs, each crafted with meticulous attention to detail and Islamic artistic traditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {designOptions.map((design, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-border shadow-md hover:shadow-xl transition-all duration-300 h-full bg-background flex flex-col">
                  {/* Image Container */}
                  <CardContent className="p-0 relative overflow-hidden">
                    <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                      <img 
                        src={design.image} 
                        alt={design.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>

                  {/* Content Container */}
                  <CardHeader className="pb-4 border-b border-border/40 flex-1">
                    <CardTitle className="font-artist text-xl text-primary">{design.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{design.description}</p>
                  </CardHeader>

                  {/* Features */}
                  <CardContent className="pt-6 pb-6">
                    <div className="space-y-2">
                      {design.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* CTA Button */}
                  <div className="px-6 pb-6 mt-auto">
                    <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                      <a href="https://wa.me/60183603504?text=Hi! I'm interested in ordering a Nikah Certificate. Can you tell me more about the available designs?">
                        Inquire About This Design
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Design Section */}
      <section className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="default" className="text-xs tracking-widest uppercase gap-2 mx-auto">
            Personalized Creations
          </Badge>
          <h2 className="font-artist text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-6">Custom Design Service</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive custom design services for Nikah certificates and wedding displays. We're open to discussing your preferred theme, details, and colour palette to bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-xl p-8 md:p-10 hover:shadow-xl transition-all duration-500"
          >
            <h3 className="font-artist text-2xl md:text-3xl text-primary mb-4">Looking for Something Unique?</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              If you're looking for something unique and different from our existing designs, we can create a fully custom piece tailored just for you. Please note that additional charges will apply for custom designing and extra design work.
            </p>
            <div className="space-y-3">
              {[
                "Fully customizable design based on your preferences",
                "Collaborative design process with multiple revision rounds",
                "Premium hand-painted gold leaf elements"
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-artist text-3xl text-primary mb-8 text-center">Our Creative Process</h3>
            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-artist font-bold text-lg">
                        {i + 1}
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-accent to-accent/30 mt-2" />
                      )}
                    </div>
                    <div className="pb-6 flex-1">
                      <h4 className="font-artist text-xl text-primary mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className="border-border shadow-md hover:shadow-lg transition-all duration-300 bg-background">
              <CardHeader className="pb-4 border-b border-border/40">
                <CardTitle className="text-lg text-primary">Custom Designs</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <p className="font-artist text-3xl text-accent font-light">4–5</p>
                  <span className="text-sm text-muted-foreground">weeks</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Please allow 4–5 weeks for fully custom designs</p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-md hover:shadow-lg transition-all duration-300 bg-background">
              <CardHeader className="pb-4 border-b border-border/40">
                <CardTitle className="text-lg text-primary">Available Designs</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <p className="font-artist text-3xl text-accent font-light">2–4</p>
                  <span className="text-sm text-muted-foreground">weeks</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Available designs typically take 2–4 weeks depending on complexity</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Service Terms Section */}
      <section className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary" className="mx-auto text-xs tracking-widest uppercase">
            Service Policy
          </Badge>
          <h2 className="font-artist text-4xl md:text-5xl text-primary font-light">Terms for Nikah Nama Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceTerms.map((term, i) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border shadow-md hover:shadow-lg transition-all duration-300 bg-background">
                <CardHeader className="pb-4 border-b border-border/40">
                  <CardDescription className="text-xs tracking-widest uppercase text-accent">
                    {term.number}
                  </CardDescription>
                  <CardTitle className="text-2xl font-artist text-primary">{term.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {term.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-artist text-4xl md:text-5xl text-primary font-light leading-[1.2]">Ready to Begin?</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Contact us to place your order or discuss custom design options for your special day. Our team is here to bring your vision to life.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Button size="lg" className="gap-2 text-base" asChild>
                <a href="https://wa.me/60183603504?text=Hi! I'm interested in ordering a Nikah Certificate.">
                  <Mail className="w-5 h-5" />
                  Order via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="mailto:contact@etherealmuseart.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

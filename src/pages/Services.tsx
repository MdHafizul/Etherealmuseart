import { useState } from "react";
import { motion } from "motion/react";
import { nikahSignagePackages } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check, Palette, PenTool, BookOpen } from "lucide-react";
import nikahsignage from "@/assets/nikahnama-1.jpg";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const otherServices = [
  { icon: Palette, title: "Custom Illumination", description: "Commission a bespoke illumination artwork  tezhip, geometric, or floral  tailored to your space and preferences." },
  { icon: PenTool, title: "Corporate Art", description: "Islamic geometric art for offices, hotels, and public spaces. Large scale installations and framed pieces available." },
  { icon: BookOpen, title: "Workshops", description: "Learn the art of Islamic geometry in guided workshops. Suitable for beginners and art enthusiasts alike." },
];

export default function ServicesPage() {
  const { addItem } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<typeof nikahSignagePackages[0] | null>(null);
  const [formData, setFormData] = useState({ name1: "", name2: "", date: "", verse: "" });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSelectPackage = (pkg: typeof nikahSignagePackages[0]) => {
    setSelectedPackage(pkg);
    setDialogOpen(true);
  };

  const handleAddService = () => {
    if (selectedPackage) {
      addItem({ 
        id: selectedPackage.id, 
        name: `Nikah Signage  ${selectedPackage.name}`, 
        price: selectedPackage.price, 
        image: nikahsignage, 
        type: "service" 
      });
      setDialogOpen(false);
      setSelectedPackage(null);
      setFormData({ name1: "", name2: "", date: "", verse: "" });
    }
  };

  return (
    <main className="pt-24 md:pt-28 min-h-screen">
      {/* Nikah Signage hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={nikahsignage} alt="Nikah Signage handcrafted marriage certificate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="relative container py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 font-medium">Featured Service</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-6">Nikah Signage</h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              A handcrafted marriage certificate adorned with Islamic geometric illumination  transforming a sacred document into a lifelong heirloom. Inspired by centuries of tradition, made uniquely yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Choose Your Package</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-light mb-4">Nikah Signage Packages</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Select from our curated packages, each meticulously crafted with traditional Islamic geometric patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {nikahSignagePackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i === 1 ? "md:scale-105" : ""}
            >
              <motion.div 
                whileHover={{ y: -8, scale: i === 1 ? 1.02 : 1 }} 
                transition={{ duration: 0.3 }}
              >
                <Card className={`h-full flex flex-col transition-all duration-500 hover:shadow-2xl ${
                  i === 1 ? "border-accent shadow-xl" : "hover:border-accent/50"
                }`}>
                  <CardHeader className="space-y-4 pb-6">
                    {i === 1 && (
                      <Badge className="w-fit mx-auto bg-accent text-accent-foreground shadow-lg">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="font-heading text-2xl text-center text-primary">
                      {pkg.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground">RM</span>
                      <span className="font-heading text-4xl text-accent">{pkg.price}</span>
                    </div>
                    <CardDescription className="text-center text-xs leading-relaxed">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <motion.div 
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-xs text-foreground/80 leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Dialog open={dialogOpen && selectedPackage?.id === pkg.id} onOpenChange={(open) => {
                      setDialogOpen(open);
                      if (!open) setSelectedPackage(null);
                    }}>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => handleSelectPackage(pkg)}
                          variant={i === 1 ? "default" : "outline"}
                          className="w-full gap-2 text-xs tracking-widest uppercase"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Select Package
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader className="space-y-3">
                          <DialogTitle className="font-heading text-2xl text-primary">
                            Customise Your Nikah Signage
                          </DialogTitle>
                          <DialogDescription className="text-sm leading-relaxed">
                            Personalize your certificate with the couple's names, wedding date, and an optional Quranic verse.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 py-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name1" className="text-xs font-medium">
                                Partner 1 Name
                              </Label>
                              <Input
                                id="name1"
                                value={formData.name1}
                                onChange={(e) => setFormData({ ...formData, name1: e.target.value })}
                                placeholder="Enter name"
                                className="text-sm"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="name2" className="text-xs font-medium">
                                Partner 2 Name
                              </Label>
                              <Input
                                id="name2"
                                value={formData.name2}
                                onChange={(e) => setFormData({ ...formData, name2: e.target.value })}
                                placeholder="Enter name"
                                className="text-sm"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="date" className="text-xs font-medium">
                              Wedding Date
                            </Label>
                            <Input
                              id="date"
                              type="date"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="text-sm"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="verse" className="text-xs font-medium">
                              Quranic Verse <span className="text-muted-foreground font-normal">(optional)</span>
                            </Label>
                            <Input
                              id="verse"
                              value={formData.verse}
                              onChange={(e) => setFormData({ ...formData, verse: e.target.value })}
                              placeholder="e.g. Ar-Rum 30:21"
                              className="text-sm"
                            />
                          </div>
                          
                          {selectedPackage && (
                            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 space-y-2">
                              <p className="text-xs font-medium text-foreground">Selected Package</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">{selectedPackage.name}</span>
                                <span className="font-heading text-lg text-accent">RM {selectedPackage.price}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <DialogFooter className="gap-3 sm:gap-0">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setDialogOpen(false);
                              setSelectedPackage(null);
                            }}
                            className="text-xs tracking-widest uppercase"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="button"
                            onClick={handleAddService}
                            className="text-xs tracking-widest uppercase gap-2"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-3"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium">More Services</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-light mb-4">What We Offer</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our additional services ranging from custom commissions to educational workshops
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {otherServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:border-accent/50">
                    <CardHeader className="space-y-4 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                        <svc.icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="font-heading text-xl text-primary">
                        {svc.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs text-center leading-relaxed">
                        {svc.description}
                      </CardDescription>
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

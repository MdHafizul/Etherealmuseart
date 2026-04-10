import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import artistPhoto from "@/assets/artist-photo.jpg";
import artDetail from "@/assets/art-detail-2.jpg";

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">The Artist</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary font-light">About Ethereal Muse Art</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={artistPhoto} alt="The artist at work on Islamic geometric art" className="w-full rounded-sm shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-light">A Journey in Geometry & Light</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="text-xs">Ipoh, Perak</Badge>
              <Badge variant="secondary" className="text-xs">Islamic Illumination</Badge>
              <Badge variant="secondary" className="text-xs">Tezhip</Badge>
              <Badge variant="secondary" className="text-xs">Traditional Techniques</Badge>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Ethereal Muse Art was born from a deep reverence for the mathematical beauty found in Islamic geometric patterns — art that speaks of the infinite through finite lines and curves.
              </p>
              <p>
                Based in <span className="text-accent font-medium">Ipoh, Perak, Malaysia</span>, the artist specialises in traditional Islamic illumination (tezhip), geometric pattern design, and bespoke Nikah Nama  handcrafted marriage certificates that transform a sacred document into a lifelong heirloom.
              </p>
              <p>
                Each piece is meticulously created by hand using traditional techniques: <span className="text-accent font-medium">compass and straightedge constructions, natural pigments, shell gold, and careful burnishing</span>. The work bridges centuries of artistic heritage with contemporary Malaysian sensibilities.
              </p>
              <p>
                Beyond personal commissions, Ethereal Muse Art has been featured in pop up stores across KL, from <span className="text-accent font-medium">Bangsar Village to the Islamic Arts Museum</span>, sharing the beauty of geometric art with a wider audience through accessible products like sampul raya and art prints.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <Card className="order-2 lg:order-1 border-accent/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">Philosophy</p>
              <CardTitle className="font-heading text-2xl md:text-3xl text-primary font-light">
                Sacred Geometry, Modern Soul
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Islamic geometric art is, at its heart, a contemplative practice. Every pattern begins from a single point and expands into infinite complexity — a metaphor for the divine unity underlying creation. This philosophy guides every stroke: patience over speed, precision over spectacle, meaning over decoration.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="outline" className="text-xs">Patience</Badge>
                <Badge variant="outline" className="text-xs">Precision</Badge>
                <Badge variant="outline" className="text-xs">Contemplation</Badge>
                <Badge variant="outline" className="text-xs">Unity</Badge>
              </div>
            </CardContent>
          </Card>
          <div className="order-1 lg:order-2">
            <img src={artDetail} alt="Close-up of illumination artwork" className="w-full rounded-sm shadow-lg" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}

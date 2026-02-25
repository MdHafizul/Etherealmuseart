import { motion } from "motion/react";
import { MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import artistImg from "@/assets/artist.jpg";

// Artist info
const artistInfo = {
  name: "Ethereal Muse Art",
  location: "Ipoh, Perak, Malaysia",
  description: "Master calligrapher and illumination artist specializing in Islamic geometric art. With over a decade of experience, each piece is crafted with dedication to traditional techniques and modern aesthetics.",
  bio: "Every artwork is a meditation in geometry, color, and devotion where mathematics meets spirituality. Inspired by the rich heritage of Islamic art from the Ottoman and Persian empires, we bring centuries old techniques into contemporary spaces.",
  achievements: [
    "10+ years of experience",
    "Featured in local exhibitions",
    "100+ custom Nikah Signage created",
    "Traditional gold leaf illumination",
  ],
};

export default function ArtistCarousel() {

  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">The Artist</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-4">
            About Our Craft
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {artistInfo.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Artist Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square"
          >
            <Card className="overflow-hidden border-none shadow-2xl h-full">
              <img
                src={artistImg}
                alt="Ethereal Muse Art Artist Profile"
                className="w-full h-full object-cover"
              />
            </Card>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-3xl lg:text-4xl text-primary mb-3 font-light">
                {artistInfo.name}
              </h3>
              <p className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                {artistInfo.location}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {artistInfo.bio}
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {artistInfo.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.instagram.com/etherealmuseart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <Instagram className="w-4 h-4" />
                  Follow Journey
                </Button>
              </a>
              <a href="mailto:hello@etherealmuseart.com">
                <Button variant="outline">
                  Commission Artwork
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <main className="pt-24 md:pt-28">
      <section className="container py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Pop-up Store</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary font-light">Shop</h1>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            Curated products featuring handcrafted Islamic geometric art — from festive sampul raya to art prints and ceramics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-border rounded-sm overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 space-y-2">
                <p className="text-xs tracking-widest uppercase text-accent">{product.category.replace("-", " ")}</p>
                <h3 className="font-heading text-lg text-primary">{product.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between pt-3">
                  <span className="font-heading text-xl text-primary">RM {product.price}</span>
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image, type: "product" })}
                    className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

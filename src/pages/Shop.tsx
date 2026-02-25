import { motion } from "motion/react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ShopPage() {
  const { addItem } = useCart();

  const getCategoryLabel = (category: string) => {
    return category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  return (
    <main className="pt-24 md:pt-28 min-h-screen bg-background">
      <section className="container py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-xs tracking-widest uppercase">
            Pop up Store
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary font-light mb-6">
            Shop Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Curated products featuring handcrafted Islamic geometric art — from festive sampul raya to art prints and ceramics.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="group overflow-hidden border-border hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.stock < 5 && product.stock > 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <Badge variant="destructive" className="text-xs shadow-lg">
                          Only {product.stock} left
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs font-normal">
                        {getCategoryLabel(product.category)}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-xl line-clamp-1 group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="font-heading text-2xl font-semibold text-primary">
                      RM {product.price.toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full transition-all duration-300"
                        onClick={() => addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          type: "product"
                        })}
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? (
                          <>
                            <Package className="w-4 h-4 mr-2" />
                            Out of Stock
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Add to Cart
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

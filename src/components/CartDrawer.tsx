import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "confirmed">("cart");

  const handleCheckout = () => setCheckoutStep("checkout");
  const handleConfirm = () => {
    setCheckoutStep("confirmed");
    setTimeout(() => {
      clearCart();
      setCheckoutStep("cart");
      setIsOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCheckoutStep("cart");
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="w-full sm:max-w-md bg-background flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl">
            {checkoutStep === "cart" && "Your Cart"}
            {checkoutStep === "checkout" && "Checkout"}
            {checkoutStep === "confirmed" && "Order Confirmed"}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto mt-4">
          <AnimatePresence mode="wait">
            {checkoutStep === "cart" && (
              <motion.div key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                {items.length === 0 ? (
                  <p className="text-muted-foreground text-sm text-center py-12">Your cart is empty.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-secondary/50">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">RM {item.price}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-muted-foreground hover:text-foreground"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus className="w-3 h-3" /></button>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive self-start"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))
                )}
              </motion.div>
            )}

            {checkoutStep === "checkout" && (
              <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-heading text-lg">Order Summary</h3>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>RM {item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>RM {total}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-lg">Payment (Simulated)</h3>
                  <div className="space-y-2">
                    <input placeholder="Cardholder Name" className="w-full px-3 py-2 text-sm rounded border border-input bg-background" />
                    <input placeholder="4242 4242 4242 4242" className="w-full px-3 py-2 text-sm rounded border border-input bg-background" />
                    <div className="grid grid-cols-2 gap-2">
                      <input placeholder="MM/YY" className="px-3 py-2 text-sm rounded border border-input bg-background" />
                      <input placeholder="CVC" className="px-3 py-2 text-sm rounded border border-input bg-background" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {checkoutStep === "confirmed" && (
              <motion.div key="confirmed" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <span className="text-accent text-2xl">✓</span>
                </div>
                <h3 className="font-heading text-xl">Thank You!</h3>
                <p className="text-sm text-muted-foreground">Your mock order has been placed successfully.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {items.length > 0 && checkoutStep !== "confirmed" && (
          <div className="border-t border-border pt-4 space-y-3">
            {checkoutStep === "cart" && (
              <>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>RM {total}</span>
                </div>
                <Button onClick={handleCheckout} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Proceed to Checkout
                </Button>
              </>
            )}
            {checkoutStep === "checkout" && (
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setCheckoutStep("cart")} className="flex-1">Back</Button>
                <Button onClick={handleConfirm} className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">Confirm Order</Button>
              </div>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

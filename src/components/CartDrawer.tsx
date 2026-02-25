import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Smartphone, Building2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("fpx");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setCheckoutOpen(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      setTimeout(() => {
        clearCart();
        setOrderComplete(false);
        setCheckoutOpen(false);
        setIsOpen(false);
      }, 3000);
    }, 2000);
  };

  const formatPrice = (price: number) => `RM ${price.toFixed(2)}`;

  return (
    <>
      {/* Cart Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg flex flex-col">
          <SheetHeader>
            <SheetTitle className="font-heading text-xl flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-accent" />
              Shopping Cart
              {items.length > 0 && (
                <Badge variant="secondary" className="ml-2">{items.length} items</Badge>
              )}
            </SheetTitle>
          </SheetHeader>

          <Separator className="my-4" />

          {/* Cart Items */}
          <ScrollArea className="flex-1 pr-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-sm font-medium mb-2">Your cart is empty</p>
                <p className="text-xs text-muted-foreground">Add some beautiful art to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1 truncate">{item.name}</h4>
                      <p className="text-sm font-semibold text-accent mb-3">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right text-sm font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {/* Footer */}
          {items.length > 0 && (
            <>
              <Separator className="my-4" />
              <SheetFooter className="flex-col gap-4">
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{formatPrice(total)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg font-semibold">Total</span>
                    <span className="font-heading text-xl font-bold text-primary">{formatPrice(total)}</span>
                  </div>
                </div>
                <Button size="lg" className="w-full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Checkout Dialog */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {!orderComplete ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Checkout</DialogTitle>
                <DialogDescription>
                  Complete your purchase with secure payment (simulated)
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handlePayment} className="space-y-6 mt-4">
                {/* Order Summary */}
                <div>
                  <h3 className="font-semibold mb-3">Order Summary</h3>
                  <ScrollArea className="max-h-[200px] pr-4">
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            {item.name} <span className="text-xs">× {item.quantity}</span>
                          </span>
                          <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="flex justify-between mt-3 pt-3 border-t border-border">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                <Separator />

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                      <RadioGroupItem value="fpx" id="fpx" />
                      <Label htmlFor="fpx" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Building2 className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium">FPX Online Banking</p>
                          <p className="text-xs text-muted-foreground">Direct bank transfer</p>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium">Credit/Debit Card</p>
                          <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                      <RadioGroupItem value="qr" id="qr" />
                      <Label htmlFor="qr" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Smartphone className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium">QR Payment (DuitNow)</p>
                          <p className="text-xs text-muted-foreground">Scan to pay</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Card Details (if card selected) */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 p-4 border border-border rounded-lg bg-muted/30">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                      </div>
                    </div>
                  </div>
                )}

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setCheckoutOpen(false)} disabled={isProcessing}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isProcessing} className="min-w-[120px]">
                    {isProcessing ? "Processing..." : `Pay ${formatPrice(total)}`}
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <DialogTitle className="font-heading text-2xl mb-2">Order Confirmed!</DialogTitle>
              <DialogDescription className="text-base">
                Thank you for your purchase. A confirmation email will be sent shortly.
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

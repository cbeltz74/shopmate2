import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
    useTitle("Cart");

    const items_in_cart = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}
      ]

  return (
    <main>
        { items_in_cart.map((item_in_cart) => (
            <CartCard key={item_in_cart.id} item_in_cart={item_in_cart} />
        ))}
    </main>
  )
}

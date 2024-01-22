import Button from "@/src/components/global/Button";
import CartItem from "@/src/components/global/CartItem";
import { TrashIcon } from "@heroicons/react/16/solid";

const product = [
  {
    id: 1,
    name: "Fruit Tea Blackcurrant",
    promo: 10000,
    price: 7000,
    image: "/images/product/product1.png",
  },
  {
    id: 2,
    name: "Fruit Tea Blackcurrant",
    promo: 10000,
    price: 7000,
    image: "/images/product/product1.png",
  },
];

export default function Cart() {
  return (
    <div className="w-full min-h-[60vh] 2xl:w-3/4 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 rounded-md text-dark dark:text-light p-0 md:p-6">
      <div className="w-full lg:w-2/3 p-1 lg:py-4 lg:px-8">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl">Keranjang</h2>
          <Button
            className="focus:ring-0 gap-2"
            variant="outlinePrimary"
            size="sm"
          >
            <TrashIcon className="w-4" /> Hapus Semua
          </Button>
        </div>
        <hr className=" border-primary dark:border-primaryDark mt-4" />
        {product.map((item) => (
          <CartItem key={"cart" + item.id} data={item} />
        ))}
      </div>
      <div className="w-full lg:w-1/3">
        <div className="p-8 rounded-md bg-secondary/10">
          <h2 className="text-2xl">Ringkasan Pesanan</h2>
          <hr className="dark:border-2 border-primary dark:border-primaryDark my-4" />
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>Rp 10000</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Discount</p>
            <p>Rp 2000</p>
          </div>
          <hr className="dark:border-2 border-primary dark:border-primaryDark my-4" />
          <div className="flex flex-row justify-between font-semibold">
            <p>Total Belanja</p>
            <p>Rp 8000</p>
          </div>
          <Button className="w-full mt-4">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

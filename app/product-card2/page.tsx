"use client";

import { PreviewComponent } from "@/components/preview-page";
import ProductCard2 from "@/registry/components/product-card2/product-card2";

export default function Page() {
  return (
    <PreviewComponent>
      <ProductCard2
        productName="React Running"
        productModel="Shoe 2"
        price={120}
        sizes={["9", "9.5", "10", "10.5", "11"]}
        colors={[
          { name: "Black colorway", value: "#1a1a1a" },
          { name: "Light colorway", value: "#e5e5e5" },
        ]}
        imageUrl="https://placehold.co/280x200"
        onFavorite={(favorited: boolean) => console.log("Favorite:", favorited)}
        onAddToCart={(size: string, color: string) =>
          console.log("Add to cart:", { size, color })
        }
      />
    </PreviewComponent>
  );
}

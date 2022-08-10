import React from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>Product Detail {router.query.id}</h1>
      <button
        onClick={() => {
          router.push("/product");
        }}
      >
        Back to All Product
      </button>
    </div>
  );
}

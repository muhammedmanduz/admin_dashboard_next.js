import Loader from "@/app/components/loader";
import { getProducts } from "@/app/utils/api";
import Link from "next/link";
import React, { Suspense } from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div>
      <div className="flex  justify-between items-center">
        <h1 className="font-semibold text-3xl">Ürünler</h1>

        <Link
          href="/products/new"
          className="bg-green-400 hover:bg-green-500 transition py-1 px-3 rounded-lg text-white"
        >
          Ürün Ekle
        </Link>
      </div>

      <Suspense fallback={<Loader designs="my-20" />}>
        <List />
      </Suspense>
    </div>
  );
};

const List = async () => {
  const data = await getProducts();
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(data);

  return (
    <div className="mt-5 grid grid-cols-2 md:grid-flow-cols-3 lg:grid-cols-4 gap-5">
      {data.map((prodduct) => (
        <Card product={prodduct} key={prodduct.id} />
      ))}
    </div>
  );
};
export default Products;

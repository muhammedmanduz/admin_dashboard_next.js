"use client";
import { inputs } from "@/app/utils/constants";
import Input from "./input";
import Link from "next/link";
import { FormEvent } from "react";
import { createdProduct, updatedProduct } from "@/app/utils/api";
import { Product } from "@/app/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  editItem?: Product;
};

const Form = ({ editItem }: Props) => {
  const router = useRouter();

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //formdan data örneği al
    const formData = new FormData(e.target as HTMLFormElement);
    const productData = Object.fromEntries(formData.entries());

    if (!editItem) {
      //resim ekle
      const id = Math.round(Math.random() * 100);
      productData.image_url = `https://picsum.photos/seed/${id}/500/500`;

      //varsayılan rating ve yorum sayısı belirle
      productData.rating = "4";
      productData.reviewsCount = "0";

      //api a istek at
      createdProduct(productData as Product)
        .then(() => {
          toast.success("Ürün oluşturuldu");
          router.push("/products"); //başarılı olursa ürünler sayfasına yönlendir
          router.refresh();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      //! ürünü düzenle
      let updatedItem = { ...editItem, ...productData };
      updatedProduct(updatedItem)
        .then(() => {
          toast.success("Ürün bilgileri güncellendi");

          router.push("/products");
          router.refresh();
        })
        .catch(() => {
          toast.error("Güncelleme işlemi başarısız!");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
      {inputs.map((i, key) => (
        <Input
          item={i}
          key={key}
          //@ts-ignore
          value={editItem ? editItem[i.name] : ""}
        />
      ))}

      <div className="flex justify-end gap-5">
        <Link href="." className="bg-gray-300 hover:bg-gray-400 py-2 px-4">
          Geri
        </Link>

        <button className=" bg-blue-300 hover:bg-blue-400 py2 px-5 rounded-lg">
          {editItem ? "Kaydet" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default Form;

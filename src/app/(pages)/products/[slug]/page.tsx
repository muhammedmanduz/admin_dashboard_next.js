import Form from "@/app/components/form";
import { getProductById, getProducts } from "@/app/utils/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  //eğer parametre new ise ekleme modunda değilse düzenleme modunda çalış
  const isAdd = slug === "new";
  //düzenleme modundaysak url de id'si bulunan elemanın verilerini al
let editItem;
  if (!isAdd) {
   editItem= await getProductById(slug)
  }

 
  return (
    <div>
      <h1 className="title">{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</h1>

      <Form editItem={editItem}/>
    </div>
  );
};

export default Page;

import { productRouter } from "@/lib/database/productRouter";
import EditProduct from "@/ui/component/Form/EditProduct";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const productId = parseInt(params.productId);
  const { getProductById } = productRouter;
  const productById = await getProductById(productId);
  if (!productById) notFound();
  return (
    <section className="flex justify-center items-center">
      <EditProduct productData={productById} />
    </section>
  );
}

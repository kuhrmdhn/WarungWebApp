import { Suspense } from "react";
import Loading from "@/app/loading";
import Title from "@/ui/component/SectionTitle/Title";
import MovePageButton from "@/ui/elements/MovePageButton";
import AddProduct from "@/ui/component/Form/AddProduct";

export default function NewProduct() {
  return (
    <Suspense fallback={<Loading />}>
      <Title className="flex items-center gap-5 mb-9 pl-7">
        <MovePageButton link="/owner/all-products" />
        New Product
      </Title>
      <div className="flex flex-col items-center">
        <AddProduct />
      </div>
    </Suspense>
  );
}

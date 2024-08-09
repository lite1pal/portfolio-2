import Product from "@/components/cards/product";
import PageHeader from "@/components/page-header";
import ProductsList from "./products-list";

function Products() {
  return (
    <div className="my-16 space-y-10">
      <ProductsList />
    </div>
  );
}

export default Products;

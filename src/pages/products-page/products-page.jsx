import { Filter } from "../../components/filter/filter"
import { products } from "../../backend/db/products"
import { PriceProduct } from "../../utility/price-products-list"
import "./products.css"
const ProductsPage = () => {

 return(
  <>
   <main className="d-flex gap-2">
    <Filter />
    <div className="product-items-container">
     <div className="flex-align-centre py-2">
      <h2>Showing All Product</h2>
      <span> </span>
      <p>(showing 20 products)</p>
     </div>
      <div className="product-items">
       <PriceProduct productData={products} />
      </div>
     
    </div>
   </main>
  </>
 )
}

export {ProductsPage}
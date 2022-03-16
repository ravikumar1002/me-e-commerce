import { OverlayCard } from "../../utility/overlay-card"
import "./home.css"
import { DemoProduct } from "../../backend/db/demo-products"
import { categories } from "../../backend/db/categories"
import { HeroSection } from "./hero-section"
import { ProductShowCaseCard } from "../../utility/products-showcase-card"

import { Link } from "react-router-dom"

const Home = () => {
 return (
  <>
  <main>
   <OverlayCard OverlayCardData={categories} />
   <HeroSection />
   <div className="home-product-card-container">
    <ProductShowCaseCard showCaseProducts={DemoProduct} />
   </div>
   <div className="flex-center">
     <button>
      <Link to="/products" className="btn btn-primary btn-md">See More Product</Link>
      </button>
    </div>
    <div className="page-bottom-margin"></div>
    </main>
  </>
 )
}

export { Home }
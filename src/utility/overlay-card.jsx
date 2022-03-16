import { Link } from "react-router-dom"
import { ProductsPage } from "../pages/products-page/products-page"

const OverlayCard = ({ OverlayCardData }) => {

  return (
    <div>
      <div className="home-overlay-card-grid home-overlay-card">
        {OverlayCardData.map((item) => {
          return (
            <div className="image-card-container card-overlay-container image-card" key={item._id} >
              <Link to="/ProductsPage">
                <div className="image-card-container">
                  <img src={item.imgsources} className="image-card" />
                </div>
                <div className="card-overlay-content overlay-card-box">
                  <p className="fs-lg overlay-msg">{item.categoryName}</p>
                </div>
              </Link>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export { OverlayCard }
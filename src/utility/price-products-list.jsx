const PriceProduct = ({ productData }) => {
 return (
   <>
     {productData.map((item) => {
       return (
         <div
           className="card-body-md card-horizontal-md horizontal-product-card"
           key={item._id}
         >
           <div className="card-img flex-align-centre">
             <img
               src={item.imgSources}
               alt={item.title}
               className="vertical-product-card-img"
             />
           </div>
           <div className="card-content-container">
             <div className="card-img-heading">
               <h4 className="card-heading">{item.title}</h4>
             </div>

             <div className="card-content">
               <p>
                 <span className="fs-md fw-500">{item.price}</span>
               </p>
               <p>50% off</p>
             </div>

             <div className="card-footer">
               <span className="card-btn card-horizontal-buttons">
                 <button className="btn btn-primary">Go to Cart</button>
                 <button className="btn-block btn-x-sm py-1">
                   <a href="#" className="btn btn-secondary">
                     Move to Wishlist
                   </a>
                 </button>
               </span>
             </div>
           </div>
         </div>
       );
     })}
   </>
 );
};

export { PriceProduct };

{
 /* <span className="text-decoration-line-through text-gray"
       >{item.discount}</span
     > */
}

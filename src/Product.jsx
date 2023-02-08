import React  from "react";
import ProductList from "./ListItem/ProductList";
function Product(props) {
  return (
    <>
      <section>
        <h1 style={{ textAlign: "center" }}>Product List</h1>
        <div className='Card-item-list'>
      
    
        <ul className="cards">
        {props.listValue.map((item , key)=>{
          return <ProductList item={item} key={key} addToCart={props.addToCart}/>
        })}
        </ul>
        </div>
        
      </section>
    </>
  );
}
export default Product;

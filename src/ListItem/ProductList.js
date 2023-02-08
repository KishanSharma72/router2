import React from 'react'

function ProductList(props) {
  // console.log(props.item)
  const prop = props.item;
  // console.log(prop)
  function BuyNows(){
    alert("Product Successfully Buy!!!");
  }
  return (
    <>
    
        <li>
          <a href className="card">
            <img src={prop.img} className="card__image" alt={prop.name} />
            <div className="card__overlay">
              <div className="card__header">                     
                <img className="card__thumb" src={prop.img} alt={prop.name} />
                <div className="card__header-text">
                  <h3 className="card__title">{prop.name}</h3>            
                  <span className="card__status"></span>
                </div>
              </div>
              <p className="card__description">Lut ke mal chhut me lelo</p>
              
              
              <button  className="card_button" onClick={()=>props.addToCart(prop)} >Add To Cart</button>
            
              <button className="card_button1" onClick={BuyNows}>BuyNow</button>
            </div>
          </a>      
        </li>
        
    </>
      
  ) 

}

export default ProductList;
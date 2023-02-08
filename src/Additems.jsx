import React from 'react'
import BuyNow from './ListItem/BuyNow';

export const AddItems = (props) => {
  console.log(props.listValue)
  // if(props.listValue.addToCart){
  //   console.log(props.listValue.name)
  // }
 
  return (
    <>
    <section>
        <h2>Add to Cart</h2>

        {props.listValue.map((value)=>{
          if(value.addToCart){
            return <>
           
            <BuyNow  
            name={value.name}
            img={value.img}
            price={value.price}/>
            </>
          }
        })}
    </section>
    </>
  );
}
export default AddItems;
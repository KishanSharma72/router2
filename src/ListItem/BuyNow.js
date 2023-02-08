import React from 'react'

function BuyNow(props) {
  function Click(){

    alert("Product is successfully Buy!!");
  }

  return (
    <>
    
    <table className='Card_AAA'>
      
      <tbody>
        <tr className='Card_ccc'>
           <td><img src={props.img} alt={props.name} style={{height:"225px"}}/></td>
           <td>{props.name}</td>
           <td>{props.price}</td>
           <td><button style={{color:'black',backgroundColor:'yellow'}} onClick={Click}>BuyNow</button></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default BuyNow;

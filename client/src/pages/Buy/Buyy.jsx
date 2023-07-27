import React, {  useState } from 'react'
import "./buy.css"
const Buyy = () => {
  const [price]=useState({
    Free :0,Silver:100,Premium:1000
  })

const handlePayment=(price)=>{

  if (price === 0) {
   
    alert("Free option selected")
    
    return;
  } else{
     var options= {
      key : "rzp_test_xwBAaqs5mgIAsD",
      key_secret : "VUwO4fMD3FLKmxhoAp8zHh2Y",
      amount:price*100,
      currency:"INR",
      name:"Buy",
      description:"for Payment",
      handler: function(response){
        alert(response.razorpay_payment_id)
      },
      prefill:{
        name:"Aysha",
        email:"ayshashifana@gmail.com",
      },
      theme:{
        color : "#3399cc"
      }
     };

var pay = new window.Razorpay(options);
pay.open();

  }
 

}


  return (
    <div className='buy-container'>
      <div className='price-box'>
        <h3>Free</h3>
        <p>1 Question per day</p>
        <h5>Price:{price.Free}</h5>
        <button onClick={(e)=>handlePayment(price.Free)}>Buy</button>
      </div>

      <div className='price-box'>
        <h3>Silver</h3>
        <p>5 Questions per day</p>
        <h5>Price:{price.Silver}</h5>
        <button onClick={(e)=>handlePayment(price.Silver)}>Buy</button>
      </div>

      <div className='price-box'>
        <h3> Premium </h3>
        <p>Unlimited Questions per day</p>
        <h5>Price:{price.Premium}</h5>
        <button onClick={(e)=>handlePayment(price.Premium)}>Buy</button>
      </div>
    </div>
  )
}

export default Buyy
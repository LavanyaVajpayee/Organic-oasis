import React from 'react'
import './Item.css';
import { useEffect, useState } from "react";
// import { LiaRupeeSignSolid } from "react-icons/lia";
{/* <LiaRupeeSignSolid /> */}
function Item({key,id,name,image,price,oldprice,fulldata}) {
  let [num,setnum] = useState(0)
  let [elem, setelem] = useState(fulldata);

  useEffect(()=>{
    let count = 0
    elem.map((curElem)=>{
      count += curElem.quantity
    })
    setnum(count)

  },[elem])

  let update = (id) => {
    let updatedItems = elem.map((curElem) => {
      if (curElem.id === id) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    setelem(updatedItems);
  };

  let decrement = (id)=>{
    let updatedItems = elem.map((curElem) => {
      if (curElem.id === id) {
        return { ...curElem, quantity: curElem.quantity - 1 };
      }
      return curElem;
      });
      setelem(updatedItems);
  }
  return (
    <div className='item'>

        <img src={image}/> 
        <div style={{color:"black", fontFamily:"serif"}}>{name}</div>
        <div className="price" style={{color:"black", fontFamily:"serif"}}>
           <div className="item-new">
            {oldprice} Rs.
           </div>
           <div className="item-old">
            {price} Rs.
           </div>
        </div>
        <br/>
        <br/>
        {/* <button id='btn'></button> */}
        {elem.map((curElem) => {
        return (
          <div>
            {curElem.name}
            <>
              {curElem.quantity === 0 ? (
                <button onClick={() => update(curElem.id)}>Add</button>
              ) : (
                <div>
                  <button onClick={() => decrement(curElem.id)}>-</button>
                  <span>{curElem.quantity}</span>
                  <button onClick={() => update(curElem.id)}>+</button>
                </div>
              )}
            </>
          </div>
        );
      })}
    </div>
  )
}

export default Item
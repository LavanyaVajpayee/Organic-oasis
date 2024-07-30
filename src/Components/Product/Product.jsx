import React from "react";
import "./Product.css";
import Item from "../Items/Item";
import {full_data, dairy_data , fruits_data , frozen_data , millet_data ,pulses_data , vegies_data } from '../assets/data'
function Product() {
  return (
    <>
      <div className="product">
        <h1 style={{color:"black"}} id="cereal">Millet</h1>
        <div className="popular-item">
          {millet_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
              />
            );
          })}
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="fruits">Fruits</h1>
        <div className="popular-item">
          {fruits_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
                fulldata={full_data}
              />
            );
          })}
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="vegies">Vegies</h1>
        <div className="popular-item">
          {vegies_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
              />
            );
          })}
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="frozen">Frozen</h1>
        <div className="popular-item">
          {frozen_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
              />
            );
          })}
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="dairy">Dairy</h1>
        <div className="popular-item">
          {dairy_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
              />
            );
          })}
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="pulses">Pulses</h1>
        <div className="popular-item">
          {pulses_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;

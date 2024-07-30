import React from 'react';
import Footer from '../Components/Footer/Footer';
function Category() {
  return (
    <div style={{
      position: 'absolute',
      top: '20%',
      height: '500px',
      width: '600px',
      left: '30%',
      padding: '20px', // added padding to create some space between text and border
    }}>
      <p style={{
        fontSize: '1.2rem',
        color: 'black',
        marginBottom: '20px', // added margin bottom to create gap between paragraphs
      }}>
        Welcome to Organic Oasis, your one-stop destination for 
        farm-fresh, locally sourced food that brings an authentic 
        taste right to your table.
      </p>
      <p style={{
        fontSize: '1.2rem',
        color: 'black',
        marginBottom: '20px',
      }}>
        At Organic Oasis, we pride ourselves on delivering the highest
         quality products directly from local farms to you. Our commitment to 
         freshness and quality means you get to enjoy the rich, vibrant flavors 
         of just-harvested cereals, pulses, fruits, vegetables, frozen foods, 
         and dairy products.
      </p>
      <p style={{
        fontSize: '1.2rem',
        color: 'black',
        marginBottom: '20px',
      }}>
        But our mission goes beyond providing premium food; 
        we're dedicated to supporting local farmers and small businesses. 
        By choosing Organic Oasis, you're not just making a healthier choice 
        for yourself, but also empowering local farmers and helping to 
        strengthen our community.
      </p>
      <p style={{
        fontSize: '1.2rem',
        color: 'black',
      }}>
        Join us in celebrating the true essence of farm-to-table living, 
        where every bite you take supports a sustainable, thriving local 
        economy. Experience the Organic Oasis difference today – because 
        fresh tastes better.
      </p>
      <Footer/>
    </div>
  );
}

export default Category;
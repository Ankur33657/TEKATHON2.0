import React, { useEffect, useState } from "react";
import Footer from './Footer';
import '../App.js';
import odop from "../image/odop.jpg"
import odop2 from "../image/odop2.jpg"
// import odop from "../image/odop.jpg"


const Popu=()=>{
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result = await fetch('http://localhost:3001/products');
    result = await result.json();
    console.log(result);
    setProducts(result);
  }
  const sortedProducts = products.filter(item => item.ratingScore >=2)
  .sort((a, b) => b.ratingScore - a.ratingScore);

  
    return(
        <>
        

        <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={odop} class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 class="slide1 " >BEST OF ANKAPRIN EXCLUSIVE BRANDS</h3>
        <p class="slide1 ">JUST LAUNCHED SUMMER DEAL GRAB AT DISCOUNT 25%</p>
      </div>
    </div>
   
    <div class="carousel-item" data-bs-interval="1000">
      <img src={odop2} class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="slide1">BEST OF ANKAPRIN EXCLUSIVE BRANDS</h5>
        <p class="slide1">FLAT 40% OFF</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={odop} class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="slide1">BEST OF ANKAPRIN EXCLUSIVE BRANDS</h5>
        <p class="slide1">NIKE SHOE AT FLAT 50% OFF</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>

{

sortedProducts 
          .map((item, index) =>  (
<div class="popuproduct">
          <img class="popuitem-1" src={item.imagelink} alt='#' />
          <div class="popuitem-2">
            <div class="poputxt"><span style={{fontWeight:'bold'}}>Name-</span>{item.name}</div>
            <div class="poputxt"><span style={{fontWeight:'bold'}}>Price-</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>{item.price}</div>
            <div class="poputxt"><span style={{fontWeight:'bold'}}>Category-</span>{item.category}</div>
            <div class="poputxt"><span style={{fontWeight:'bold'}}>Company-</span>{item.company}</div>
            <div class="poputxt"><span style={{fontWeight:'bold'}}>Discription-</span>{item.discription}</div>
            <button class="poputxt popubtn" style={{backgroundColor:"#90ee90",borderRadius:"10px"}}><span style={{fontWeight:'bold'}}>RatingScore-</span>{item.ratingScore}</button>
            

          </div>
          
          </div> 
        
))
}

         <Footer/> 
        </>
    )
}

export default Popu;
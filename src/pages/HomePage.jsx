import React from "react";
import Header from "../components/Header";
import "./HomePage.css";
import { products } from "../../starting-code/data/products";

function HomePage() {
  //Asynch code = code that does not finish right away
  //fetch returns a promise
  // which has a method then() which lets us wait for aysnch code to finish
  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json(); //=json gives the data attached to the response, also async
    })
    .then((data) => { //=this .then waits for the above .then to finish and then runs.
      console.log(data); 
    });

  return (
    <>
      <title>Ecommerce Website</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <Header />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            //takes each value in an array and maps it to a new array
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${
                      product.rating.stars * 10
                    }.png`}
                  />
                  <div className="product-rating-count link-primary">
                    \{product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(product.priceCents / 100).toFixed(2)}{" "}
                  {/* convert cents to dollars*/}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;

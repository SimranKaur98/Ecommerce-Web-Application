import React from "react";
import api from "../../api/client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./HomePage.css";
import { useSearchParams } from "react-router";
import ProductsGrid from "./ProductsGrid";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : "/api/products";
      const response = await api.get(urlPath);
      setProducts(response.data);
      
    };
    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Website</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;

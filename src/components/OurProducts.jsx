import React from "react";
import { useEffect, useState } from "react";
import ProductsContent from "./ProductsContent";


function OurProducts() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000); // ⏱️ 

  //   return () => clearTimeout(timer);
  // }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // ⏱️ 5 seconds loader

    return () => clearTimeout(timer);
  }, []);

  return (
   <>
       <section id="projects" className="our-products section-3 odd showcase blog-grid filter-section projects">
      {loading ? <Loader /> : <ProductsContent />}
    </section>
   </>
  );
  
}

const Loader = () => {
  return (
    <div className="products-loader">
      <div className="spinner"></div>
      <p>Loading Products...</p>
    </div>
  );
};

export default OurProducts;

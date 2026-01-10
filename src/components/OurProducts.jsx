import React, { useState } from "react";
import "./OurProducts.css";

const productsData = [
  {
    id: 1,
    title: "Academic professional program in social media",
    category: "SOCIAL",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 2,
    title: "President's speech at the annual meeting",
    category: "EVENTS",
    image: "https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso",
  },
  {
    id: 3,
    title: "International business trip in Shanghai",
    category: "INSTITUTIONAL",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    id: 4,
    title: "Smart city innovation project",
    category: "INNOVATION",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const categories = [
  "ALL",
  "INSTITUTIONAL",
  "SOCIAL",
  "EVENTS",
  "INNOVATION",
];

function OurProducts() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts =
    activeCategory === "ALL"
      ? productsData
      : productsData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="products-section" id="projects">
      <h5 className="subtitle">We Do More For Everyone</h5>
      <h2 className="title text-white">Our Products</h2>

        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    {/* Filter Buttons */}
                    <div className="filter-buttons">
                        {categories.map((cat) => (
                        <button
                            key={cat}
                            className={activeCategory === cat ? "active" : ""}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="products-grid">
                        {filteredProducts.map((item) => (
                        <div className="product-card" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="overlay">
                            <h4>{item.title}</h4>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default OurProducts;

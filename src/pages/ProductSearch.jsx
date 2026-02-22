import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuStretchHorizontal } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "../styles/Product.css";
import { products } from "../lib/mockData";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

export default function ProductSearch() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-high-low");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfFirstItem + itemsPerPage,
  );

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, {
      state: product,
    });
  };

  return (
    <div className="products-container">
      <header className="products-header">
        <nav className="breadcrumb">
          <a>Home</a> &gt;
          <a>Store Client</a>
        </nav>

        <div className="header-top">
          <div className="search-wrapper">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <Button className="filter-btn">Filter</Button>
        </div>

        <div className="header-controls">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="price-high-low">Price High to Low</option>
            <option value="price-low-high">Price Low to High</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest Rating</option>
          </select>

          <div className="view-modes">
            {["week", "today", "month", "all"].map((mode) => (
              <Button
                key={mode}
                className={`mode-btn ${mode === "all" ? "active" : ""}`}
              >
                {mode.toUpperCase()}
              </Button>
            ))}
          </div>

          <div className="layout-controls">
            <Button
              className={`layout-btn grid-view ${viewMode === "grid" ? "active" : ""}`}
            >
              <RxDashboard />
            </Button>
            <Button
              className={`layout-btn list-view ${viewMode === "list" ? "active" : ""}`}
            >
              <LuStretchHorizontal />
            </Button>
          </div>
        </div>

        <div className="results-info">
          <p>
            {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfFirstItem + itemsPerPage, filteredProducts.length)}{" "}
            over {filteredProducts.length} results for{" "}
            <strong>{searchQuery}</strong>
          </p>
        </div>
      </header>

      <main className="products-main">
        <div className="products-grid">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              {product.discount && (
                <div className="discount-badge">{`SAVE ${product.discount}`}</div>
              )}

              <div className="product-image">
                <div
                  className="image-placeholder"
                  style={{ background: "#f0f0f0" }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="image-size"
                  />
                </div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                  <span className="rating-stars">
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </span>
                  <span className="rating-value">{product.rating}</span>
                </div>

                <div className="product-price">
                  {product.originalPrice && (
                    <span className="original-price">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="current-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <Button className="add-to-cart">Add</Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Pagination */}
      <footer className="products-footer">
        <div className="pagination">
          <span className="show-text">Show</span>
          <select className="items-select">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className="per-page-text">Per page</span>

          <div className="pagination-controls">
            <Button className="page-arrow">
              <FaAngleLeft />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-number ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <Button
              className="page-arrow"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              <FaAngleRight />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

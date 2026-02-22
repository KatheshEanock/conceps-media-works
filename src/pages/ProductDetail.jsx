import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { TbShoppingCart } from "react-icons/tb";
import "../styles/ProductDetails.css";
import Button from "../components/button/Button";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = product.price * quantity;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const handleAddToCart = () => {
    toast.success(
      `Added ${quantity} item(s)\nTotal: $${totalPrice.toFixed(2)}`,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      },
    );
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="product-detail-container">
      <header className="detail-header">
        <Button
          onClick={() => navigate("/products")}
          icon={FaArrowLeft}
          className="back-btn"
        >
          Back
        </Button>
      </header>

      <main className="detail-content">
        <div className="image-section">
          <div className="main-image">
            <div className="image-placeholder">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="image-size"
              />
            </div>
            {product.discount && (
              <div className="discount-badge">{`SAVE ${product.discount}`}</div>
            )}
          </div>

          <div className="image-nav">
            <Button onClick={handlePrevImage} className="nav-btn prev">
              <FaArrowLeft />
            </Button>
            <div className="image-counter">
              {currentImageIndex + 1} / {product.images.length}
            </div>
            <Button className="nav-btn next" onClick={handleNextImage}>
              <FaArrowRight />
            </Button>
          </div>
        </div>

        <div className="info-section">
          <div className="brand-logo">
            <strong style={{ fontSize: "24px" }}>✓</strong>
          </div>

          <h1 className="product-title">{product.name}</h1>

          <div className="product-meta">
            <div className="rating">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i} className="star">
                  ⭐
                </span>
              ))}
              <span className="rating-count">({product.reviews})</span>
            </div>
          </div>

          <div className="status-section">
            <div className="status-item">
              <span className="status-label">Availability</span>
              <span className="status-badge in-stock">{product.status}</span>
            </div>
            <div className="status-item">
              <span className="status-label">SKU</span>
              <span className="status-value">{product.sku}</span>
            </div>
          </div>

          <div className="category-section">
            <span className="status-label">Category</span>
            <span className="category-value">{product.category}</span>
          </div>

          <div className="rating-section">
            <span className="status-label">Rating</span>
            <div className="rating-display">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              {[...Array(5 - product.rating)].map((_, i) => (
                <span key={i + product.rating} style={{ opacity: 0.3 }}>
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <div className="more-info">
            <span className="status-label">More Info</span>
            <p className="info-text">{product.moreInfo}</p>
          </div>

          <div className="price-section">
            {product.originalPrice && (
              <span className="original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}

            <span className="current-price">${product.price.toFixed(2)}</span>

            <div className="total-price">
              Total: <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-control">
              <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <GoDash />
              </Button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                disabled
                min="1"
              />
              <Button onClick={() => setQuantity(quantity + 1)}>
                <GoPlus />
              </Button>
            </div>
          </div>

          <Button
            className="btn-add-to-cart"
            onClick={handleAddToCart}
            icon={TbShoppingCart}
          >
            Add to Cart
          </Button>
        </div>
      </main>

      <section className="description-section">
        <h2>Description</h2>
        <p>{product.description}</p>
      </section>

      <section className="reviews-section">
        <h2>Reviews ({product.reviews})</h2>
        <div className="reviews-list">
          {product.reviews_detail.map((review, idx) => (
            <div key={idx} className="review-item">
              <div className="review-header">
                <strong>{review.user}</strong>
                <span className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </span>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

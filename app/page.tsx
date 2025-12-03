export default function Home() {
  const stripeCheckoutUrl = "https://buy.stripe.com/5kQ9AU5QX4Do8Cu23l73G00"

  return (
    <div className="page-container">
      {/* Social Links */}
      <div className="social-links">
        <a
          href="https://instagram.com/buybagofair"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src="/instagram.svg" alt="Instagram" width="20" height="20" />
        </a>
        <a
          href="https://tiktok.com/@buybagofair"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src="/tiktok.svg" alt="TikTok" width="20" height="20" />
        </a>
      </div>

      {/* Stars */}
      <div
        className="star"
        style={{ top: "8%", left: "15%", animationDelay: "0.2s" }}
      />
      <div
        className="star"
        style={{ top: "15%", right: "20%", animationDelay: "0.7s" }}
      />
      <div
        className="star"
        style={{ top: "5%", left: "50%", animationDelay: "1.2s" }}
      />
      <div
        className="star"
        style={{ top: "18%", left: "8%", animationDelay: "0.9s" }}
      />

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Rainbow Header with Text */}
        <div className="rainbow-header">
          <div className="rainbow-container">
            <div className="rainbow" />
          </div>
          {/* Site Title - Overlaid on Rainbow */}
          <h1 className="site-title">buybagofair.com</h1>
        </div>

        {/* White Content Card */}
        <div className="content-card text-center">
          {/* Subtitle */}
          <p className="text-gray-700 text-lg mb-6">Get your own bag of air!</p>

          {/* Product Image */}
          <div className="image-box mb-6">
            <img src="/bagofair.png" alt="Bag of Air" />
          </div>

          {/* Buy Button */}
          <a href={stripeCheckoutUrl} className="buy-button">
            BUY NOW - $9.99
          </a>

          {/* Fun tagline */}
          <p className="text-gray-600 text-sm mt-6">
            100% Authentic Air - Freshly Bagged - Limited Edition
          </p>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"

export default function Success() {
  return (
    <div className="page-container">
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
      <div
        className="star"
        style={{ top: "12%", right: "8%", animationDelay: "1.5s" }}
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
          {/* Title */}
          <h2 className="main-title mb-4">SUCCESS!</h2>

          {/* Message */}
          <p className="text-gray-700 text-xl mb-4">
            Thank you for your purchase!
          </p>

          <p className="text-gray-600 text-base mb-6">
            Your premium bag of air is on its way!
          </p>

          {/* Confirmation Box */}
          <div className="mb-6">
            <h3 className="text-lg text-purple-700 mb-2">ORDER CONFIRMED</h3>
            <p className="text-xs text-gray-500">
              A confirmation email has been sent!
            </p>
          </div>

          {/* Back Button */}
          <Link href="/" className="buy-button">
            BACK HOME
          </Link>

          {/* Fun message */}
          <p className="text-gray-500 text-xs mt-6">
            Every breath with our air is pure joy!
          </p>
        </div>
      </div>
    </div>
  )
}

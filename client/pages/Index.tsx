import { useState } from "react";

interface Product {
  id: string;
  model: string;
  storage: string;
  price: number;
  condition: "Pre-Owned" | "First Hand";
  image: string;
}

const preOwnedProducts: Product[] = [
  {
    id: "iphone7",
    model: "iPhone 7",
    storage: "32GB",
    price: 3100,
    condition: "Pre-Owned",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone7-black-select-2016?wid=470&hei=556&fmt=png-alpha&.v=1472430177971"
  },
  {
    id: "iphone8plus",
    model: "iPhone 8 Plus",
    storage: "64GB",
    price: 3800,
    condition: "Pre-Owned",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1550795396391"
  },
  {
    id: "iphonex",
    model: "iPhone X",
    storage: "64GB",
    price: 4750,
    condition: "Pre-Owned",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-x-silver-select-2017?wid=470&hei=556&fmt=png-alpha&.v=1515616783714"
  },
  {
    id: "iphone11",
    model: "iPhone 11",
    storage: "64GB",
    price: 5200,
    condition: "Pre-Owned",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956361132"
  }
];

const firstHandProducts: Product[] = [
  {
    id: "iphone13promax",
    model: "iPhone 13 Pro Max",
    storage: "128GB",
    price: 15000,
    condition: "First Hand",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1631652954000"
  },
  {
    id: "iphone14",
    model: "iPhone 14",
    storage: "128GB",
    price: 13200,
    condition: "First Hand",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-blue-select-2022?wid=470&hei=556&fmt=png-alpha&.v=1661027886946"
  },
  {
    id: "iphone15promax",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    price: 24500,
    condition: "First Hand",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1693010033617"
  },
  {
    id: "iphone15",
    model: "iPhone 15",
    storage: "128GB",
    price: 16800,
    condition: "First Hand",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png-alpha&.v=1693660486326"
  }
];

function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative mb-4">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.model}
            className="w-full h-48 object-contain mx-auto transition-transform group-hover:scale-110 duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{product.model}</span>
            </div>
          </div>
        )}
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
          product.condition === "Pre-Owned" 
            ? "bg-orange-500 text-white" 
            : "bg-green-500 text-white"
        }`}>
          {product.condition}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-1">{product.model}</h3>
        <p className="text-white/80 mb-3">{product.storage}</p>
        <p className="text-2xl font-bold text-yellow-300">R{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27781347169"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.130.332.202c.045.072.045.419-.1.824z"/>
      </svg>
    </a>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Cndie's iPhone Collection
          </span>
        </h1>
        <p className="text-xl text-white/90 mb-6">Premium iPhones in Richards Bay</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Richards Bay, South Africa</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>078 134 7169</span>
          </div>
        </div>
        <p className="mt-4 text-lg text-yellow-300 font-semibold">
          Contact us via WhatsApp, SMS, or Call to place your order
        </p>
      </header>

      {/* Pre-Owned Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pre-Owned iPhones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {preOwnedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* First Hand Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">First Hand iPhones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {firstHandProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Order?</h3>
          <p className="text-white/90 mb-6">
            Contact us now to secure your iPhone. All orders are processed through our contact number.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/27781347169"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.130.332.202c.045.072.045.419-.1.824z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:0781347169"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/70">
              © 2024 Cndie's iPhone Collection. All rights reserved.
            </p>
            <p className="text-white/70 mt-2">
              Contact: 078 134 7169 | Richards Bay, South Africa
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

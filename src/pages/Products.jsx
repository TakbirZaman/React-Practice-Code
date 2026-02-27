const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop for developers.",
      price: "$1200",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest Android smartphone with great camera.",
      price: "$800",
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise-cancelling wireless headphones.",
      price: "$250",
    },
    {
      id: 4,
      name: "Smart Watch",
      description: "Track your fitness and notifications.",
      price: "$300",
    },
  ];

  return (
    <div className="container">
      <h2>Products Page</h2>

      <div className="products">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
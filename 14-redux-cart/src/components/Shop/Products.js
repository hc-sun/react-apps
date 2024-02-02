import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Product 1",
    description: "This is the first product - amazing!",
  },
  {
    id: "p2",
    price: 5,
    title: "Product 2",
    description: "This is the second product - good!",
  },
  {
    id: "p3",
    price: 7,
    title: "Product 3",
    description: "This is the third product - nice!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

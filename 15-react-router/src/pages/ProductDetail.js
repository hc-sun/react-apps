import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail Page</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">Back</Link>
    </>
  );
}

export default ProductDetail;

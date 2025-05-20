import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import ProductCart from "../Carts/ProductCart";
import { useNavigate } from "react-router";
import FilterData from "./FilterData";
import { IoReloadOutline } from "react-icons/io5";

function Products() {
  const { items, status } = useSelector((state) => state.products);
  const Data = items.products;
  console.log(items);
  const navigate = useNavigate();
  const productCard = (prod) => {
    navigate("/productCard");
    <ProductCart prodId={prod} />;
  };

  return (
    <div className="bg-slate-500 p-3">
      <FilterData />
      <div className="mt-4">
        {status ? (
          <div className="text-3xl text-center bg-amber-800 p-3 flex items-center justify-center">
            <svg className="size-6 animate-spin text-amber-300 mr-2" viewBox="0 0 24 24"><IoReloadOutline /></svg>
            <p className="text-amber-300">loading...</p>
          </div>
        ) : (
          <Row xs={2} md={3} xl={4} className="g-4">
            {Data.map((prod) => (
              <Col key={prod.id} className="h-[40%]">
                <Card onClick={() => productCard(prod)}>
                  {prod.thumbnail ? (
                    <Card.Img
                      variant="top"
                      src={prod.thumbnail}
                      height={150}
                      draggable="false"
                    />
                  ) : (
                    <Card.Img variant="top" src="/vite.png" height={150} />
                  )}
                  <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>brand : {prod.brand}</Card.Text>
                    <Card.Footer>{prod.availabilityStatus}</Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Products;

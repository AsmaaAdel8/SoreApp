import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { TiStarFullOutline } from "react-icons/ti";

function ProductCart(prodId) {
  const {
    title,
    thumbnail,
    stock,
    discountPercentage,
    description,
    rating,
    price,
    reviews,
    category,
    brand,
    returnPolicy,
    dimensions,
    images,
  } = prodId;
  const { count, setCount } = useState(0);
  useEffect(() => {
    console.log(prodId);
  });
  const CountOfProducts=()=>{
    switch (count){
      case 'increament':{
        return setCount(count+1);
      }
      case "decreament":{
        return setCount(count-1);
      }
      default:
        return count;
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <img
          src={thumbnail}
          draggable="false"
          height={250}
          className="col-span-2"
        />
        <div className="col-span-1">
          <h1>{title}</h1>
          <h2>
            {category} from brand {brand}
          </h2>
          <h3>{description}</h3>
          <h1>
            Price : {price} $ with DiscountPercentage : {discountPercentage} %
          </h1>
          <p>{stock} Product InStock</p>
          <p>returnPolicy : {returnPolicy}</p>
          <h1>
            Rating : {rating} <TiStarFullOutline />
          </h1>
          <div className="grid grid-cols-3 gap-4 bg-amber-600 m-auto">
            {images.map((img, inde) => {
              <img
                key={inde}
                draggable="false"
                src={img}
                height={120}
                width={120}
              />;
            })}
            <div className="text-center text-3xl font-bold">
              <h3>Product Dimensions</h3>
              <p>Width : {dimensions.width}</p>
              <p>Height : {dimensions.height}</p>
              <p>Depth : {dimensions.depth}</p>
            </div>
          </div>
          <div>
            <Row xs={2} md={3} xl={4} className="g-4 bg-amber-600 text-center">
              <h1>Some Reviews about our product 😎</h1>
              {reviews.map((person, index) => {
                <Col className="h-[40%]" key={index}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={thumbnail}
                      height={150}
                      draggable="false"
                    />
                    <Card.Body>
                      <Card.Header>{person.rating}</Card.Header>
                      <Card.Title>{person.reviewerName}</Card.Title>
                      <Card.Text>
                        {person.comment} <p>{person.date}</p>
                      </Card.Text>
                      <Card.Footer>{person.reviewerEmail}</Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>;
              })}
            </Row>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3">
              <button onClick={()=> CountOfProducts("increament")}>+</button>
              <p>{CountOfProducts()}</p>
              <button onClick={()=> CountOfProducts("decreament")}>-</button>
            </div>
            <p>Number of Prouducts You Need : {count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;

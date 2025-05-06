import React, { useEffect } from "react";
import { addProduct } from "../Redux/ProductSlice";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ViewBar() {
  useEffect(() => {
    addProduct();
  }, []);
  return (
    <div className="mt-[3%] mx-auto w-full">
      <div className="relative mb-[10%]">
        <img
          src="/items/2.jpg"
          draggable="false"
          alt="view bar shopping"
          className="w-full m-auto rounded-lg"
          height={250}
        />
        <div className="bg-black w-[25%] h-[20%] absolute top-[75%] right-[50%] left-[40%] text-white">
          <h3 className="text-center my-auto">Shopping Now!</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        />
      </div>
      <div className="bg-slate-500">
        <Row xs={2} md={3} xl={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ViewBar;

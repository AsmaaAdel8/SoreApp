import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Products from "./Products";

function FilterData() {
  const { items } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // filter data from api
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = items.filter((product) => product.category === category);
      setFilteredProducts(filtered);
        <Products DataFiltered={filteredProducts}/>
    } else {
      setFilteredProducts(items);
    }
  };
  return (
    <div className="m-auto text-center w-full">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={()=>filterByCategory("beauty")}>beauty</Button>
        <Button variant="secondary" onClick={()=>filterByCategory("fragrances")}>fragrances</Button>
        <Button variant="secondary" onClick={()=>filterByCategory("furniture")}>furniture</Button>
        <Button variant="secondary" onClick={()=>filterByCategory("groceries")}>groceries</Button>
      </ButtonGroup>
    </div>
  );
}

export default FilterData;

import Products from "../PrductsData/Products";

function ViewBar() {
 
  return (
    <div className="mt-[3%] mx-auto w-full">
      <div className="relative mb-[10%]">
        <img
          src="/items/2.jpg"
          draggable="false"
          alt="view bar shopping"
          className="w-full m-auto rounded-lg h-[50vh]"
        />
        <div className="bg-black w-[25%] h-[15%] absolute right-[50%] left-[50%] text-white top-[80%] rounded-2xl xs:w-[91vw] md:left-[50%]">
          <h3 className="text-center my-auto">Shopping Now!</h3>
        </div>
      </div>
      {/* products cards in home page */}
      <Products />
    </div>
  );
}

export default ViewBar;

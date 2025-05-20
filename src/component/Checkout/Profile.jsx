import { useSelector } from "react-redux";

function Profile() {
  const items = useSelector((state) => state.users.items);
  return (
    <div className="bg-yellow-500">
      {items.map((item, index) => {
        <div key={index}>
          return(
          <h1>Name: {item.name}</h1>)
        </div>;
      })}
    </div>
  );
}

export default Profile;

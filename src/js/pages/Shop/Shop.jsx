import Item from "./Item";
import useShopData from "./ShopData";

export default function Shop() {
  const { isPending, isError, data, error } = useShopData();

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Shop</p>
      {data.map((item) => {
        return <Item key={item.id} {...item} item={item} />;
      })}
    </>
  );
}

const ProductItem = ({ title, price, description, image }) => {
  return (
    <div className=" shadow border rounded pb-2">
      <img className="rounded-t w-full" src={image} alt={title} />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;

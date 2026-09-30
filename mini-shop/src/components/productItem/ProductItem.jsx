const ProductItem = ({ title, price, description, image }) => {
  return (
    <div className="flex flex-col shadow-sm hover:shadow-lg transition-shadow rounded-lg overflow-hidden pb-2">
      <img className="rounded-t w-full h-40 object-contain p-2" src={image} alt={title} />
      <div className="flex justify-between px-4 mt-2">
        <h3 className="line-clamp-1 font-bold flex-1">{title}</h3>
        <span className="font-bold">{price}$</span>
      </div>
      <div className="px-4 mt-1 flex-1">
        <p className="line-clamp-2 text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};
export default ProductItem;
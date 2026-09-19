import toyImg from "../../assets/pic2.jpg";

const ProductItem = () => {
  return (
    <div className=" shadow border rounded pb-2">
      <img className="rounded-t w-full" src={toyImg} alt="" />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
          کاپشن اسپورت چرمی طرح تیم فوتبال، مناسب استایل روزمره و ورزشی
        </p>
      </div>
    </div>
  );
};

export default ProductItem;

import toyImg from "../../assets/pic2.jpg";
import Button from "../buttons/Button";

const cartItem = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-4 mt-5 border-b pb-2">
      <img className="w-28 rounded" src={toyImg} alt="" />

      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>

        {/* prettier-ignore */}
        <div className="mt-2">
          <Button className="mr-2 px-1" variant="danger">Remove</Button>
          <Button className="px-1" variant="primary">+</Button>
          <span className="px-2">{2}</span>
          <Button className="px-1" variant="danger">-</Button>
        </div>
      </div>
    </div>
  );
};

export default cartItem;

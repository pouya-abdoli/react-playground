import { useParams } from "react-router";
import Container from "../../components/container/Container";
import toyImg from "../../assets/pic2.jpg";

const Product = () => {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className=" h-96 mt-4 shadow grid grid-cols-12">
          <div className=" col-span-10 p-4">
            <h1 className="text-right">عنوان محصول</h1>
            <div>
              <p className="text-right">قیمت: 25$</p>
              <p className="text-right">
                اتنیباتمسیاتبتسیبتنسیتنبتشسیبهسشیهعبتنشسیبتنسیهعبتنمشسبدنمیستنکب
                تسیبتتیسبنم تسیبتتیسبنم اتنیباتمسیاتبتسیبتنسیتنبتشسیبهسشیهعبتنشسیبتنسیهعبتنمشسبدنمیستنکب
                تسیبتتیسبنم تسیبتتیسبنم اتنیباتمسیاتبتسیبتنسیتنبتشسیبهسشیهعبتنشسیبتنسیهعبتنمشسبدنمیستنکب
                تسیبتتیسبنم تسیبتتیسبنم اتنیباتمسیاتبتسیبتنسیتنبتشسیبهسشیهعبتنشسیبتنسیهعبتنمشسبدنمیستنکب
                تسیبتتیسبنم تسیبتتیسبنم سبیییییییییییییییییییییییییییییییییاتنیباتمسیاتبتسیبتنسیتنبتشسیبهسشیهعبتنشسیبتنسیهعبتنمشسبدنمیستنکب
                تسیبتتیسبنم تسیبتتیسبنم اتنیباتمسیاتبتسیبتنسیتنبتشسیبهسشیهعبتنشسیبتنسیهعبتنمشسبدنمیستنکب
                تسیبتتیسبنم تسیبتتیسبنم
              </p>
            </div>
          </div>

          <div className=" col-span-2 bg-sky-200">
            <img className="w-full p-4 rounded" src={toyImg} alt="" />
            <div>
              <button>add to cart</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;

import top_category_1 from "../../assets/images/categories-01.jpg";
import top_category_2 from "../../assets/images/categories-02.jpg";
import top_category_3 from "../../assets/images/categories-03.jpg";
import top_category_4 from "../../assets/images/categories-04.jpg";
import top_category_5 from "../../assets/images/categories-05.jpg";
import CTA from "./CTA/CTA";
import "./TopCategory.css";

export default function TopCategory() {
  return (
    <>
      <div className="section categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Categories</h6>
                <h2>Top Categories</h2>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={top_category_1} alt="top categories" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={top_category_2} alt="top categories" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={top_category_3} alt="top categories" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={top_category_4} alt="top categories" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={top_category_5} alt="top categories" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA></CTA>
    </>
  );
}

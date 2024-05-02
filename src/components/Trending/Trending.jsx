import "./Trending.css";
import trending_img_1 from "../../assets/images/trending-01.jpg";
import trending_img_2 from "../../assets/images/trending-02.jpg";
import trending_img_3 from "../../assets/images/trending-03.jpg";
import trending_img_4 from "../../assets/images/trending-04.jpg";

export default function Trending() {
  return (
    <div className="section trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>Trending</h6>
              <h2>Trending Games</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <a href="shop.html">View All</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={trending_img_1} alt="Trending" />
                </a>
                <span className="price">
                  <em>$28</em>$20
                </span>
              </div>
              <div className="down-content">
                <span className="category">Action</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={trending_img_2} alt="Trending" />
                </a>
                <span className="price">$44</span>
              </div>
              <div className="down-content">
                <span className="category">Action</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={trending_img_3} alt="Trending" />
                </a>
                <span className="price">
                  <em>$64</em>$44
                </span>
              </div>
              <div className="down-content">
                <span className="category">Action</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={trending_img_4} alt="Trending" />
                </a>
                <span className="price">$32</span>
              </div>
              <div className="down-content">
                <span className="category">Action</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

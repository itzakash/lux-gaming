import "./Feature.css";
import feature_img_1 from "../../assets/images/featured-01.png";
import feature_img_2 from "../../assets/images/featured-02.png";
import feature_img_3 from "../../assets/images/featured-03.png";
import feature_img_4 from "../../assets/images/featured-04.png";

export default function Feature({ features }) {
  const featuresElement = features.map((obj, index) => {
    return (
      <div className="col-lg-3 col-md-6" key={index}>
        <a href="#">
          <div className="item">
            <div className="image">
              <img
                src={obj.image_path}
                alt="image"
                style={{ maxWidth: "44px" }}
              />
            </div>
            <h4>{obj.title}</h4>
          </div>
        </a>
      </div>
    );
  });
  return (
    <div className="features">
      <div className="container">
        <div className="row">{featuresElement}</div>
      </div>
    </div>
  );
}

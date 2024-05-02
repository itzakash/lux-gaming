import "./TopGames.css";
import top_games_1 from "../../assets/images/top-game-01.jpg";
import top_games_2 from "../../assets/images/top-game-02.jpg";
import top_games_3 from "../../assets/images/top-game-03.jpg";
import top_games_4 from "../../assets/images/top-game-04.jpg";
import top_games_5 from "../../assets/images/top-game-05.jpg";
import top_games_6 from "../../assets/images/top-game-06.jpg";

export default function TopGames() {
  return (
    <div className="section most-played">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>TOP GAMES</h6>
              <h2>Most Played</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <a href="shop.html">View All</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={top_games_1} alt="top games" />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={top_games_2} alt="top games" />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={top_games_3} alt="top games" />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={top_games_4} alt="top games" />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={top_games_5} alt="top games" />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img src={top_games_6} alt="top games" />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

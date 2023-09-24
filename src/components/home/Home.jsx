import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import clothes1 from "../../assets/clothes1.jpg";
import clothes2 from "../../assets/clothes2.jpg";
import clothes3 from "../../assets/clothes3.jpg";
import clothes4 from "../../assets/clothes4.avif";
import clothes5 from "../../assets/clothes5.jpg";
import "./home.css";

const ImgCarousel = () => {
  return (
    <Carousel fade className="btn-stuff">
      <Carousel.Item>
        <img className="imgCarousel" src={clothes1}></img>
        <Carousel.Caption>
          <h3>Cozy Knit Sweater</h3>
          <p>
            Embrace the chill in our cozy knit sweater. Its soft texture and
            warm design make it your winter wardrobe essential.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={clothes2}></img>
        <Carousel.Caption>
          <h3>Men's Casual Shirt</h3>
          <p>
            Elevate your style with our comfortable and versatile men's casual
            shirt. Perfect for both work and weekend outings.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={clothes3}></img>
        <Carousel.Caption>
          <h3>Women's Leather Jacket</h3>
          <p>
            Stay chic and edgy with our women's leather jacket. Crafted with
            premium leather, it's the perfect addition to your stylish attire.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={clothes4}></img>
        <Carousel.Caption>
          <h3>Women's Floral Blouse</h3>
          <p>
            Add a touch of elegance to your wardrobe with our women's floral
            blouse. Ideal for formal occasions or a stylish day out.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={clothes5}></img>
        <Carousel.Caption>
          <h3>Chunky Knit Sweater</h3>
          <p>
            Brave the cold in style with our chunky knit sweater. Its oversized
            design and cozy feel make it a must-have for winter.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <ImgCarousel></ImgCarousel>
      <div className="section-2">
        <div className="heading-item">
          <div>
            Welcome to <em>Fake Store API</em>{" "}
          </div>
        </div>
        <div className="split-section">
          <div className="text-block">
            <div>
              Your Ultimate Fashion Destination! Discover a world of style,
              comfort, and elegance that awaits you at <em>Fake Store API</em>.
              Our curated collection of clothing and accessories is designed to
              inspire and empower your unique fashion journey.{" "}
            </div>
            <div>
              👗 Fashion for Every Occasion: Whether you're dressing up for a
              special event, staying comfy at home, or elevating your everyday
              look, we have the perfect outfit waiting for you.
            </div>{" "}
            <div>
              🌟 Quality and Trendiness: Our pieces are crafted with precision
              and an eye for the latest trends. From classic staples to bold
              fashion statements, you'll find it all here.{" "}
            </div>
            <div>
              🛍️ Endless Variety: Explore a diverse range of styles, sizes, and
              colors to suit your individual taste. We believe that fashion
              should be inclusive, and our selection reflects that belief.
            </div>
            <div>
              💰 Unbeatable Value: Shop with confidence knowing you're getting
              the best value for your money. We offer competitive prices without
              compromising on quality.{" "}
            </div>
          </div>
          <div className="text-block">
            <div>
              🌎 Sustainable Fashion: Join us in our commitment to
              sustainability. Many of our products are made from eco-friendly
              materials, so you can look good and feel good about your choices.{" "}
            </div>
            <div>
              🛒 Shop with Ease: Our user-friendly website makes shopping a
              breeze. Find what you love, add it to your cart, and check out
              securely it's that simple!
            </div>{" "}
            <div>
              📦 Fast and Reliable Delivery: We understand the excitement of a
              new purchase. That's why we strive for speedy and reliable
              delivery, so you can enjoy your fashion finds in no time.{" "}
            </div>
            <div>
              🤝 Customer Satisfaction: Your satisfaction is our priority. If
              you ever have questions or concerns, our friendly customer support
              team is here to assist you.{" "}
            </div>
          </div>
        </div>
        <div className="heading-end-item">
          <div className="end-item">
            Don't wait any longer! Dive into the world of fashion at{" "}
            <em>Fake Store API</em> and let your style shine. Start shopping now
            and make every day a fashion statement. <em>Fake Store API</em>
          </div>
          <div className="btn-shop">
            <Link className="linkBtn" to={"/shop"}>
              <button className="shopBtn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

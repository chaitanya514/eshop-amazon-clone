import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.cloudways.com/blog/wp-content/uploads/What-is-Ecommerce.jpg"
          alt="What is Ecommerce"
          class="home__img"
        />
        <div className="home__row">
          <Product
            id="121213"
            prodTitle="Jacket"
            prodPrice={99}
            prodRatings={4}
            prodImage="https://editorialist.com/webcompressed/2021/8/015/006/118/15006118~khaki%20grey_0.jpg"
          />
          <Product
            id="456456"
            prodTitle="Woolen cap"
            prodPrice={39}
            prodRatings={4}
            prodImage="https://modovivendi.com/wp-content/uploads/2019/12/thumbnail1.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="159159"
            prodTitle="Alexa"
            prodPrice={79}
            prodRatings={5}
            prodImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/5C18/production/_119167532_amazon1.jpg"
          />
          <Product
            id="789789"
            prodTitle="Headphone"
            prodPrice={19}
            prodRatings={3}
            prodImage="https://media.istockphoto.com/photos/headphones-in-trippy-colors-picture-id1309150577?b=1&k=20&m=1309150577&s=170667a&w=0&h=K7HnYslGB5TYMbSvlImWfdLxGIA_m90VEafx3BQL0X8="
          />
          <Product
            id="148841"
            prodTitle="Sony Speaker"
            prodPrice={69}
            prodRatings={4}
            prodImage="https://www.sony-asia.com/image/63d10eb7ddbda961083aca080a43ac81?fmt=pjpeg&wid=660&hei=660&bgcolor=F1F5F9&bgc=F1F5F9"
          />
        </div>
        <div className="home__row">
          <Product
            id="741147"
            prodTitle="Macbook"
            prodPrice={1499}
            prodRatings={4}
            prodImage="https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

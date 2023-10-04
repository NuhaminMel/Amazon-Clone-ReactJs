import React from "react";
import "./Home.css";
import BannerImg from "./amznBanner.jpg";
import Product from "../Product/Product";
import Images from '../../Images/constant/ImgContainer'


/////////watch the video and add the slider

function Home() {

  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeImg" src={BannerImg} alt="Banner Img" />

        <div className="homeRow">
          <Product
            id="12321341"
            title="Fall Fashion Favorites"
            price={11.96}
            rating={5}
            img={Images.fall}
          />
          <Product
            id="12321342"
            title="Women's deals under $30"
            price={29.99}
            rating={4}
            img={Images.women}
          />
        </div>
        <div className="homeRow">
          <Product
            id="12321343"
            title="Stanley Quencher Stainless Steel Vacuum Insulated Tumbler"
            price={45}
            rating={5}
            img={Images.tumbler}
          />
          <Product
            id="12321344"
            title="Bloom Nutrition Super Greens Powder Smoothie - Probiotics for Digestion"
            price={39.99}
            rating={3}
            img={Images.blloom}
          />
          <Product
            id="12321345"
            title="WindDancer No Show Women Socks, Low Cut Ankle Sock for Women 5pairs"
            price={32.99}
            rating={4}
            img={Images.socks}
          />
        </div>

        {/* <h3>Trending Deals</h3> */}
        {/* <div className="homeRow">
          <div className="scrollY">
            <Product
              id="1"
              title="Water Sports Barefoot Swimming Socks"
              price={21.99}
              rating={3}
              img="https://m.media-amazon.com/images/I/41d0SKND2YL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="2"
              title="Magnetic Measuring Spoons Set"
              price={45.99}
              rating={5}
              img="https://m.media-amazon.com/images/I/518zuG0dziL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="3"
              title="Packing Cubes for Travel 7pcs Compression Storage Shoe Bag Clothing Bags-Black"
              price={19.99}
              rating={2}
              img="https://m.media-amazon.com/images/I/41PC9TiCPkL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="4"
              title="Smart Jump Rope, Adjustable Digital Counting Jump Ropes for Home Gym"
              price={20.99}
              rating={5}
              img="https://m.media-amazon.com/images/I/41TvV1OSwvL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="5"
              title="Makeup Vanity Mirror with Lights, 3 Color Lighting Modes 52 LED Trifold Portable Mirror, 360 Degree Adjustable Stand"
              price={82.99}
              rating={5}
              img="https://m.media-amazon.com/images/I/41b0jkgZh5L._SY500__AC_SY400_.jpg"
            />

            <Product
              id="6"
              title="USB C Wall Charger Block 20W for iPhone 11 and later"
              price={14.99}
              rating={4}
              img="https://m.media-amazon.com/images/I/21bckYQNd6L._SY500__AC_SY400_.jpg"
            />

            <Product
              id="7"
              title="Wind Chimes Soothing Melodic Tones Gifts for women, Outdoor Decor, Yard Decorations OutDoor"
              price={19.99}
              rating={3}
              img="https://m.media-amazon.com/images/I/419LF9qP7kL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="8"
              title="JiaSifu 40x60 Definition Monocular Telescope with SmartPhone Adapter, BAK4 Prism FMC Monocular with Clear Low Light Vision for Traveling"
              price={129.99}
              rating={4}
              img="https://m.media-amazon.com/images/I/41Qg4n1USJL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="9"
              title="Big 7.2ft Gold Metal Round Balloon Arch kit Decoration, Round Arch Backdrop Stand Kit, for Party"
              price={39.88}
              rating={4}
              img="https://m.media-amazon.com/images/I/51dCSu55VML._SY500__AC_SY400_.jpg"
            />

            <Product
              id="10"
              title="WOOTONG Electric Ear & Nose Trimmer, Portable Painless Nose hair Sghaver for Men"
              price={40.88}
              rating={4}
              img="https://m.media-amazon.com/images/I/313MQpTA7LL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="11"
              title="JMNGSHU European Travel Plug Adapter with 1 USB, Type C, 2 American Outlets International Power Adaptor, White01"
              price={13.59}
              rating={2}
              img="https://m.media-amazon.com/images/I/314byDUPCaL._SY500__AC_SY400_.jpg"
            />

            <Product
              id="12"
              title="Air Fryer Disposable Paper 100Pcs 6.3inch Round Non-Stick Paper Prime Oil-Proof Parchment Paper"
              price={30}
              rating={4}
              img="https://m.media-amazon.com/images/I/51krYJ1fJLL._SY500__AC_SY400_.jpg"
            />
            <Product
              id="13"
              title="Beckham Hotel Collection Bed Pillows King Size Set of 2 - Down Alternative Bedding Gel Cooling Big Pillow for Back"
              price={81.69}
              rating={5}
              img="https://m.media-amazon.com/images/I/31-uj6IuY7L._SY500__AC_SY400_.jpg"
            />
            <Product
              id="14"
              title="BIDEN Mens Watches Chronograph Stainless Steel Waterproof Date Analog Quartz Watch Business Wrist for Men"
              price={31.05}
              rating={4}
              img="https://m.media-amazon.com/images/I/51iM66a16bL._SY500__AC_SY400_.jpg"
            />
            <Product
              id="15"
              title="NutraBlast Boric Acid Suppositories - 100% Pure Made in USA - Boric Life Intimate Health Support (30ct)"
              price={18.8}
              rating={4}
              img="https://m.media-amazon.com/images/I/31ZAX7SgfeL._SY500__AC_SY400_.jpg"
            />
            <Product
              id="16"
              title="RENPHO Smart BMI, Weight Scale, Wireless, Digital Bathroom Body Composition/Fat analyzer with smartphone with 400lbs - White Elis 1"
              price={30}
              rating={4}
              img="https://m.media-amazon.com/images/I/41T-UAnddwL._SY500__AC_SY400_.jpg"
            />
            <Product
              id="17"
              title="Bedsure Honey Ginger Duvet Cover Queen Size -Soft Prewashed Queen Duvet Cover Set, 3 Pieces, 1 Duvet Cover 90x90in with Zipper, Comfortor not included"
              price={28.04}
              rating={4}
              img="https://m.media-amazon.com/images/I/51lQ9IB3nXL._SY500__AC_SY400_.jpg"
            />
            <Product
              id="18"
              title="Utopia Bedding All Season Fiberfill Comforter - Plush Siliconized Twin - Box Stitched, 250GSM"
              price={28.99}
              rating={2}
              img="https://m.media-amazon.com/images/I/41+jPGG-0NL._SY500__AC_SY400_.jpg"
            />
            <Product
              id="19"
              title="VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen, Tumeric - Original Japanese Complex Infused"
              price={11.99}
              rating={4}
              img="https://m.media-amazon.com/images/I/41Md73Ay09L._SY500__AC_SY400_.jpg"
            />
          </div>
        </div> */}

        <div className="homeRow">
          <Product
            id="12321346"
            title="JBL GO2 - Waterproof Ultra Portable Bluetooth Speaker - Red"
            price={36.78}
            rating={4}
            img={Images.JBL}
          />
          <Product
            id="12321347"
            title="Ailun 3 Pack Screen Protector for iPhone"
            price={8.98}
            rating={3}
            img={Images.glass}
          />
          <Product
            id="12321348"
            title="Apple iPad (9th Generation): with Bionic chip, 10.2inch-space grey"
            price={269.99}
            rating={4}
            img={Images.iPad}
          />
        </div>
        <div className="homeRow">
          <Product
            id="12321349"
            title="Taj Gourmet All Natural Raw Honeycomb 100% Honey Pure Turkish Raw Honey Comb"
            price={9.99}
            rating={2}
            img={Images.honey}
          />
          <Product
            id="12321340"
            title="Sakura Box Japanese Candy & Snacks Dagashi Set"
            price={35.97}
            rating={5}
            img={Images.candy}
          />
        </div>
        <div className="homeRow">
          <Product
            id="12321300"
            title="Desk Pad Protector,Mouse Pad/ Mat, Non-Slip PU Leather Desk Blotter,Laptop Desk Pad(Black,31.5' x 15.7')"
            price={13.99}
            rating={4}
            img={Images.computer}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

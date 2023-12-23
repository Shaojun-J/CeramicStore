import React from "react";
import Reviews from "../components/Reviews";
import data from "../data/reviewsData.json";
import ProductData from "../data/productsData.json";
import ProductInfo from "../components/ProductInfo";
import Promo from "../components/Promo";
import Navbar from "../components/Navbar";
import RecommandCard from "../components/RecommandCard";
import ImageSlider from "../components/ImageSlieder";
import {useParams} from "react-router-dom";


const ProductDetail = () => {

    const { id } =useParams();
    console.log({id});
    const pdt = ProductData.products.find((proudct)=> proudct.id === id
    );
    let card = [];
    for (let i = 0; i < ProductData.products.length; i++) {
      const productInfo = ProductData.products[i];
      card.push(
        <RecommandCard
          key={productInfo.id}
          id={productInfo.id}
          imgURL={productInfo.imageURL[1]}
          name={`${productInfo.name[1].toUpperCase()}${productInfo.name.slice(1)}`}
          price={productInfo.price}
          rate={productInfo.rate}
          numberOfViews={productInfo.number_of_reviews}
        />
      );
    }

  const reviews = data.reviews.map((item) => (
    <Reviews
      key={item.id}
      title={item.title}
      date={item.date}
      country={item.country}
      text={item.text}
      rate={item.rate}
    />
  ));
  const product= (
    <ProductInfo
      key={pdt.id}
      name={pdt.name}
      price={pdt.price}
      rate={pdt.rate}
      reviewNumber={pdt.number_of_reviews}
      included={pdt.included}
      detail={pdt.detail}
      inventory={pdt.inventory}
    />
  );

const imgSlider = (
    <ImageSlider
    imgURLs={pdt.imageURL}
    />
)

  

  return (
    <div className="about-page">
    <Promo />
    <Navbar />
        <div className="proudctDetail-body ">
        <div className="products-detail-container">
        <div className="products-images">
            {imgSlider}
        </div>
        <div className="productInfo">{product}</div>
      </div>
      <div className="margin-top-bottom products-detail-container">
        <h1 className="review-section-title ">CUSTOMER REVIEWS</h1>
        <div>{reviews}</div>
      </div>
      <div className="recommand-card-section">
      <p className="recommand-section-title "> You may also like</p>
      <div className="image-slider">
        <button value="left"></button>
      <div className="card-container recommand-card-section">
        {card}
        </div>
        </div>

        </div>
        </div>
    </div>
  );
};

export default ProductDetail;
